import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import TestimonialCard, { Testimonial } from "@/components/testimonies/TestimonialCard";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoTestimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  youtubeId: string;
}

const Testimonies = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  // Handle opening a video
  const openVideo = (youtubeId: string) => {
    setCurrentVideo(youtubeId);
    setVideoOpen(true);
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Kwame Agyemang",
      role: "Entrepreneur & CEO",
      message: "IYES transformed my mindset completely. The connections I made and the inspiration I received propelled me to start my business which now employs over 20 people. I owe my entrepreneurial journey to that pivotal moment at IYES 2018.",
      image: "https://images.generated.photos/9a0LYsDrUE0qoUEe1_Lrp_47B25bqPmOXM4enRc9M1c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYxMDcyXzA5ODY2/ODZfMDE2Nzg5NC5q/cGc.jpg",
      year: "2018"
    },
    {
      id: 2,
      name: "Sarah Mensah",
      role: "Community Organizer",
      message: "Attending IYES was the catalyst for me to start a youth organization in my community. The workshops on leadership and community development gave me practical tools that I've implemented with amazing results.",
      image: "/images/profile-empty.png",
      year: "2020"
    },
    {
      id: 3,
      name: "Daniel Okeke",
      role: "Student",
      message: "Pastor Brian's message on excellence challenged me to pursue greater heights in my career. I applied the principles I learned at IYES and within a year, I had secured a job at a top tech company where I'm making impact.",
      image: "/images/profile-empty.png",
      year: "2022"
    },
    {
      id: 4,
      name: "Aisha Mohammed",
      role: "Medical Student",
      message: "The scholarship I received through IYES partners changed my life! I'm now in my third year of medical school, something I never thought possible coming from my background. I'm forever grateful for IYES.",
      image: "/images/profile-empty.png",
      year: "2019"
    },
    {
      id: 5,
      name: "Emmanuel Kofi",
      role: "Youth Pastor",
      message: "IYES equipped me with practical ministry tools and a fresh vision for youth work. The spiritual impartation was real and tangible. Since attending, our youth ministry has grown from 25 to over 200 young people.",
      image: "https://images.generated.photos/2YcnQ3MnAFsOrrKOX59Lbff4U2REazq6yCY_PRllydk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjQzMDQ4LmpwZw.jpg",
      year: "2023"
    },
    {
      id: 6,
      name: "Grace Afolabi",
      role: "Fashion Designer",
      message: "The creative workshops at IYES 2021 helped me refine my business model. The mentorship I received from established entrepreneurs in my field was invaluable. My fashion brand is now shipping internationally!",
      image: "/images/profile-empty.png",
      year: "2021"
    },
    {
      id: 7,
      name: "Joshua Nkrumah",
      role: "University Student",
      message: "My first IYES was last year and it completely changed my perspective on leadership. I'm now leading several initiatives at my university and making a difference in my community. Can't wait for the next summit!",
      image: "/images/profile-empty.png",
      year: "2024"
    },
    {
      id: 8,
      name: "Fatima Diallo",
      role: "Social Entrepreneur",
      message: "The network I built at IYES has been critical to the success of my non-profit. The sessions on sustainable development gave me new insights that have improved our programs and impact measurement.",
      image: "https://images.generated.photos/RfcADczMuAzjrbR-1HRw_7jBovNXTxSdaWBwTTlC4sk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDA4NTI4LmpwZw.jpg",
      year: "2022"
    }
  ];

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: 1,
      name: "Victor Osei",
      role: "Tech Entrepreneur",
      image: "/images/male-singer.jpg",
      youtubeId: "AoCQfszF3qI"
    },
    {
      id: 2,
      name: "Nana Akua",
      role: "Media Personality",
      image: "/images/woman-singer.jpg",
      youtubeId: "AoCQfszF3qI"
    },
    {
      id: 3,
      name: "Michael Addo",
      role: "Corporate Executive",
      image: "/images/joe-mettle.jpg",
      youtubeId: "Ao4F_yTwh_M"
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="Testimonies"
        subtitle="Hear directly from those whose lives have been transformed through IYES"
        background="gradient"
      />

      {/* Featured Testimonial */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-primary/70 mb-6"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
            <blockquote className="text-xl md:text-2xl text-white font-light italic mb-6">
              IYES didn't just inspire me—it completely transformed my perspective on what's possible for young Africans. The summit connected me with mentors and resources that were pivotal in launching my tech company, which now provides jobs for dozens of young people.
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src="images/profile-empty.png"
                  alt="David Asante"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-anton text-white text-lg">David Asante</h4>
                <p className="text-white/60">IYES 2017 Alumnus • Founder, AfriTech Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-4">
              Lives Transformed
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              These stories represent just a fraction of the thousands of young people who have been impacted by IYES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-4">
              Video Testimonials
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Hear directly from IYES participants about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((item) => (
              <div key={item.id} className="bg-secondary/50 rounded-xl overflow-hidden">
                <div
                  className="aspect-video bg-background/50 flex items-center justify-center relative group cursor-pointer"
                  onClick={() => openVideo(item.youtubeId)}
                >
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-anton text-white">{item.name}</h3>
                  <p className="text-white/60 text-sm">{item.role}</p>
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

      {/* Organizations */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-4">
              Partner Organizations
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Organizations that have collaborated with us and support our vision
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex items-center justify-center p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-300 h-24">
                <div className="text-white/40 font-medium text-center">
                  Partner Logo
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-6">
              Share Your IYES Story
            </h2>
            <p className="text-white/80 mb-8">
              Has IYES impacted your life in a meaningful way? We'd love to hear your story and potentially feature it on our platform.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Submit Your Testimony
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonies;
