// Merges the image files in src/gallery/ with their metadata in content.json.
// Any image dropped into src/gallery/ is picked up automatically (at dev time and at build time).
import content from "./content.json";

const files = import.meta.glob("../gallery/*.{jpg,jpeg,png,webp,gif,svg,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});

function titleFromFilename(name) {
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export const galleryItems = Object.entries(files)
  .map(([path, url]) => {
    const file = path.split("/").pop();
    const meta = content.gallery?.[file] || {};
    return {
      id: file,
      file,
      image: url,
      title: meta.title || titleFromFilename(file),
      category: meta.category || "Design",
      subcategory: meta.subcategory || "Visual Work",
      tools: meta.tools || "",
      description: meta.description || "",
      order: typeof meta.order === "number" ? meta.order : 9999,
      hidden: Boolean(meta.hidden),
    };
  })
  .filter((item) => !item.hidden)
  .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));

export const welfare = content.welfare;

