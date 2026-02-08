import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/home/BlogPostCard";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const relatedPosts = getAllBlogPosts()
    .filter(
      (related) =>
        related.slug !== post?.slug &&
        related.frontmatter.category === post?.frontmatter.category
    )
    .slice(0, 3);

  if (!post) {
    return (
      <Layout>
        <section className="pt-12 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Blog post not found
            </h1>
            <p className="text-muted-foreground mb-6">
              The article you are looking for might have been moved or renamed.
            </p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          {/* Article Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <span className="inline-block text-accent text-sm font-medium mb-3">
              {post.frontmatter.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4">
              {post.frontmatter.title}
            </h1>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src={post.frontmatter.authorImage}
                  alt={post.frontmatter.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-foreground font-medium">
                  {post.frontmatter.author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="rounded-xl overflow-hidden">
              <img 
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <post.Content />
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {post.frontmatter.tags?.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-secondary/50 text-foreground/80 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Share Buttons */}
            <div className="flex flex-wrap items-center justify-between border-t border-b border-border/30 py-6 mb-12">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-lg font-medium text-foreground mb-2">Share this article</h3>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </button>
                  <button
                    type="button"
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label="Share on X"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </button>
                  <button
                    type="button"
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </button>
                  <button
                    type="button"
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label="Share via email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </button>
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
            <h2 className="text-3xl font-heading text-foreground mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-6">
              Ready to Experience IYES for Yourself?
            </h2>
            <p className="text-muted-foreground mb-8">
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
