import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/home/CountdownTimer";
import SpeakerCard, { Speaker } from "@/components/home/SpeakerCard";
import { useMemo } from "react";
import BlogPostCard from "@/components/home/BlogPostCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";

const Index = () => {
  const featuredSpeakers: Speaker[] = [
    {
      id: 1,
      name: "Pastor Brian Jones Amoateng",
      role: "Founder & Senior Pastor",
      organization: "Mercylife Church",
      image: "/images/speakers/Ps-Brian-Amoateng.jpeg",
      bio: "Pastor Brian Amoateng is the founder of Brian Jones Ministries,UK.,Pastor, Human Resource Consultant, Author, Philanthropist, Life Coach and known to many as The Revivalist",
      featured: true,
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
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
      id: 3,
      name: "Pastor Jerry Uchechukwu Eze",
      role: "Founder & Senior Pastor",
      organization: "Streams of Joy International",
      image: "images/speakers/2026/pastor-jerry-eze.webp",
      bio: "Pastor Jerry Uchechukwu Eze is a renowned Nigerian Pentecostal pastor, author, and founder of Streams of Joy International. He is best known as the convener of the New Season Prophetic Prayers and Declarations (NSPPD), a popular global daily online prayer platform with the slogan 'What God cannot do, does not exist'",
      featured: true,
      social: {
        linkedin: "#"
      }
    },
  ];

  const featuredPosts = useMemo(
    () => getAllBlogPosts().slice(0, 3),
    []
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0f2d52]">
        {/* Blurred, tinted copy of the hero art as a see-through backdrop */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="images/iyes-2027-hero.webp"
            alt=""
            className="w-full h-full object-cover scale-125 blur-3xl opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a4173]/70 via-[#12335f]/80 to-[#0b2140]/95"></div>

          {/* Abstract texture: soft glows, diagonal strokes (echoing the artwork's pattern), rings and dots */}
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#3d7fc4]/25 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#e8b230]/15 blur-3xl"></div>
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <g stroke="#8fc3f0" strokeLinecap="round" opacity="0.14">
              <line x1="-20" y1="220" x2="180" y2="60" strokeWidth="26" />
              <line x1="60" y1="420" x2="330" y2="200" strokeWidth="14" />
              <line x1="-40" y1="640" x2="260" y2="400" strokeWidth="34" />
              <line x1="1000" y1="120" x2="1240" y2="-40" strokeWidth="30" />
              <line x1="940" y1="520" x2="1220" y2="300" strokeWidth="16" />
              <line x1="900" y1="860" x2="1200" y2="620" strokeWidth="36" />
            </g>
            <g stroke="#e8b230" strokeWidth="2" opacity="0.35">
              <circle cx="110" cy="110" r="70" />
              <circle cx="110" cy="110" r="105" opacity="0.5" />
              <circle cx="1110" cy="690" r="90" />
              <circle cx="1110" cy="690" r="130" opacity="0.5" />
            </g>
            <g fill="#e8b230" opacity="0.45">
              <circle cx="300" cy="90" r="5" />
              <circle cx="1040" cy="300" r="4" />
              <circle cx="170" cy="560" r="4" />
              <circle cx="880" cy="740" r="6" />
            </g>
            <g fill="#8fc3f0" opacity="0.18">
              <path d="M1060 40 l40 70 h-80 z" />
              <path d="M90 700 l34 60 h-68 z" />
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-8 pb-10 md:pt-12 md:pb-14 text-center">
          <img
            src="images/iyes-2027-hero.webp"
            alt="IYES 2027 - International Youth Empowerment Summit, Tuesday March 9th to 12th, 2027"
            className="w-full max-w-6xl mx-auto h-auto rounded-xl md:rounded-2xl shadow-2xl ring-1 ring-[#e8b230]/40"
          />
          <p className="font-countdown text-2xl md:text-4xl text-white tracking-[0.12em] uppercase mt-8 mb-5 [text-shadow:0_2px_16px_rgba(232,178,48,0.35)]">
            Countdown to IYES 2027 &middot; Tuesday, March 9th &ndash; 12th, 2027
          </p>
          <CountdownTimer />
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="images/iyes-crowd.webp"
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
                  <span className="text-3xl font-heading text-foreground">10</span>
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
              <BlogPostCard key={post.slug} post={post} />
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

      {/* Volunteer Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                Volunteer with IYES
              </h2>
              <p className="text-muted-foreground mb-4">
                Be part of the team making IYES possible. If you would like to volunteer,
                reach us on WhatsApp or call.
              </p>
              <a
                href="tel:+233550379597"
                className="text-foreground font-medium hover:text-primary transition-colors"
              >
                WhatsApp & Call: +233 55 037 9597
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/images/iyes-volunteer.jpg"
                alt="IYES volunteers"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/iyes-gallery/iyes-upsa.jpeg"
            alt="Join IYES"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-6">
              Be Part of IYES 2027
            </h2>
            <p className="text-white/85 text-lg mb-8">
              Don't miss this opportunity to connect, learn, and grow with fellow young leaders from around the world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Register Now
                </Button>
              </Link>
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
