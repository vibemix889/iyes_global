/**
 * Gallery image manifest: keys are filter labels (2025, 2024, etc.),
 * values are image paths (relative to /images/iyes-gallery/ or absolute if starting with /).
 */
export type GalleryManifest = Record<string, string[]>;

const BASE = "/images/iyes-gallery";
const MANIFEST_URL = `${BASE}/manifest.json`;

/** Full URL for an image. Paths starting with / are used as-is; others are relative to BASE. */
export function imageUrl(path: string): string {
  return path.startsWith("/") ? path : `${BASE}/${path}`;
}

/** Fetch manifest; returns null on failure. */
export async function fetchGalleryManifest(): Promise<GalleryManifest | null> {
  try {
    const res = await fetch(`${MANIFEST_URL}?t=${Date.now()}`);
    if (!res.ok) return null;
    const data = (await res.json()) as GalleryManifest;
    return data && typeof data === "object" ? data : null;
  } catch {
    return null;
  }
}

/** Fallback when manifest is missing or empty (current hardcoded gallery). */
export const defaultGalleryManifest: GalleryManifest = {
  "2025": [
    "/images/woman-singer.jpg",
    "/images/iyes-gallery/pb-joshua.jpeg",
    "/images/iyes-crowd-flag.jpg",
    "/images/happy-youth-2.jpg",
    "/images/iyes-gallery/pb-white.jpeg",
    "/images/male-singer.jpg",
    "/images/joe-mettle.jpg",
    "/images/iyes-gallery/pb-with-flag.jpeg",
  ],
  "2024": [
    "/images/iyes-gallery/iyes-upsa.jpeg",
    "/images/iyes-gallery/iyes-24-mahama-hug.jpeg",
    "/images/iyes-gallery/iyes-at-10-2.jpeg",
    "/images/iyes-gallery/pb-bawumia.jpeg",
  ],
  "2023": [
    "/images/iyes-gallery/iyes-usa.jpeg",
    "/images/iyes-gallery/pb-jackie-scholarship.jpeg",
    "/images/iyes-gallery/pb-in-white-with-flag.jpeg",
  ],
  Highlights: [
    "/images/iyes-gallery/iyes-21.jpeg",
    "/images/iyes-gallery/iyes-23.jpeg",
    "/images/iyes-gallery/iyes-duncan.jpeg",
    "/images/iyes-gallery/pb-gentle-giant.jpeg",
  ],
};

/** Ordered filter keys for the UI (All first, then years/highlights). */
export function galleryFilterKeys(manifest: GalleryManifest): string[] {
  const keys = Object.keys(manifest).filter(
    (k) => Array.isArray(manifest[k]) && manifest[k].length > 0
  );
  const order = ["All", "2025", "2024", "2023", "Highlights"];
  const ordered = order.filter((k) => k === "All" || keys.includes(k));
  const rest = keys.filter((k) => !order.includes(k)).sort();
  return [...ordered, ...rest];
}
