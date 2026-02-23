/**
 * Scans public/images/iyes-gallery for subfolders (2025, 2024, 2023, Highlights, etc.)
 * and writes public/images/iyes-gallery/manifest.json.
 * Run after adding new images: node scripts/generate-gallery-manifest.cjs
 */
const fs = require("fs");
const path = require("path");

const GALLERY_DIR = path.join(__dirname, "..", "public", "images", "iyes-gallery");
const MANIFEST_PATH = path.join(GALLERY_DIR, "manifest.json");
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

function getImagePaths(dir, base = "") {
  const names = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const d of names) {
    const rel = base ? `${base}/${d.name}` : d.name;
    if (d.isDirectory()) {
      files.push(...getImagePaths(path.join(dir, d.name), rel));
    } else if (IMAGE_EXT.has(path.extname(d.name).toLowerCase())) {
      files.push(rel);
    }
  }
  return files;
}

if (!fs.existsSync(GALLERY_DIR)) {
  fs.mkdirSync(GALLERY_DIR, { recursive: true });
  console.log("Created", GALLERY_DIR);
}

const manifest = {};
const dirs = fs.readdirSync(GALLERY_DIR, { withFileTypes: true });
for (const d of dirs) {
  if (d.isDirectory() && d.name !== "manifest.json") {
    const fullPath = path.join(GALLERY_DIR, d.name);
    const images = getImagePaths(fullPath, d.name).sort();
    if (images.length) manifest[d.name] = images;
  }
}

fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
console.log("Wrote", MANIFEST_PATH, "with keys:", Object.keys(manifest).join(", ") || "(none)");
