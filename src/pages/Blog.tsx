import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import BlogPostCard, { BlogPost } from "@/components/home/BlogPostCard";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const categories = ["Event Recaps", "Success Stories", "Leadership", "Faith", "Upcoming Events"];
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Key Takeaways from IYES 2025",
      excerpt: "The most impactful moments and lessons from this year's summit that continue to inspire youth leaders.",
      date: "2025-03-20",
      author: "James Mensa",
      image: "/images/iyes-crowd-flag.jpg",
      category: "Event Recaps",
      slug: "key-takeaways-iyes-2025"
    },
    {
      id: 2,
      title: "How IYES Changed My Entrepreneurial Journey",
      excerpt: "One attendee's story of transformation and growth after participating in IYES workshops.",
      date: "2025-03-15",
      author: "Sarah Addo",
      image: "/images/blog-images/pb-seated.jpeg",
      category: "Success Stories",
      slug: "how-iyes-changed-my-entrepreneurial-journey"
    },
    {
      id: 3,
      title: "Preparing for IYES 2026: What to Expect",
      excerpt: "An early look at the themes, speakers, and opportunities coming to next year's summit.",
      date: "2025-04-05",
      author: "Daniel Kwame",
      image: "/images/blog-images/iyes-usa.jpeg",
      category: "Upcoming Events",
      slug: "preparing-for-iyes-2026"
    },
    {
      id: 4,
      title: "7 Leadership Lessons from Pastor Brian Jones Amoateng",
      excerpt: "Practical wisdom from the founder of IYES that can transform your approach to leadership.",
      date: "2025-02-28",
      author: "Michael Tetteh",
      image: "/images/pb-in-white-with-flag.jpeg",
      category: "Leadership",
      slug: "leadership-lessons-pastor-brian"
    },
    {
      id: 5,
      title: "Faith and Purpose: Finding Your Path in Life",
      excerpt: "How spiritual foundations can guide your journey to discovering and fulfilling your purpose.",
      date: "2025-02-15",
      author: "Grace Afolabi",
      image: "/images/eastwood.jpg",
      category: "Faith",
      slug: "faith-and-purpose"
    },
    {
      id: 6,
      title: "IYES Partner Organizations Making a Difference",
      excerpt: "Highlighting the impact of organizations that have collaborated with IYES over the years.",
      date: "2025-01-20",
      author: "Joshua Mensah",
      image: "/images/sam-george.jpg",
      category: "Event Recaps",
      slug: "partner-organizations-making-difference"
    },
    {
      id: 7,
      title: "From Attendee to Speaker: My IYES Journey",
      excerpt: "The inspiring story of how one young person went from sitting in the audience to standing on the stage.",
      date: "2025-01-10",
      author: "Amara Koffi",
      image: "images/male-singer.jpg",
      category: "Success Stories",
      slug: "from-attendee-to-speaker"
    },
    {
      id: 8,
      title: "Balancing Ambition and Faith in Your Career",
      excerpt: "How to pursue excellence in your professional life while staying grounded in your spiritual values.",
      date: "2024-12-15",
      author: "David Asante",
      image: "/images/joe-mettle.jpg",
      category: "Faith",
      slug: "balancing-ambition-and-faith"
    },
    {
      id: 9,
      title: "Youth Entrepreneurship: Challenges and Opportunities in Africa",
      excerpt: "Insights from IYES panels on navigating the entrepreneurial landscape as a young African.",
      date: "2024-12-05",
      author: "Fatima Diallo",
      image: "/images/happy-youth.jpg",
      category: "Leadership",
      slug: "youth-entrepreneurship-africa"
    }
  ];

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <Layout>
      <PageHeader
        title="IYES Blog"
        subtitle="Insights, stories, and updates from the International Youth Empowerment Summit"
      />
      
      {/* Category Filter */}
      <section className="py-8 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-white"
                  : "bg-background/50 text-white/70 hover:text-white"
              }`}
              onClick={() => setActiveCategory("all")}
            >
              All Posts
            </button>
            
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-background/50 text-white/70 hover:text-white"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      {activeCategory === "all" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-secondary/30 rounded-xl overflow-hidden">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img 
                  src="/images/blog-images/iyes-usa.jpeg"
                  alt="Featured Post"
                  className="w-full h-[350px] object-cover object-center"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-accent text-sm font-medium">Featured Post</span>
                <h2 className="text-2xl md:text-3xl font-anton text-white my-3">
                  15 Years of IYES: A Journey of Impact and Transformation
                </h2>
                <p className="text-white/80 mb-6">
                  As we celebrate our 15th anniversary, we look back at the incredible journey of IYES, from its humble beginnings to becoming a continental platform for youth empowerment.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src="/images/profile-empty.png"
                        alt="Pastor Brian"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium">Pastor Brian J. Amoateng</p>
                      <p className="text-white/60 text-sm">April 10, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline">
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl text-white mb-2">No articles found</h3>
              <p className="text-white/70">Try selecting another category</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-anton gradient-text mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 mb-6">
              Stay updated with the latest articles, event announcements, and opportunities from IYES.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
              />
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
