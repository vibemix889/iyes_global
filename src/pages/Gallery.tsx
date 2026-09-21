import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import {
  galleryPage,
  galleryTabs,
  photosForTab,
  DEFAULT_VIDEO_THUMBNAIL,
  ALL_TAB,
  type GalleryItem,
} from "@/lib/gallery";
import { motion, AnimatePresence } from "motion/react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<string>(ALL_TAB);
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeImages = useMemo(() => photosForTab(activeTab), [activeTab]);

  const showRelative = (delta: number) =>
    setSelectedIndex((prev) =>
      prev === null || activeImages.length === 0
        ? prev
        : (prev + delta + activeImages.length) % activeImages.length
    );

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showRelative(-1);
      else if (e.key === "ArrowRight") showRelative(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const openVideo = (youtubeId: string) => {
    setCurrentVideo(youtubeId);
    setVideoOpen(true);
  };

  return (
    <Layout>
      <PageHeader
        title={galleryPage.title}
        subtitle={galleryPage.subtitle}
        background="secondary"
      />

      {/* Gallery Tabs */}
      <section className="py-8 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {galleryTabs.map((tab) => (
              <motion.button
                key={tab}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/50 text-foreground/70 hover:text-foreground"
                }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            layout
            transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
          >
            <AnimatePresence mode="popLayout">
              {activeImages.map((item, index) => (
                <GalleryImage
                  key={`${item.album}-${item.image}`}
                  item={item}
                  index={index}
                  onOpen={() => setSelectedIndex(index)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Highlights */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              {galleryPage.videos_title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {galleryPage.videos_subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryPage.videos.map((video, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl overflow-hidden aspect-video cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => openVideo(video.youtube_id)}
                style={{
                  backgroundImage: `url(${
                    video.thumbnail || DEFAULT_VIDEO_THUMBNAIL
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="w-full h-full flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90" />
                  <div className="relative z-10 text-center p-8">
                    <motion.div
                      className="bg-primary/90 hover:bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.15, rotate: 12 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polygon points="10 8 16 12 10 16 10 8" />
                      </svg>
                    </motion.div>
                    <h3 className="text-white font-medium text-xl mb-2">
                      {video.title}
                    </h3>
                    <p className="text-white/80 text-sm">{video.speaker}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => !open && setSelectedIndex(null)}
      >
        <DialogContent className="w-screen max-w-screen sm:w-auto sm:max-w-[90vw] p-0 bg-transparent border-none shadow-none flex items-center justify-center">
          <DialogTitle className="sr-only">Gallery image preview</DialogTitle>
          {selectedIndex !== null && activeImages[selectedIndex] && (
            <>
              <img
                key={activeImages[selectedIndex].image}
                src={activeImages[selectedIndex].image}
                alt={altFor(activeImages[selectedIndex])}
                className="w-full h-auto sm:w-auto max-h-[85vh] max-w-full object-contain sm:rounded-lg"
              />
              {activeImages[selectedIndex].caption && (
                <p className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent text-white text-sm text-center px-4 pt-8 pb-3 sm:rounded-b-lg">
                  {activeImages[selectedIndex].caption}
                </p>
              )}
              {activeImages.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() => showRelative(-1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white p-2"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => showRelative(1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white p-2"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-[900px] p-0 bg-black border-none overflow-hidden">
          {currentVideo && (
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

const altFor = ({ caption, album }: GalleryItem) => caption || `IYES ${album} gallery photo`;

function GalleryImage({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const alt = altFor(item);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.35,
        delay: index * 0.03,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`View ${alt}`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      {!loaded && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>
      )}
      <motion.img
        src={item.image}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onLoad={() => setLoaded(true)}
        initial={false}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />
      {item.caption && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
          <p className="text-white p-4 text-sm">{item.caption}</p>
        </div>
      )}
    </motion.div>
  );
}

export default Gallery;
