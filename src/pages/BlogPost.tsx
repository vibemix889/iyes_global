import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/home/BlogPostCard";
import type { BlogPost } from "@/components/home/BlogPostCard";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // This would typically come from an API or database
  const post = {
    title: "5 Key Takeaways from IYES 2025",
    date: "March 20, 2025",
    author: "James Mensa",
    authorImage: "/images/profile-empty.png",
    category: "Event Recap",
    image: "/images/iyes-crowd-flag.jpg",
    content: `
      <p>The International Youth Empowerment Summit (IYES) 2025 was a transformative experience for thousands of young people who gathered in Accra, Ghana this March. For three days, participants were inspired, equipped, and challenged by world-class speakers, practical workshops, and networking opportunities.</p>

      <p>Now that the dust has settled and we've had time to reflect, here are the five key takeaways that continue to resonate with attendees:</p>

      <h3>1. Purpose-Driven Leadership is Essential</h3>

      <p>Pastor Brian Jones Amoateng's opening address emphasized that true leadership begins with a clear sense of purpose. "Leadership without purpose is just activity," he stated. Throughout the summit, speakers reinforced this message, highlighting how understanding your 'why' transforms your impact and effectiveness.</p>

      <p>The panel discussion featuring young leaders from various sectors demonstrated how purpose-driven leadership has enabled them to overcome obstacles and create meaningful change in their communities.</p>

      <h3>2. Innovation Requires Courage</h3>

      <p>The tech and innovation track at IYES 2025 showcased remarkable solutions being developed by young Africans. The common thread among these innovators was courage – the willingness to step out and try something new despite limited resources or supportive ecosystems.</p>

      <p>Samuel Osei's session on "Building with Limited Resources" was particularly impactful, as he shared how his startup journey began in his university dormitory with just a laptop and an idea. Now employing over 50 young people, his story exemplifies how courage and persistence can turn limitations into stepping stones.</p>

      <h3>3. Community is a Catalyst</h3>

      <p>One of the most powerful aspects of IYES is the community it creates. The 2025 summit reinforced how important supportive communities are for personal and professional growth. The networking sessions, specifically designed to connect like-minded individuals, resulted in numerous partnerships, mentorship relationships, and collaborative projects.</p>

      <p>As Dr. Maya Johnson noted in her keynote, "Your community determines your trajectory. Choose wisely who you surround yourself with – they either lift you up or bring you down."</p>

      <h3>4. Faith and Excellence Go Hand in Hand</h3>

      <p>IYES has always emphasized that faith and excellence are complementary, not contradictory. This year's summit dug deeper into this principle, with practical sessions on how spiritual foundations can fuel professional excellence.</p>

      <p>Pastor Emmanuel Kumi's workshop on "Excellence as Worship" resonated with many attendees, providing a framework for approaching work, education, and service with an excellence mindset grounded in faith principles.</p>

      <h3>5. Africa's Future Depends on Youth Engagement</h3>

      <p>The closing ceremony highlighted the critical role young people play in shaping Africa's future. With over 60% of the continent's population under 25, speakers emphasized that Africa's trajectory will be determined by how well we empower, equip, and engage this demographic.</p>

      <p>The announcement of the IYES Impact Fund, which will provide startup capital for youth-led initiatives across the continent, was met with thunderous applause and represents a concrete step toward supporting this vision.</p>

      <h3>Looking Ahead</h3>

      <p>As we look forward to IYES 2026, these takeaways provide direction and inspiration for the year ahead. The summit may have ended, but its impact continues as participants implement what they've learned in their communities, businesses, and personal lives.</p>

      <p>Were you at IYES 2025? We'd love to hear your own key takeaways and how you're applying what you learned. Share your experiences in the comments below!</p>
    `,
    tags: ["IYES 2025", "Youth Empowerment", "Leadership", "Africa", "Conference"],
  };

  // Related posts would typically be fetched based on tags or category
  const relatedPosts: BlogPost[] = [
    {
      id: 2,
      title: "How IYES Changed My Entrepreneurial Journey",
      excerpt: "One attendee's story of transformation and growth after participating in IYES workshops.",
      date: "2025-03-15",
      author: "Sarah Addo",
      image: "/images/blog-images/pb-seated.jpeg",
      category: "Success Story",
      slug: "how-iyes-changed-my-entrepreneurial-journey"
    },
    {
      id: 4,
      title: "7 Leadership Lessons from Pastor Brian Jones Amoateng",
      excerpt: "Practical wisdom from the founder of IYES that can transform your approach to leadership.",
      date: "2025-02-28",
      author: "Michael Tetteh",
      image: "/images/pb-mahama.jpeg",
      category: "Leadership",
      slug: "leadership-lessons-pastor-brian"
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
    }
  ];

  return (
    <Layout>
      <article className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          {/* Article Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <span className="inline-block text-accent text-sm font-medium mb-3">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-anton gradient-text mb-4">
              {post.title}
            </h1>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src={post.authorImage}
                  alt={post.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-white/60 text-sm">{post.date}</p>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="rounded-xl overflow-hidden">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="bg-secondary/50 text-white/80 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Share Buttons */}
            <div className="flex flex-wrap items-center justify-between border-t border-b border-border/30 py-6 mb-12">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-lg font-medium text-white mb-2">Share this article</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/70 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </a>
                </div>
              </div>
              <Button variant="outline">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Posts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="">
            <h2 className="text-3xl font-anton gradient-text mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-anton gradient-text mb-6">
              Ready to Experience IYES for Yourself?
            </h2>
            <p className="text-white/80 mb-8">
              Join us at the next International Youth Empowerment Summit and be part of this transformative experience.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Register for IYES 2026
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
