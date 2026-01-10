
import { Link } from "react-router-dom";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  slug: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <article className="bg-card/70 border border-border/60 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <Link to={`/blog/${post.slug}`}>
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
            {post.category}
          </span>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-lg md:text-xl font-heading text-foreground hover:text-primary transition-colors duration-200">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mt-2 flex-grow">
          {post.excerpt}
        </p>
        <div className="mt-4 pt-4 border-t border-border/20 flex items-center justify-between">
          <span className="text-muted-foreground text-xs">By {post.author}</span>
          <Link 
            to={`/blog/${post.slug}`}
            className="text-primary hover:text-accent text-sm font-medium transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
