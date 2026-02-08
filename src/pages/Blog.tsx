import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import BlogPostCard from "@/components/home/BlogPostCard";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const blogPosts = useMemo(() => getAllBlogPosts(), []);
  const categories = useMemo(() => getBlogCategories(), []);
  const featuredPost = useMemo(
    () => blogPosts.find((post) => post.frontmatter.featured),
    [blogPosts]
  );

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter(
          (post) => post.frontmatter.category === activeCategory
        );

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
                  ? "bg-primary text-primary-foreground"
                  : "bg-background/50 text-foreground/70 hover:text-foreground"
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
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/50 text-foreground/70 hover:text-foreground"
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
      {activeCategory === "all" && featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-secondary/30 rounded-xl overflow-hidden">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img 
                  src={featuredPost.frontmatter.image}
                  alt={featuredPost.frontmatter.title}
                  className="w-full h-[350px] object-cover object-center"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-accent text-sm font-medium">Featured Post</span>
                <h2 className="text-2xl md:text-3xl font-heading text-foreground my-3">
                  {featuredPost.frontmatter.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.frontmatter.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src={featuredPost.frontmatter.authorImage}
                        alt={featuredPost.frontmatter.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">
                        {featuredPost.frontmatter.author}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {new Date(featuredPost.frontmatter.date).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to={`/blog/${featuredPost.slug}`}>Read Article</Link>
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
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try selecting another category</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-6">
              Stay updated with the latest articles, event announcements, and opportunities from IYES.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
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
