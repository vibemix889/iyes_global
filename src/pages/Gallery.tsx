import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<string>("2025");
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  
  // Video ID to use for all videos
  const defaultYoutubeId = "AoCQfszF3qI";
  
  // Function to open video modal
  const openVideo = (title: string, youtubeId: string) => {
    setCurrentVideo(youtubeId || defaultYoutubeId);
    setVideoOpen(true);
  };
  
  // Background images for video highlights
  const videoBackgrounds = [
    "/images/eastwood.jpg", 
    "/images/iyes-default.jpg", 
    "/images/sam-george.jpg", 
    "/images/iyes-default.jpg", 
  ];
  
  // Default background if none specified
  const defaultBackground = "/images/iyes-default.jpg";
  
  const galleries = {
    "2025": [
      { id: 1, image: "/images/woman-singer.jpg", caption: "Opening Ceremony - IYES 2025" },
      { id: 2, image: "/images/iyes-gallery/pb-joshua.jpeg", caption: "Keynote Address" },
      { id: 3, image: "/images/iyes-crowd-flag.jpg", caption: "Leadership Workshop" },
      { id: 4, image: "/images/happy-youth-2.jpg", caption: "Networking Session" },
      { id: 5, image: "/images/iyes-gallery/pb-white.jpeg", caption: "Evening Worship Experience" },
      { id: 6, image: "/images/male-singer.jpg", caption: "Panel Discussion on Youth Innovation" },
      { id: 7, image: "/images/joe-mettle.jpg", caption: "Young Achievers Awards" },
      { id: 8, image: "/images/iyes-gallery/pb-with-flag.jpeg", caption: "Closing Ceremony" }
    ],
    "2024": [
      { id: 1, image: "/images/iyes-gallery/iyes-upsa.jpeg", caption: "IYES 2024 Crowd" },
      { id: 2, image: "/images/iyes-gallery/iyes-24-mahama-hug.jpeg", caption: "Guest Speaker Session" },
      { id: 3, image: "/images/iyes-gallery/iyes-at-10-2.jpeg", caption: "Tech Workshop" },
      { id: 4, image: "/images/iyes-gallery/pb-bawumia.jpeg", caption: "Pastor Brian meets the vice president of Ghana" }
    ],
    "2023": [
      { id: 1, image: "/images/iyes-gallery/iyes-usa.jpeg", caption: "IYES 2023 Opening Day" },
      { id: 2, image: "/images/iyes-gallery/pb-jackie-scholarship.jpeg", caption: "Entrepreneurship Talk" },
      { id: 3, image: "/images/iyes-gallery/pb-in-white-with-flag.jpeg", caption: "Group Discussions" }
    ],
    "Highlights": [
      { id: 1, image: "/images/iyes-gallery/iyes-21.jpeg", caption: "Best Moments from IYES 2025" },
      { id: 2, image: "/images/iyes-gallery/iyes-23.jpeg", caption: "Record-Breaking Attendance - IYES 2022" },
      { id: 3, image: "/images/iyes-gallery/iyes-duncan.jpeg", caption: "10th Anniversary Celebration - IYES 2020" },
      { id: 4, image: "/images/iyes-gallery/pb-gentle-giant.jpeg", caption: "Pastor Brian and Eastwood Anaba" }
    ]
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
            {Object.keys(galleries).map((year) => (
              <button
                key={year}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeTab === year
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/50 text-foreground/70 hover:text-foreground"
                }`}
                onClick={() => setActiveTab(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleries[activeTab as keyof typeof galleries].map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
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
              Experience the energy and impact of IYES through these event recordings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "IYES 2025 Opening Ceremony", speaker: "Rev. Eastwood Anaba", youtubeId: "8PEvCjwl58o" },
              { title: "Pastor Brian's Keynote Address", speaker: "Pastor Brian Jones Amoateng", youtubeId: "" },
              { title: "Youth Panel Discussion", speaker: "Multiple Speakers", youtubeId: "1w__rucVBMA" },
              { title: "Worship and Musical Highlights", speaker: "Hon. Sam George", youtubeId: "" },
            ].map((video, idx) => (
              <div 
                key={idx} 
                className="rounded-xl overflow-hidden aspect-video cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => openVideo(video.title, video.youtubeId)}
                style={{ 
                  backgroundImage: `url(${videoBackgrounds[idx] || defaultBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="w-full h-full flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
                  <div className="relative z-10 text-center p-8">
                    <div className="bg-primary/90 hover:bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-125 group-hover:rotate-12">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="10 8 16 12 10 16 10 8"/></svg>
                    </div>
                    <h3 className="text-white font-medium text-xl mb-2">{video.title}</h3>
                    <p className="text-white/80 text-sm">{video.speaker}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Dialog */}
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
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
    </Layout>
  );
};

export default Gallery;