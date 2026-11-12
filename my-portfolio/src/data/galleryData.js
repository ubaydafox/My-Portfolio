// Default Gallery Manifest
// You can also add image files directly to /public/gallery/ (e.g. /gallery/my-photo.jpg)
// and register them here or use the in-browser Gallery Manager!

export const DEFAULT_GALLERY = [
  {
    id: "g1",
    title: "Campus Summit Poster",
    category: "Design",
    subcategory: "Poster & Typography",
    image: "/gallery/design-poster.svg",
    description: "Typographic promotional poster with geometric golden proportions designed for university student conferences.",
    tools: "Adobe Illustrator",
    aspectRatio: "portrait",
    instagramUrl: "https://instagram.com/ubaydafox"
  },
  {
    id: "g2",
    title: "Minimalist Brand Geometry",
    category: "Design",
    subcategory: "Brand Identity",
    image: "/gallery/design-branding.svg",
    description: "Vector monogram and corporate brand identity guidelines balancing negative space and gold symmetry.",
    tools: "Adobe Illustrator & Figma",
    aspectRatio: "square",
    instagramUrl: "https://instagram.com/ubaydafox"
  },
  {
    id: "g3",
    title: "Human Silhouette Study",
    category: "Photography",
    subcategory: "Portraiture",
    image: "/gallery/photo-portrait.svg",
    description: "High-contrast portrait study using diffused natural light, exploring human form and quiet depth.",
    tools: "Natural Light // 50mm",
    aspectRatio: "portrait",
    instagramUrl: "https://instagram.com/ubaydafox"
  },
  {
    id: "g4",
    title: "Highland Mist & Ridges",
    category: "Photography",
    subcategory: "Nature & Landscape",
    image: "/gallery/photo-nature.svg",
    description: "Morning light over Sylhet highlands, capturing organic textures, dawn contours, and serene atmosphere.",
    tools: "Landscape // 24mm",
    aspectRatio: "square",
    instagramUrl: "https://instagram.com/ubaydafox"
  }
];

export const GALLERY_STORAGE_KEY = "ubayda_portfolio_gallery_v1";

export function loadGalleryData() {
  if (typeof window === "undefined") return DEFAULT_GALLERY;
  try {
    const saved = localStorage.getItem(GALLERY_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Failed to load local gallery, using default:", err);
  }
  return DEFAULT_GALLERY;
}

export function saveGalleryData(items) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.error("Failed to save gallery items:", err);
  }
}

