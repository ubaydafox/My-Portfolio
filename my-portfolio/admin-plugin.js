/* global process, Buffer */
// Local admin backend for the portfolio.
// Runs ONLY inside the Vite dev server (`npm run dev`). It is never part of the production build,
// so the deployed site has no upload/edit endpoints at all.
//
// Password: set ADMIN_PASSWORD in my-portfolio/.env.local (git-ignored).

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ALLOWED_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".avif"]);
const MAX_BODY = 25 * 1024 * 1024; // 25 MB
const SESSION_TTL = 8 * 60 * 60 * 1000; // 8 hours

export default function adminPlugin({ password }) {
  const root = process.cwd();
  const galleryDir = path.join(root, "src", "gallery");
  const contentFile = path.join(root, "src", "data", "content.json");
  const sessions = new Map(); // token -> expiry
  const failed = new Map(); // ip -> { count, until }

  const readContent = () => JSON.parse(fs.readFileSync(contentFile, "utf8"));
  const writeContent = (data) =>
    fs.writeFileSync(contentFile, JSON.stringify(data, null, 2) + "\n", "utf8");

  const safeEqual = (a, b) => {
    const ha = crypto.createHash("sha256").update(String(a)).digest();
    const hb = crypto.createHash("sha256").update(String(b)).digest();
    return crypto.timingSafeEqual(ha, hb);
  };

  const sanitizeFilename = (name) => {
    const base = path.basename(String(name || "")).toLowerCase();
    const ext = path.extname(base);
    const stem = base.slice(0, base.length - ext.length).replace(/[^a-z0-9-_]+/g, "-").replace(/^-+|-+$/g, "");
    if (!ALLOWED_EXT.has(ext) || !stem) return null;
    return stem + ext;
  };

  const listFiles = () =>
    fs.existsSync(galleryDir)
      ? fs.readdirSync(galleryDir).filter((f) => ALLOWED_EXT.has(path.extname(f).toLowerCase()))
      : [];

  const readBody = (req) =>
    new Promise((resolve, reject) => {
      let size = 0;
      const chunks = [];
      req.on("data", (c) => {
        size += c.length;
        if (size > MAX_BODY) {
          reject(Object.assign(new Error("Payload too large"), { status: 413 }));
          req.destroy();
        } else chunks.push(c);
      });
      req.on("end", () => {
        try {
          resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString("utf8")) : {});
        } catch {
          reject(Object.assign(new Error("Invalid JSON"), { status: 400 }));
        }
      });
      req.on("error", reject);
    });

  const send = (res, status, data) => {
    res.statusCode = status;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-store");
    res.end(JSON.stringify(data));
  };

  const isAuthed = (req) => {
    const token = (req.headers.authorization || "").replace(/^Bearer\s+/i, "");
    const exp = token && sessions.get(token);
    if (!exp) return false;
    if (Date.now() > exp) {
      sessions.delete(token);
      return false;
    }
    return true;
  };

  return {
    name: "portfolio-local-admin",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__admin/api", async (req, res) => {
        try {
          const url = new URL(req.url, "http://localhost");
          const route = url.pathname.replace(/\/+$/, "") || "/";
          const ip = req.socket.remoteAddress || "local";

          // ---- Login ----
          if (route === "/login" && req.method === "POST") {
            if (!password) {
              return send(res, 500, { error: "ADMIN_PASSWORD is not set in .env.local" });
            }
            const lock = failed.get(ip);
            if (lock && lock.until > Date.now()) {
              return send(res, 429, { error: "Too many attempts. Try again in a few minutes." });
            }
            const body = await readBody(req);
            if (!safeEqual(body.password || "", password)) {
              const count = (lock?.count || 0) + 1;
              failed.set(ip, { count, until: count >= 5 ? Date.now() + 5 * 60 * 1000 : 0 });
              return send(res, 401, { error: "Incorrect password" });
            }
            failed.delete(ip);
            const token = crypto.randomBytes(32).toString("hex");
            sessions.set(token, Date.now() + SESSION_TTL);
            return send(res, 200, { token });
          }

          // ---- Everything below requires a valid session ----
          if (!isAuthed(req)) return send(res, 401, { error: "Not authenticated" });

          if (route === "/logout" && req.method === "POST") {
            sessions.delete((req.headers.authorization || "").replace(/^Bearer\s+/i, ""));
            return send(res, 200, { ok: true });
          }

          if (route === "/content" && req.method === "GET") {
            return send(res, 200, { content: readContent(), files: listFiles() });
          }

          // Save gallery metadata and/or welfare content
          if (route === "/content" && req.method === "PUT") {
            const body = await readBody(req);
            const content = readContent();
            if (body.gallery && typeof body.gallery === "object") content.gallery = body.gallery;
            if (body.welfare && typeof body.welfare === "object") content.welfare = body.welfare;
            writeContent(content);
            return send(res, 200, { ok: true, content });
          }

          // Upload an image (base64) into src/gallery/
          if (route === "/upload" && req.method === "POST") {
            const body = await readBody(req);
            let name = sanitizeFilename(body.filename);
            if (!name) return send(res, 400, { error: "Unsupported file type" });
            const match = /^data:[^;]+;base64,(.+)$/.exec(body.data || "");
            if (!match) return send(res, 400, { error: "Invalid image data" });

            fs.mkdirSync(galleryDir, { recursive: true });
            const ext = path.extname(name);
            const stem = name.slice(0, -ext.length);
            let i = 1;
            while (fs.existsSync(path.join(galleryDir, name))) name = `${stem}-${i++}${ext}`;
            fs.writeFileSync(path.join(galleryDir, name), Buffer.from(match[1], "base64"));

            const content = readContent();
            const maxOrder = Math.max(0, ...Object.values(content.gallery || {}).map((m) => m.order || 0));
            content.gallery = content.gallery || {};
            content.gallery[name] = { order: maxOrder + 1, ...(body.meta || {}) };
            writeContent(content);
            return send(res, 200, { ok: true, file: name, content, files: listFiles() });
          }

          // Delete an image file and its metadata
          if (route === "/delete" && req.method === "POST") {
            const body = await readBody(req);
            const name = sanitizeFilename(body.file);
            if (!name) return send(res, 400, { error: "Invalid file" });
            const target = path.join(galleryDir, name);
            if (fs.existsSync(target)) fs.unlinkSync(target);
            const content = readContent();
            if (content.gallery) delete content.gallery[name];
            writeContent(content);
            return send(res, 200, { ok: true, content, files: listFiles() });
          }

          return send(res, 404, { error: "Not found" });
        } catch (err) {
          return send(res, err.status || 500, { error: err.message || "Server error" });
        }
      });
    },
  };
}
