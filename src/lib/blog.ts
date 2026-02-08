import type { ComponentType } from "react";

export type BlogFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorImage?: string;
  image: string;
  category: string;
  tags?: string[];
  featured?: boolean;
  slug?: string;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  Content: ComponentType;
};

const modules = import.meta.glob("../content/blog/*.mdx", { eager: true });

const posts = Object.entries(modules)
  .map(([path, mod]) => {
    const module = mod as {
      frontmatter?: BlogFrontmatter;
      default: ComponentType;
    };
    const fileSlug = path.split("/").pop()?.replace(/\.mdx$/, "") ?? "";
    const frontmatter = module.frontmatter ?? ({} as BlogFrontmatter);

    return {
      slug: frontmatter.slug ?? fileSlug,
      frontmatter: {
        title: frontmatter.title ?? "Untitled",
        excerpt: frontmatter.excerpt ?? "",
        date: frontmatter.date ?? "",
        author: frontmatter.author ?? "IYES Team",
        authorImage: frontmatter.authorImage ?? "/images/profile-empty.png",
        image: frontmatter.image ?? "/images/iyes-default.jpg",
        category: frontmatter.category ?? "General",
        tags: frontmatter.tags ?? [],
        featured: frontmatter.featured ?? false,
        slug: frontmatter.slug ?? fileSlug,
      },
      Content: module.default,
    };
  })
  .sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

export const getAllBlogPosts = () => posts;

export const getBlogPostBySlug = (slug: string) =>
  posts.find((post) => post.slug === slug);

export const getBlogCategories = () =>
  Array.from(new Set(posts.map((post) => post.frontmatter.category)));
