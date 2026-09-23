/**
 * Gallery content, managed through Sveltia CMS (see public/admin/config.yml).
 *
 * Albums live in content/gallery/*.json and page copy in content/pages/gallery.json.
 * Vite bundles them at build time, so there is no runtime fetch: when the CMS
 * commits a change, Netlify rebuilds and the new content ships with the site.
 *
 * Two album shapes are supported:
 *  - Flat album (no `event_year`): its own top-level tab, e.g. "2025", "Highlights".
 *    This is the original shape and how 2023-2025 stay unchanged.
 *  - Day album (`event_year` set, e.g. "2026"): one day/session of a multi-day event.
 *    All albums sharing an `event_year` are grouped under a single tab named after
 *    that year, with day chips underneath so a whole year still browses as one
 *    stream by default, but can be narrowed to a specific day.
 */

export interface GalleryPhoto {
  image: string;
  caption?: string;
}

/**
 * What the CMS writes for a photo. Bulk uploads save a plain path; the older
 * per-photo form saved an object with an optional caption. Both are accepted so
 * albums created before the switch to bulk upload keep working untouched.
 */
type RawPhoto = string | GalleryPhoto;

export interface GalleryAlbum {
  title: string;
  order?: number;
  event_year?: string;
  images: RawPhoto[];
}

export interface GalleryVideo {
  title: string;
  speaker: string;
  youtube_id: string;
  thumbnail?: string;
}

export interface GalleryPageContent {
  title: string;
  subtitle: string;
  videos_title: string;
  videos_subtitle: string;
  videos: GalleryVideo[];
}

export interface GalleryItem extends GalleryPhoto {
  album: string;
}

type GalleryTabDef =
  | { kind: "flat"; label: string; order: number; album: GalleryAlbum }
  | { kind: "grouped"; label: string; order: number; days: GalleryAlbum[] };

export const ALL_TAB = "All";
export const ALL_DAYS = "All Days";
export const DEFAULT_VIDEO_THUMBNAIL = "/images/iyes-default.jpg";

const albumModules = import.meta.glob<GalleryAlbum>("/content/gallery/*.json", {
  eager: true,
  import: "default",
});

const pageModules = import.meta.glob<GalleryPageContent>("/content/pages/gallery.json", {
  eager: true,
  import: "default",
});

export const galleryPage: GalleryPageContent = Object.values(pageModules)[0];

/** All non-empty albums, flat and day-based alike, in no particular order. */
const galleryAlbums: GalleryAlbum[] = Object.values(albumModules).filter(
  (album) => album.images?.length > 0
);

function buildTabDefs(): GalleryTabDef[] {
  const flat: GalleryTabDef[] = [];
  const groups = new Map<string, GalleryAlbum[]>();

  for (const album of galleryAlbums) {
    if (album.event_year) {
      const days = groups.get(album.event_year) ?? [];
      days.push(album);
      groups.set(album.event_year, days);
    } else {
      flat.push({ kind: "flat", label: album.title, order: album.order ?? 0, album });
    }
  }

  const grouped: GalleryTabDef[] = Array.from(groups, ([year, days]) => {
    const sortedDays = [...days].sort(
      (a, b) => (a.order ?? 0) - (b.order ?? 0) || a.title.localeCompare(b.title)
    );
    return {
      kind: "grouped" as const,
      label: year,
      order: Math.min(...sortedDays.map((d) => d.order ?? 0)),
      days: sortedDays,
    };
  });

  return [...flat, ...grouped].sort(
    (a, b) => a.order - b.order || a.label.localeCompare(b.label)
  );
}

const galleryTabDefs = buildTabDefs();

/** Filter tabs shown above the grid: "All" followed by each flat album title or grouped event year. */
export const galleryTabs: string[] = [ALL_TAB, ...galleryTabDefs.map((t) => t.label)];

/**
 * Day chips for a multi-day event tab (e.g. "2026" -> "All Days", "Day 1", ...).
 * Returns null when the tab isn't a grouped event, or only has a single day so far.
 */
export function daysForTab(tab: string): string[] | null {
  const def = galleryTabDefs.find((t) => t.label === tab);
  if (!def || def.kind !== "grouped" || def.days.length < 2) return null;
  return [ALL_DAYS, ...def.days.map((d) => d.title)];
}

function toItems(album: GalleryAlbum): GalleryItem[] {
  return album.images.map((photo) =>
    typeof photo === "string"
      ? { image: photo, album: album.title }
      : { ...photo, album: album.title }
  );
}

/**
 * Netlify Image CDN URL: resizes and re-encodes on the fly, picking WebP or AVIF per
 * browser. The grid shows small squares, so without this a phone on a slow connection
 * downloads a full 2048px photo for a ~300px tile.
 *
 * Only Netlify serves /.netlify/images, so local dev falls back to the original file.
 */
export function thumbnailUrl(src: string, width: number): string {
  if (import.meta.env.DEV || !src.startsWith("/")) return src;
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fit=cover&q=75`;
}

/** Widths behind the grid's `srcset`, covering 1x and 2x screens at our column widths. */
export const THUMBNAIL_WIDTHS = [300, 600, 900];

/** Photos for the selected tab, optionally narrowed to one day within a grouped event. */
export function photosForTab(tab: string, day: string = ALL_DAYS): GalleryItem[] {
  if (tab === ALL_TAB) return galleryAlbums.flatMap(toItems);

  const def = galleryTabDefs.find((t) => t.label === tab);
  if (!def) return [];
  if (def.kind === "flat") return toItems(def.album);

  const days = day === ALL_DAYS ? def.days : def.days.filter((d) => d.title === day);
  return days.flatMap(toItems);
}
