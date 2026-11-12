import { useEffect, useState, useCallback } from "react";

const API = "/__admin/api";
const TOKEN_KEY = "portfolio_admin_token";
const IS_PROD = import.meta.env.PROD;

const emptyUpload = {
  title: "",
  category: "Design",
  subcategory: "",
  tools: "",
  description: "",
};

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

export default function Admin() {
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY) || "");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [tab, setTab] = useState("gallery");
  const [content, setContent] = useState(null);
  const [files, setFiles] = useState([]);
  const [notice, setNotice] = useState({ type: "", text: "" });
  const [busy, setBusy] = useState(false);

  // Upload form
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadPreview, setUploadPreview] = useState("");
  const [uploadMeta, setUploadMeta] = useState(emptyUpload);

  const flash = (type, text) => {
    setNotice({ type, text });
    setTimeout(() => setNotice({ type: "", text: "" }), 3500);
  };

  const logout = useCallback(() => {
    if (token) fetch(`${API}/logout`, { method: "POST", headers: { Authorization: `Bearer ${token}` } }).catch(() => {});
    sessionStorage.removeItem(TOKEN_KEY);
    setToken("");
    setContent(null);
  }, [token]);

  const api = useCallback(
    async (route, method = "GET", body) => {
      const res = await fetch(`${API}${route}`, {
        method,
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: body ? JSON.stringify(body) : undefined,
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 401) {
        sessionStorage.removeItem(TOKEN_KEY);
        setToken("");
        throw new Error("Session expired, please log in again.");
      }
      if (!res.ok) throw new Error(data.error || "Request failed");
      return data;
    },
    [token]
  );

  useEffect(() => {
    if (!token || IS_PROD) return;
    api("/content")
      .then((d) => {
        setContent(d.content);
        setFiles(d.files);
      })
      .catch((e) => setLoginError(e.message));
  }, [token, api]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Login failed");
      sessionStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      setPassword("");
    } catch (err) {
      setLoginError(err.message);
    }
  };

  // ---------- Gallery ----------
  const handlePickFile = async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setUploadFile(f);
    setUploadPreview(await fileToDataUrl(f));
    if (!uploadMeta.title) {
      setUploadMeta((m) => ({ ...m, title: f.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ") }));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!uploadFile) return flash("error", "Choose an image first.");
    setBusy(true);
    try {
      const d = await api("/upload", "POST", {
        filename: uploadFile.name,
        data: uploadPreview,
        meta: uploadMeta,
      });
      setContent(d.content);
      setFiles(d.files);
      setUploadFile(null);
      setUploadPreview("");
      setUploadMeta(emptyUpload);
      e.target.reset();
      flash("ok", `Uploaded ${d.file} to src/gallery/`);
    } catch (err) {
      flash("error", err.message);
    } finally {
      setBusy(false);
    }
  };

  const updateMeta = (file, field, value) => {
    setContent((c) => ({
      ...c,
      gallery: { ...c.gallery, [file]: { ...(c.gallery[file] || {}), [field]: value } },
    }));
  };

  const saveGallery = async () => {
    setBusy(true);
    try {
      const d = await api("/content", "PUT", { gallery: content.gallery });
      setContent(d.content);
      flash("ok", "Gallery details saved.");
    } catch (err) {
      flash("error", err.message);
    } finally {
      setBusy(false);
    }
  };

  const deleteImage = async (file) => {
    if (!window.confirm(`Delete ${file}? This removes the file from src/gallery/.`)) return;
    setBusy(true);
    try {
      const d = await api("/delete", "POST", { file });
      setContent(d.content);
      setFiles(d.files);
      flash("ok", `${file} deleted.`);
    } catch (err) {
      flash("error", err.message);
    } finally {
      setBusy(false);
    }
  };

  // ---------- Welfare ----------
  const w = content?.welfare;
  const setW = (patch) => setContent((c) => ({ ...c, welfare: { ...c.welfare, ...patch } }));
  const setListItem = (list, i, field, value) =>
    setW({ [list]: w[list].map((it, idx) => (idx === i ? { ...it, [field]: value } : it)) });
  const removeListItem = (list, i) => setW({ [list]: w[list].filter((_, idx) => idx !== i) });
  const moveListItem = (list, i, dir) => {
    const arr = [...w[list]];
    const j = i + dir;
    if (j < 0 || j >= arr.length) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    setW({ [list]: arr });
  };

  const saveWelfare = async () => {
    setBusy(true);
    try {
      const d = await api("/content", "PUT", { welfare: content.welfare });
      setContent(d.content);
      flash("ok", "Students Welfare section saved.");
    } catch (err) {
      flash("error", err.message);
    } finally {
      setBusy(false);
    }
  };

  // ---------- Render ----------
  return (
    <div className="admin-root">
      <style>{adminCss}</style>

      <header className="admin-top">
        <div className="admin-brand">AU <span>Admin</span></div>
        <div style={{ display: "flex", gap: "0.8rem" }}>
          <a href="#/" className="a-btn a-btn-outline">View Site</a>
          {token && !IS_PROD && <button className="a-btn a-btn-outline" onClick={logout}>Log Out</button>}
        </div>
      </header>

      {IS_PROD ? (
        <div className="admin-card admin-narrow">
          <h2>Admin is local-only</h2>
          <p>
            For security, the admin panel only works on your own computer. Run <code>npm run dev</code> in the
            <code> my-portfolio</code> folder and open <code>http://localhost:5173/#/admin</code>.
          </p>
        </div>
      ) : !token ? (
        <form className="admin-card admin-narrow" onSubmit={handleLogin}>
          <h2>Sign In</h2>
          <p className="muted">Enter the admin password from <code>.env.local</code>.</p>
          <input
            type="password"
            className="a-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            required
          />
          {loginError && <div className="a-notice error">{loginError}</div>}
          <button className="a-btn a-btn-primary" type="submit" style={{ width: "100%", marginTop: "1rem" }}>
            Log In
          </button>
        </form>
      ) : !content ? (
        <div className="admin-card admin-narrow"><p className="muted">Loading content...</p></div>
      ) : (
        <main className="admin-main">
          <nav className="admin-tabs">
            <button className={tab === "gallery" ? "active" : ""} onClick={() => setTab("gallery")}>
              Gallery ({files.length})
            </button>
            <button className={tab === "welfare" ? "active" : ""} onClick={() => setTab("welfare")}>
              Students Welfare
            </button>
          </nav>

          {notice.text && <div className={`a-notice ${notice.type}`}>{notice.text}</div>}

          {tab === "gallery" && (
            <>
              {/* Upload */}
              <form className="admin-card" onSubmit={handleUpload}>
                <h3>Upload New Image</h3>
                <p className="muted">
                  Files are saved into <code>src/gallery/</code>. You can also copy images into that folder directly; they show up automatically.
                </p>
                <div className="a-grid">
                  <div>
                    <label className="a-label">Image file</label>
                    <input type="file" accept="image/*" className="a-input" onChange={handlePickFile} />
                    {uploadPreview && <img src={uploadPreview} alt="Preview" className="a-preview" />}
                  </div>
                  <div>
                    <label className="a-label">Title</label>
                    <input className="a-input" value={uploadMeta.title} onChange={(e) => setUploadMeta({ ...uploadMeta, title: e.target.value })} />
                    <div className="a-grid2">
                      <div>
                        <label className="a-label">Category</label>
                        <select className="a-input" value={uploadMeta.category} onChange={(e) => setUploadMeta({ ...uploadMeta, category: e.target.value })}>
                          <option>Design</option>
                          <option>Photography</option>
                        </select>
                      </div>
                      <div>
                        <label className="a-label">Subcategory</label>
                        <input className="a-input" placeholder="Poster, Portrait..." value={uploadMeta.subcategory} onChange={(e) => setUploadMeta({ ...uploadMeta, subcategory: e.target.value })} />
                      </div>
                    </div>
                    <label className="a-label">Tools / Camera</label>
                    <input className="a-input" value={uploadMeta.tools} onChange={(e) => setUploadMeta({ ...uploadMeta, tools: e.target.value })} />
                    <label className="a-label">Description</label>
                    <textarea className="a-input" rows={3} value={uploadMeta.description} onChange={(e) => setUploadMeta({ ...uploadMeta, description: e.target.value })} />
                  </div>
                </div>
                <button className="a-btn a-btn-primary" disabled={busy} type="submit">
                  {busy ? "Uploading..." : "Upload to Gallery"}
                </button>
              </form>

              {/* Existing */}
              <div className="admin-card">
                <div className="a-row-between">
                  <h3>Current Images</h3>
                  <button className="a-btn a-btn-primary" disabled={busy} onClick={saveGallery}>Save All Changes</button>
                </div>
                {files.length === 0 && <p className="muted">No images yet.</p>}
                {[...files]
                  .sort((a, b) => (content.gallery[a]?.order ?? 9999) - (content.gallery[b]?.order ?? 9999))
                  .map((file) => {
                    const m = content.gallery[file] || {};
                    return (
                      <div key={file} className="a-item">
                        <img src={`/src/gallery/${file}`} alt={m.title || file} className="a-thumb" />
                        <div className="a-item-fields">
                          <div className="a-file">
                            {file}
                            {!content.gallery[file] && <span className="a-tag">New from folder</span>}
                            {m.hidden && <span className="a-tag">Hidden</span>}
                          </div>
                          <div className="a-grid3">
                            <input className="a-input" placeholder="Title" value={m.title || ""} onChange={(e) => updateMeta(file, "title", e.target.value)} />
                            <select className="a-input" value={m.category || "Design"} onChange={(e) => updateMeta(file, "category", e.target.value)}>
                              <option>Design</option>
                              <option>Photography</option>
                            </select>
                            <input className="a-input" placeholder="Subcategory" value={m.subcategory || ""} onChange={(e) => updateMeta(file, "subcategory", e.target.value)} />
                            <input className="a-input" placeholder="Tools" value={m.tools || ""} onChange={(e) => updateMeta(file, "tools", e.target.value)} />
                            <input className="a-input" type="number" placeholder="Order" value={m.order ?? ""} onChange={(e) => updateMeta(file, "order", e.target.value === "" ? undefined : Number(e.target.value))} />
                            <label className="a-check">
                              <input type="checkbox" checked={Boolean(m.hidden)} onChange={(e) => updateMeta(file, "hidden", e.target.checked)} />
                              Hide on site
                            </label>
                          </div>
                          <textarea className="a-input" rows={2} placeholder="Description" value={m.description || ""} onChange={(e) => updateMeta(file, "description", e.target.value)} />
                        </div>
                        <button className="a-btn a-btn-danger" disabled={busy} onClick={() => deleteImage(file)}>Delete</button>
                      </div>
                    );
                  })}
              </div>
            </>
          )}

          {tab === "welfare" && w && (
            <>
              <div className="admin-card">
                <div className="a-row-between">
                  <h3>Role & Introduction</h3>
                  <button className="a-btn a-btn-primary" disabled={busy} onClick={saveWelfare}>Save Welfare Section</button>
                </div>
                <div className="a-grid2">
                  <div>
                    <label className="a-label">Organization</label>
                    <input className="a-input" value={w.organization} onChange={(e) => setW({ organization: e.target.value })} />
                  </div>
                  <div>
                    <label className="a-label">Your Role</label>
                    <input className="a-input" value={w.role} onChange={(e) => setW({ role: e.target.value })} />
                  </div>
                </div>
                <label className="a-label">Introduction paragraph</label>
                <textarea className="a-input" rows={4} value={w.intro} onChange={(e) => setW({ intro: e.target.value })} />
              </div>

              <div className="admin-card">
                <div className="a-row-between">
                  <h3>Impact Numbers</h3>
                  <button className="a-btn a-btn-outline" onClick={() => setW({ stats: [...w.stats, { value: "", label: "" }] })}>Add Number</button>
                </div>
                {w.stats.map((s, i) => (
                  <div key={i} className="a-list-row">
                    <input className="a-input" style={{ maxWidth: 140 }} placeholder="500+" value={s.value} onChange={(e) => setListItem("stats", i, "value", e.target.value)} />
                    <input className="a-input" placeholder="Label" value={s.label} onChange={(e) => setListItem("stats", i, "label", e.target.value)} />
                    <button className="a-btn a-btn-outline" onClick={() => moveListItem("stats", i, -1)}>Up</button>
                    <button className="a-btn a-btn-outline" onClick={() => moveListItem("stats", i, 1)}>Down</button>
                    <button className="a-btn a-btn-danger" onClick={() => removeListItem("stats", i)}>Remove</button>
                  </div>
                ))}
              </div>

              <div className="admin-card">
                <div className="a-row-between">
                  <h3>Timeline</h3>
                  <button
                    className="a-btn a-btn-outline"
                    onClick={() => setW({ timeline: [{ date: "", title: "", description: "" }, ...w.timeline] })}
                  >
                    Add Entry (top)
                  </button>
                </div>
                {w.timeline.map((t, i) => (
                  <div key={i} className="a-timeline-row">
                    <div className="a-grid2">
                      <input className="a-input" placeholder="Date, e.g. 2024 — Present" value={t.date} onChange={(e) => setListItem("timeline", i, "date", e.target.value)} />
                      <input className="a-input" placeholder="Title" value={t.title} onChange={(e) => setListItem("timeline", i, "title", e.target.value)} />
                    </div>
                    <textarea className="a-input" rows={2} placeholder="Description" value={t.description} onChange={(e) => setListItem("timeline", i, "description", e.target.value)} />
                    <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                      <button className="a-btn a-btn-outline" onClick={() => moveListItem("timeline", i, -1)}>Move Up</button>
                      <button className="a-btn a-btn-outline" onClick={() => moveListItem("timeline", i, 1)}>Move Down</button>
                      <button className="a-btn a-btn-danger" onClick={() => removeListItem("timeline", i)}>Remove</button>
                    </div>
                  </div>
                ))}
                <button className="a-btn a-btn-primary" disabled={busy} onClick={saveWelfare} style={{ marginTop: "1rem" }}>
                  Save Welfare Section
                </button>
              </div>
            </>
          )}
        </main>
      )}
    </div>
  );
}

const adminCss = `
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Cinzel:wght@400;600;700&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0f0d0b; }
.admin-root { min-height: 100vh; background: #0f0d0b; color: #e0d5c5; font-family: 'Courier Prime', monospace; font-size: 0.9rem; padding-bottom: 4rem; }
.admin-top { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; border-bottom: 1px solid rgba(212,168,83,0.2); position: sticky; top: 0; background: rgba(15,13,11,0.95); z-index: 10; flex-wrap: wrap; gap: 0.8rem; }
.admin-brand { font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 0.2em; color: #d4a853; }
.admin-brand span { color: #b5a898; font-weight: 400; margin-left: 0.4rem; }
.admin-main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.2rem; }
.admin-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(212,168,83,0.18); padding: 1.6rem; margin-bottom: 1.5rem; }
.admin-narrow { max-width: 440px; margin: 5rem auto; }
.admin-card h2, .admin-card h3 { font-family: 'Cinzel', serif; color: #f0e8d8; font-weight: 400; margin-bottom: 0.8rem; }
.muted { color: #8a7e72; margin-bottom: 1rem; line-height: 1.6; }
code { color: #d4a853; }
.admin-tabs { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
.admin-tabs button { background: transparent; border: 1px solid rgba(212,168,83,0.25); color: #b5a898; padding: 0.55rem 1.1rem; font-family: inherit; letter-spacing: 0.1em; cursor: pointer; }
.admin-tabs button.active { background: #d4a853; color: #0f0d0b; border-color: #d4a853; }
.a-label { display: block; font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: #b5a898; margin: 0.8rem 0 0.35rem; }
.a-input { width: 100%; background: rgba(10,8,7,0.7); border: 1px solid rgba(212,168,83,0.25); color: #f0e8d8; padding: 0.6rem 0.8rem; font-family: inherit; font-size: 0.85rem; }
.a-input:focus { outline: none; border-color: #d4a853; }
textarea.a-input { resize: vertical; }
.a-btn { padding: 0.5rem 1rem; font-family: inherit; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; border: 1px solid transparent; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; white-space: nowrap; }
.a-btn:disabled { opacity: 0.5; cursor: wait; }
.a-btn-primary { background: #d4a853; color: #0f0d0b; font-weight: 700; }
.a-btn-outline { background: transparent; color: #d4a853; border-color: rgba(212,168,83,0.4); }
.a-btn-danger { background: transparent; color: #e07a7a; border-color: rgba(224,122,122,0.4); }
.a-notice { padding: 0.7rem 1rem; margin: 0 0 1.2rem; border: 1px solid; }
.a-notice.ok { color: #92e092; border-color: rgba(122,197,122,0.4); background: rgba(122,197,122,0.06); }
.a-notice.error { color: #e07a7a; border-color: rgba(224,122,122,0.4); background: rgba(224,122,122,0.06); margin-top: 1rem; }
.a-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 1.5rem; margin-bottom: 1.2rem; }
.a-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.a-grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; margin-bottom: 0.6rem; }
.a-preview { margin-top: 0.8rem; max-width: 100%; max-height: 220px; object-fit: contain; border: 1px solid rgba(212,168,83,0.2); }
.a-row-between { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem; }
.a-item { display: grid; grid-template-columns: 90px 1fr auto; gap: 1rem; align-items: start; padding: 1rem 0; border-top: 1px solid rgba(212,168,83,0.12); }
.a-thumb { width: 90px; height: 90px; object-fit: cover; border: 1px solid rgba(212,168,83,0.2); background: #15120f; }
.a-file { color: #d4a853; font-size: 0.78rem; margin-bottom: 0.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center; }
.a-tag { font-size: 0.65rem; padding: 0.1rem 0.45rem; border: 1px solid rgba(212,168,83,0.4); color: #b5a898; }
.a-check { display: flex; align-items: center; gap: 0.4rem; color: #b5a898; font-size: 0.78rem; }
.a-list-row { display: flex; gap: 0.5rem; margin-bottom: 0.6rem; flex-wrap: wrap; }
.a-list-row .a-input { flex: 1; min-width: 140px; }
.a-timeline-row { border-top: 1px solid rgba(212,168,83,0.12); padding: 1rem 0; display: flex; flex-direction: column; gap: 0.6rem; }
@media (max-width: 720px) {
  .a-grid, .a-grid2, .a-grid3 { grid-template-columns: 1fr; }
  .a-item { grid-template-columns: 70px 1fr; }
  .a-item > .a-btn { grid-column: 1 / -1; }
  .a-thumb { width: 70px; height: 70px; }
}
`;

