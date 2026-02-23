import { useState, useEffect, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import {
  fetchGalleryManifest,
  defaultGalleryManifest,
  galleryFilterKeys,
  imageUrl,
  type GalleryManifest,
} from "@/lib/gallery";
import { motion, AnimatePresence } from "motion/react";

const Gallery = () => {
  const [manifest, setManifest] = useState<GalleryManifest | null>(null);
  const [manifestLoading, setManifestLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const defaultYoutubeId = "AoCQfszF3qI";
  const videoBackgrounds = [
    "/images/eastwood.jpg",
    "/images/iyes-default.jpg",
    "/images/sam-george.jpg",
    "/images/iyes-default.jpg",
  ];
  const defaultBackground = "/images/iyes-default.jpg";

  useEffect(() => {
    let cancelled = false;
    setManifestLoading(true);
    fetchGalleryManifest()
      .then((data) => {
        if (!cancelled) {
          setManifest(data ?? defaultGalleryManifest);
          setActiveTab((prev) => (prev === "All" ? "All" : prev));
        }
      })
      .finally(() => {
        if (!cancelled) setManifestLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const gallery = manifest ?? defaultGalleryManifest;
  const filterKeys = useMemo(() => galleryFilterKeys(gallery), [gallery]);
  const activeImages = useMemo(() => {
    if (activeTab === "All") {
      return filterKeys
        .filter((k) => k !== "All")
        .flatMap((key) => gallery[key].map((path) => ({ path, key })));
    }
    return (gallery[activeTab] ?? []).map((path) => ({ path, key: activeTab }));
  }, [activeTab, gallery, filterKeys]);

  const openVideo = (title: string, youtubeId: string) => {
    setCurrentVideo(youtubeId || defaultYoutubeId);
    setVideoOpen(true);
  };

  return (
    <Layout>
      <PageHeader
        title="Event Gallery"
        subtitle="Capturing the powerful moments and memories of IYES through the years"
        background="secondary"
      />

      {/* Gallery Tabs */}
      <section className="py-8 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <AnimatePresence mode="wait">
              {manifestLoading ? (
                <motion.div
                  key="skeleton-tabs"
                  className="flex flex-wrap justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {["All", "2025", "2024", "2023"].map((i) => (
                    <Skeleton key={i} className="h-10 w-16 rounded-full" />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="tabs"
                  className="flex flex-wrap justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {filterKeys.map((year) => (
                    <motion.button
                      key={year}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        activeTab === year
                          ? "bg-primary text-primary-foreground"
                          : "bg-background/50 text-foreground/70 hover:text-foreground"
                      }`}
                      onClick={() => setActiveTab(year)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {year}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
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
              {manifestLoading
                ? Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={`skeleton-${i}`}
                      className="rounded-lg overflow-hidden aspect-square"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Skeleton className="w-full h-full rounded-lg" />
                    </motion.div>
                  ))
                : activeImages.map(({ path }, index) => (
                    <GalleryImage
                      key={`${activeTab}-${path}`}
                      path={path}
                      index={index}
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
              Video Highlights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the energy and impact of IYES through these event
              recordings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "IYES 2025 Opening Ceremony",
                speaker: "Rev. Eastwood Anaba",
                youtubeId: "8PEvCjwl58o",
              },
              {
                title: "Pastor Brian's Keynote Address",
                speaker: "Pastor Brian Jones Amoateng",
                youtubeId: "",
              },
              {
                title: "Youth Panel Discussion",
                speaker: "Multiple Speakers",
                youtubeId: "1w__rucVBMA",
              },
              {
                title: "Worship and Musical Highlights",
                speaker: "Hon. Sam George",
                youtubeId: "",
              },
            ].map((video, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl overflow-hidden aspect-video cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => openVideo(video.title, video.youtubeId)}
                style={{
                  backgroundImage: `url(${
                    videoBackgrounds[idx] || defaultBackground
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

function GalleryImage({ path, index }: { path: string; index: number }) {
  const [loaded, setLoaded] = useState(false);
  const src = imageUrl(path);
  const caption = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "Gallery";

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
    >
      {!loaded && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>
      )}
      <motion.img
        src={src}
        alt={caption}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onLoad={() => setLoaded(true)}
        initial={false}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
        <p className="text-white p-4 text-sm capitalize">
          {caption.replace(/[-_.]/g, " ")}
        </p>
      </div>
    </motion.div>
  );
}

export default Gallery;
