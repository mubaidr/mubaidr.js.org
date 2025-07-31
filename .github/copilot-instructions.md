# Copilot Instructions for AI Coding Agents

## Project Overview

- **Framework:** Nuxt 3 (Vue 3, TypeScript)
- **Purpose:** Personal portfolio & blog with content-driven architecture
- **Content:** Markdown/YAML in `content/`, rendered via Nuxt Content
- **UI:** Nuxt UI 3, Tailwind CSS 4, glassmorphism, dark/light mode
- **Deployment:** Static site, GitHub Pages, automated via GitHub Actions

## Key Structure & Patterns

- **App Source:** All code in `app/` (components, layouts, pages, plugins, assets)
- **Content:**
  - Blog posts: `content/blog/*.md` (frontmatter required)
  - Projects/services/testimonials: YAML in `content/`
  - Authors: `content/authors/*.json`
- **TypeScript types:** `types/`
- **Configuration:**
  - Nuxt: `nuxt.config.ts`
  - Content: `content.config.ts`
  - App UI/theme: `app/app.config.ts`
- **Static assets:** `public/` (images, icons, etc.)

## Developer Workflows

- **Install:** `npm install`
- **Dev server:** `npm run dev` (localhost:3000)
- **Build:** `npm run build`
- **Static export:** `npm run generate`
- **Preview:** `npm run preview`
- **Lint:** `npm run lint`
- **Format:** `npm run format`

## Project Conventions

- **Content-first:** All dynamic data (blog, projects, services) comes from `content/` files, not hardcoded in Vue files.
- **Frontmatter:** Blog posts require frontmatter (title, date, tags, etc.).
- **Component usage:** Prefer composition and slot-based components in `app/components/`.
- **Styling:** Use Tailwind utility classes; avoid custom CSS unless necessary.
- **Dark/Light mode:** Use Nuxt color mode utilities; do not hardcode colors.
- **SEO:** Use Nuxt SEO and schema modules; meta tags are set in page components or config.
- **Image paths:** Reference images from `/public/img/` in content frontmatter.

## Integration Points

- **Nuxt Content:** All markdown/YAML is auto-indexed and available via Nuxt Content composables.
- **Nuxt UI:** Use Nuxt UI 3 components for all UI elements.
- **GitHub Actions:** Deployment is automated; do not add custom deploy scripts.

## Examples

- **Add a blog post:** Place a markdown file with frontmatter in `content/blog/`.
- **Add a project:** Edit `content/projects.yml`.
- **Change theme color:** Edit `app/app.config.ts`.

## References

- See `README.md` for full project details and examples.
- Key configs: `nuxt.config.ts`, `content.config.ts`, `app/app.config.ts`.
- Main entry: `app/app.vue`, layouts in `app/layouts/`, pages in `app/pages/`.

---

**For AI agents:**

- Follow the content-driven pattern; do not hardcode data in Vue files.
- Use existing components and composables where possible.
- Adhere to project structure and conventions above.
- If unsure, check the README or config files for examples.
