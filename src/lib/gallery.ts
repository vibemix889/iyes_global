/**
 * Gallery content, managed through Decap CMS (see public/admin/config.yml).
 *
 * Albums live in content/gallery/*.json and page copy in content/pages/gallery.json.
 * Vite bundles them at build time, so there is no runtime fetch: when the CMS
 * commits a change, Netlify rebuilds and the new content ships with the site.
 */

export interface GalleryPhoto {
  image: string;
  caption?: string;
}

export interface GalleryAlbum {
  title: string;
  order?: number;
  images: GalleryPhoto[];
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

export const ALL_TAB = "All";
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

/** Albums in CMS-defined order (lowest `order` first, then alphabetical). Empty albums are dropped. */
export const galleryAlbums: GalleryAlbum[] = Object.values(albumModules)
  .filter((album) => album.images?.length > 0)
  .sort(
    (a, b) =>
      (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER) ||
      a.title.localeCompare(b.title)
  );

/** Filter tabs shown above the grid: "All" followed by each album title. */
export const galleryTabs: string[] = [ALL_TAB, ...galleryAlbums.map((a) => a.title)];

/** Photos for a tab, each tagged with its album. */
export function photosForTab(tab: string): GalleryItem[] {
  return galleryAlbums
    .filter((album) => tab === ALL_TAB || album.title === tab)
    .flatMap((album) => album.images.map((photo) => ({ ...photo, album: album.title })));
}
