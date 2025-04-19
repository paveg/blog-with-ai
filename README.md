# Blog with AI

A modern blog system built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.  
Articles are managed as MDX files under `src/content/`, supporting flexible layouts and custom components.

---

## 1. Project Overview

**Blog with AI** is a developer-friendly, extensible blog platform.

- Built with the latest Next.js (App Router) and TypeScript.
- Uses Tailwind CSS and shadcn/ui for rapid, consistent UI development.
- Articles are written in MDX, allowing both Markdown and React components.
- Easy to add, preview, and deploy articles.

---

## 2. Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Library:** shadcn/ui
- **Content:** MDX
- **Package Manager:** pnpm
- **Lint/Format:** ESLint, Prettier

---

## 3. Directory Structure

```bash
src/
  app/                # Next.js app
    blog/             # Blog article pages
  components/         # UI & MDX custom components
  content/            # Articles (MDX files)
    2024/             # Year-based article directories
      sample-post.mdx # Example article
  lib/                # Logic & utilities
public/               # Static files
docs/style-guide.md   # UI style guide
```

---

## 4. Getting Started

1. **Clone the repository**

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Lint, Format, and Test**

   ```bash
   pnpm lint      # Lint code
   pnpm format    # Format code
   # Add test command if available
   ```

---

## 5. How to Add Articles

- Add a `.mdx` file under `src/content/{year}/`
- Include YAML frontmatter at the top:

  ```mdx
  ---
  title: 'Article Title'
  date: '2024-04-19'
  description: 'Short description of the article'
  slug: 'sample-post'
  ---
  ```

- Use Markdown/MDX syntax and custom components as needed.

Example: `src/content/2024/sample-post.mdx`

````mdx
---
title: 'MDX Sample Post'
date: '2024-04-19'
description: 'A showcase of all available MDX features and recommended styles.'
slug: 'sample-post'
---

## Heading

This is a **paragraph** example.  
_Italic_, **bold**, ~~strikethrough~~, and `inline code` are supported.

- Unordered list
  - Nested item
- Another item

1. Ordered list
2. Second item

- [x] Checked task
- [ ] Unchecked task

> Blockquote example

[Link example](https://example.com)

![Accessible image example](https://placehold.jp/300x100.png 'Sample image')

<details>
  <summary>Show details (MDX custom element example)</summary>
  This is the content inside the details tag.
</details>

```js
// Code block (JavaScript)
console.log('Hello, world!');
```
````

```tsx
<Card className="my-6">
  <CardHeader>
    <CardTitle>Card Component Example</CardTitle>
  </CardHeader>
  <CardContent>This is inside the Card.</CardContent>
</Card>
```

- For more MDX syntax and custom component examples, see `sample-post.mdx`.

---

## 6. Coding & UI Style Guide

- For UI/layout conventions, see [docs/style-guide.md](docs/style-guide.md)
- Code style is enforced by ESLint and Prettier

---

## 7. Deployment

- Deployable to Vercel or any Next.js-compatible PaaS
- **Do not commit `.env` or other confidential files**

---

## 8. License

This project is licensed under the [MIT License](./LICENSE) (c) 2025 funai.

---
