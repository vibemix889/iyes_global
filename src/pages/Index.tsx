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
      name: "Appostle Joshua Selman",
      role: "Founder & Senior Pastor",
      organization: "Eternity Network International",
      image: "images/speakers/joshua-selman.jpeg",
      bio: "Apostle Joshua Selman Nimmak, born June 25, 1980, is a Nigerian clergyman, chemical engineer, and musician. He is the founder and senior pastor of Eternity Network International (ENI), also known as Koinonia Global, and is a prominent figure in Nigerian gospel ministry.",
      featured: true,
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Dr. Frank Ofosu Appiah",
      role: "Senior Pastor",
      organization: "All Nations Church",
      image: "images/speakers/dr-frank-ofosu.png",
      bio: "Dr. Frank Ofosu-Appiah is an internationally recognized life coach and leadership architect. He is a respected speaker and author on issues related to leadership development and living a life of excellence. He has personally mentored, coached and acted as a consultant for a wide array of leaders in churches, businesses and government.",
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#"
      }
    },
    {
      id: 3,
      name: "Dr. Paul Enenche",
      role: "Senior Pastor",
      organization: "Dunamis International Gospel Centre",
      image: "images/speakers/paul-enenche.jpg",
      bio: "Paul Eneche founded the Dunamis International Gospel Center in 1996, and he still acts as its head pastor. Pastor Paul Eneche was a physician before being called to form a church. His wife, the medical expert Dr. Becky Eneche, and they had four children together as part of the church's mission.",
      social: {
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
            src="images/iyes-crowd-flag.jpg"
            alt="IYES Conference"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left py-20">
          <div className="grid grid-cols-1 items-center">
            {/* Iyes date pill */}
            <div className="order-2 md:order-1 animate-fade-in">
              <span className="inline-block font-anton text-accent bg-accent/10 px-3 py-1 rounded-full text-sm mb-4">
                MARCH 12-14, 2025
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-anton mb-4">
                <span className="gradient-text">INTERNATIONAL</span>
                <br />
                <span className="text-white">YOUTH EMPOWERMENT</span>
                <br />
                <span className="gradient-text">SUMMIT</span>
              </h1>
              <p className="text-lg text-white/80 mb-6 max-w-lg">
                Join us for three days of inspiration, networking, and transformation with world-class speakers and youth leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Register Now
                </Button>
                <Button variant="outline">
                  View Schedule
                </Button>
              </div>
            </div>
            {/* countdown div */}
            <div className="order-1 md:order-2  justify-center hidden">
              <div className="bg-secondary/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 w-full max-w-md">
                <h3 className="text-2xl font-anton gradient-text mb-2">Countdown to IYES 2025</h3>
                <p className="text-white/70 mb-4 text-sm">
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
              <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-6">
                Empowering Youth Since 2015
              </h2>
              <p className="text-white/80 mb-4">
                The International Youth Empowerment Summit (IYES) is a transformative annual conference designed to inspire, equip, and connect young people for leadership and impact in their communities and beyond.
              </p>
              <p className="text-white/80 mb-6">
                Founded by Pastor Brian Jones Amoateng, IYES has grown from a local gathering to an international platform that has touched the lives of over 100,000 youth across Africa and the diaspora.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                <div className="bg-secondary/80 p-4 rounded-lg">
                  <span className="text-3xl font-anton gradient-text">11</span>
                  <p className="text-white/70 text-sm">Years</p>
                </div>
                <div className="bg-secondary/80 p-4 rounded-lg">
                  <span className="text-3xl font-anton gradient-text">100K+</span>
                  <p className="text-white/70 text-sm">Participants</p>
                </div>
                <div className="bg-secondary/80 p-4 rounded-lg">
                  <span className="text-3xl font-anton gradient-text">150+</span>
                  <p className="text-white/70 text-sm">Speakers</p>
                </div>
                <div className="bg-secondary/80 p-4 rounded-lg">
                  <span className="text-3xl font-anton gradient-text">5+</span>
                  <p className="text-white/70 text-sm">Countries</p>
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
            <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-4">
              Featured Speakers
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
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
              <h2 className="text-3xl md:text-4xl font-anton gradient-text my-4">
                Pastor Brian Jones Amoateng
              </h2>
              <p className="text-white/80 mb-4">
                Pastor Brian Jones Amoateng is the visionary founder of the International Youth Empowerment Summit, dedicated to raising a generation of empowered youth who will transform their communities and nations.
              </p>
              <p className="text-white/80 mb-6">
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
            <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
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
            src="https://source.unsplash.com/random/1920x1080?audience,dark"
            alt="Join IYES"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-6">
              Be Part of IYES 2025
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Don't miss this opportunity to connect, learn, and grow with fellow young leaders from around the world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Register Now
              </Button>
              <Button variant="outline">
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
