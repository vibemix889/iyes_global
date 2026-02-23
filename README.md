# IYES Global

IYES Global is an event and conference platform designed to showcase speakers, galleries, testimonies, and insightful blog content.

## Getting Started

To get the project up and running locally, ensure you have [Node.js](https://nodejs.org/) installed.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <YOUR_GIT_URL>
    cd iyes_global
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Start the development server:**
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:8080` (or similar port).

## Project Structure

This project is built using:
-   **[Vite](https://vitejs.dev/)** - Fast frontend build tool.
-   **[React](https://react.dev/)** - UI library.
-   **[TypeScript](https://www.typescriptlang.org/)** - For type safety.
-   **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework.
-   **[shadcn/ui](https://ui.shadcn.com/)** - Reusable components built with Radix UI and Tailwind CSS.
-   **[React Router](https://reactrouter.com/)** - Client-side routing.
-   **[TanStack Query](https://tanstack.com/query/latest)** - Data fetching and state management.

### Key Directories

-   `src/components`: Reusable UI components.
-   `src/pages`: Application views/routes (Index, About, Speakers, etc.).
-   `src/content/blog`: MDX files for blog posts.
-   `public`: Static assets.

## Managing Content

### Adding a Blog Post

Blog posts are located in `src/content/blog` as `.mdx` files.

1.  Create a new file in `src/content/blog`, e.g., `my-new-post.mdx`.
2.  Add the required frontmatter:

    ```md
    ---
    title: "My Post Title"
    excerpt: "Short summary shown on cards."
    date: "2025-06-01"
    author: "Author Name"
    authorImage: "/images/profile-empty.png"
    image: "/images/iyes-default.jpg"
    category: "Leadership"
    tags:
      - Leadership
      - Faith
    featured: false
    slug: "my-post-title"
    ---
    ```

3.  Write your content below the frontmatter using Markdown.
4.  The post will automatically appear on the `/blog` page.

## Deployment

The project is configured for deployment on platforms like Netlify. See `netlify.toml` for configuration details.
