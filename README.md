# IYES

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How to add a blog post

Blog posts live in `src/content/blog` as `.mdx` files. Each file has frontmatter at the top that controls the title, images, dates, and category. The file name becomes the default URL slug unless you set `slug` in the frontmatter.

1. Create a new file in `src/content/blog`, for example `my-new-post.mdx`.
2. Add frontmatter like this:

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

3. Write your content under the frontmatter using Markdown headings and text.
4. Save the file and refresh the site. The post will appear on `/blog` and at `/blog/my-post-title`.

Tips:
- To set a featured post, set `featured: true` on one post.
- Keep the `date` format as `YYYY-MM-DD` for correct sorting.

