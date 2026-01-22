import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/home/CountdownTimer";
import SpeakerCard, { Speaker } from "@/components/home/SpeakerCard";
import BlogPostCard, { BlogPost } from "@/components/home/BlogPostCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredSpeakers: Speaker[] = [
    {
      id: 1,
      name: "Nicholas Duncan-Williams",
      role: "Founder & Senior Pastor",
      organization: "Action Chapel International",
      image: "images/speakers/2026/duncan-williams.webp",
      bio: "Nicholas Duncan-Williams is a Ghanaian charismatic pastor and Presiding Archbishop and General Overseer of the Action Chapel International (ACI) ministry, headquartered in Accra,. He is a prominent figure in Ghanaian gospel ministry and has been in the ministry for over 30 years.",
      featured: true,
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Richard Nii Armah Quaye",
      role: "Entrepreneur & Philanthropist",
      organization: "Nimed Capital Limited",
      image: "images/speakers/2026/rnaq-2.webp",
      bio: "Richard Nii Armah Quaye is a Ghanaian entrepreneur and philanthropist. He is the founder and CEO of Nimed Capital Limited, a leading investment banking firm in Accra, Ghana. He is a prominent figure in Ghanaian business and has been in the business for over 20 years.",
      featured: true,
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Stanley Uzochukwu",
      role: "Entrepreneur & Philanthropist",
      organization: "Nimed Capital Limited",
      image: "images/speakers/2026/stanley-uzochukwu.webp",
      bio: "Stanley Uzochukwu is a Nigerian business magnet, investor and philanthropist. He was born into the family of Mr/Mrs Bartholomew Uzochukwu at Calabar, Cross River State. He is a native of Nnewi South Local Government Area of Anambra State.",
      featured: true,
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  const featuredPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Key Takeaways from IYES 2025",
      excerpt: "The most impactful moments and lessons from this year's summit that continue to inspire youth leaders.",
      date: "2025-03-20",
      author: "James Mensa",
      image: "images/iyes-crowd-flag.jpg",
      category: "Event Recap",
      slug: "key-takeaways-iyes-2025"
    },
    {
      id: 2,
      title: "How IYES Changed My Entrepreneurial Journey",
      excerpt: "One attendee's story of transformation and growth after participating in IYES workshops.",
      date: "2025-03-15",
      author: "Sarah Addo",
      image: "images/blog-images/pb-seated.jpeg",
      category: "Success Story",
      slug: "how-iyes-changed-my-entrepreneurial-journey"
    },
    {
      id: 3,
      title: "Preparing for IYES 2026: What to Expect",
      excerpt: "An early look at the themes, speakers, and opportunities coming to next year's summit.",
      date: "2025-04-05",
      author: "Daniel Kwame",
      image: "images/blog-images/iyes-usa.jpeg",
      category: "Upcoming Events",
      slug: "preparing-for-iyes-2026"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="images/hero-image.jpeg"
            alt="IYES Conference"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/35"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left py-20">
          <div className="grid grid-cols-1 items-center">
            {/* Iyes date pill */}
            <div className="order-2 md:order-1 animate-fade-in">
              <span className="inline-block font-heading text-white bg-white/10 px-3 py-1 rounded-full text-sm mb-4">
                MARCH 10-13, 2026
              </span>
              <h1 className="font-heading text-white mb-4 leading-[0.95] text-[clamp(3rem,6.8vw,6.25rem)]">
                INTERNATIONAL
                <br />
                YOUTH EMPOWERMENT
                <br />
                SUMMIT
              </h1>
              <p className="mb-6 max-w-xl text-[clamp(1.05rem,1.4vw,1.25rem)] text-white/85">
                Join us for three days of inspiration, networking, and transformation with world-class speakers and youth leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Register Now
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  View Schedule
                </Button>
              </div>
            </div>
            {/* countdown div */}
            <div className="order-1 md:order-2  justify-center hidden">
              <div className="bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-border/60 w-full max-w-md">
                <h3 className="text-2xl font-heading text-foreground mb-2">Countdown to IYES 2025</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Mark your calendar for the biggest youth summit of the year
                </p>
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="images/happy-youth-2.jpg"
                alt="About IYES"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
                Empowering Youth Since 2015
              </h2>
              <p className="text-muted-foreground mb-4">
                The International Youth Empowerment Summit (IYES) is a transformative annual conference designed to inspire, equip, and connect young people for leadership and impact in their communities and beyond.
              </p>
              <p className="text-muted-foreground mb-6">
                Founded by Pastor Brian Jones Amoateng, IYES has grown from a local gathering to an international platform that has touched the lives of over 100,000 youth across Africa and the diaspora.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                <div className="bg-background/70 p-4 rounded-lg border border-border/60">
                  <span className="text-3xl font-heading text-foreground">11</span>
                  <p className="text-muted-foreground text-sm">Years</p>
                </div>
                <div className="bg-background/70 p-4 rounded-lg border border-border/60">
                  <span className="text-3xl font-heading text-foreground">100K+</span>
                  <p className="text-muted-foreground text-sm">Participants</p>
                </div>
                <div className="bg-background/70 p-4 rounded-lg border border-border/60">
                  <span className="text-3xl font-heading text-foreground">150+</span>
                  <p className="text-muted-foreground text-sm">Speakers</p>
                </div>
                <div className="bg-background/70 p-4 rounded-lg border border-border/60">
                  <span className="text-3xl font-heading text-foreground">5+</span>
                  <p className="text-muted-foreground text-sm">Countries</p>
                </div>
              </div>
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary/90">
                  Learn More About IYES
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Featured Speakers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from world-class leaders, entrepreneurs, and changemakers who are shaping the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSpeakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} featured={speaker.featured} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/speakers">
              <Button variant="outline" className="group">
                <span>View All Speakers</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Visionary Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="order-2 md:order-1 md:col-span-7">
              <span className="text-accent font-medium">Founder & Visionary</span>
              <h2 className="text-3xl md:text-4xl font-heading text-foreground my-4">
                Pastor Brian Jones Amoateng
              </h2>
              <p className="text-muted-foreground mb-4">
                Pastor Brian Jones Amoateng is the visionary founder of the International Youth Empowerment Summit, dedicated to raising a generation of empowered youth who will transform their communities and nations.
              </p>
              <p className="text-muted-foreground mb-6">
                His passion for youth development has led him to create a platform that connects young people with opportunities, mentorship, and spiritual guidance. Through IYES, he has impacted thousands of young lives across Africa and beyond.
              </p>
              <Link to="/about#visionary">
                <Button className="bg-primary hover:bg-primary/90">
                  Read His Story
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary to-accent opacity-30 blur-lg"></div>
                <img
                  src="images/pastor-brian-bw.jpg"
                  alt="Pastor Brian Jones Amoateng"
                  className="relative rounded-xl w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with insights, stories, and announcements from the IYES community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/blog">
              <Button variant="outline" className="group">
                <span>Read More Articles</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/happy-youth.jpg"
            alt="Join IYES"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-6">
              Be Part of IYES 2026
            </h2>
            <p className="text-white/85 text-lg mb-8">
              Don't miss this opportunity to connect, learn, and grow with fellow young leaders from around the world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Register Now
              </Button>
              <Button
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
