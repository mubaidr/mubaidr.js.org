# Copilot instructions for this repo

Purpose: make AI agents effective fast with repo-specific patterns (not generic advice).

## Big picture

- Stack: Nuxt 4 (Vue 3 + TS), @nuxt/content, Nuxt UI 3, Tailwind CSS 4, Nuxt SEO/Schema.org.
- Source in `app/` (pages, components, layouts, plugins); content in `content/` (Markdown/YAML/JSON); static in `public/`.
- SSR enabled but fully pre-rendered (Nitro `github-pages` preset + `routeRules` static). Avoid runtime servers/APIs—prefer static/content-driven features.
- Content types are Zod-typed in `content.config.ts`; invalid frontmatter/data breaks the build.

## Dev workflows

- Engines: Node >= 23, npm >= 10. After install, `nuxt prepare` generates types.
- Scripts: `npm run dev`, `build`, `generate` (static), `preview`, `type-check`, `lint`, `format`.

## Structure & conventions

- Use `<script setup lang="ts">`, Nuxt auto-imports, and `useAsyncData` with stable keys.
- UI via Nuxt UI (`UButton`, `UCard`, `UBadge`, `UIcon`); theme tokens in `app/app.config.ts` (`ui.colors.primary`, component defaults).
- Tailwind 4 utilities; typography plugin; minimal CSS in `app/assets/css/main.css`.
- Icons via `@nuxt/icon` (e.g. `i-ph-rocket-launch`); client bundle scans used icons.

## Content model & queries

- Collections (`content.config.ts`):
  - Pages: `blog` (Markdown with `title`, `description`, `date`, optional `dateUpdated`, `tags`, `image`/`socialImage`, `featured`, `author`).
  - Data: `authors`, `testimonials`, `faqs`, `professionalJourney`, `profile`, `projects`, `services`, `techStack`.
- Query examples:
  - Recent posts: `queryCollection('blog').order('date','DESC').limit(2).all()` (see `app/components/RecentBlogPosts.vue`).
  - Post by path: `queryCollection('blog').path(route.path).first()` (see `app/pages/blog/[...slug].vue`).
- When adding fields, update Zod schemas in `content.config.ts`; ensure content matches before committing.

## SEO & social

- Use `useSeoMeta` + `useHead` (canonical), `defineOgImage`/`defineOgImageComponent('NuxtSeo')`, and `useSchemaOrg`.
- Examples: blog page sets OG/Twitter, canonical, and BlogPosting JSON-LD in `app/pages/blog/[...slug].vue`; site identity via `schemaOrg.identity` in `nuxt.config.ts`.

## Routing, types, assets

- `experimental.typedPages: true`; add pages in `app/pages/`. Keep routes static-friendly.
- Images in `public/img/...`; reference with absolute paths (`/img/...`). Blog can use `image` or `socialImage` frontmatter.

## Do / Don’t

- Do: keep features static/content-driven; reuse Nuxt UI; follow existing SEO/meta pattern; respect engines; run `type-check` + `lint`.
- Don’t: add server APIs or runtime DB calls; bypass content schemas; introduce heavy global CSS over Tailwind utilities.

## Handy file map

- Config: `nuxt.config.ts`, `content.config.ts`, `app/app.config.ts`, `eslint.config.mjs`, `.prettierrc`.
- Pages: `app/pages/index.vue`, `app/pages/blog/[...slug].vue`.
- Components: `app/components/RecentBlogPosts.vue`, `app/components/SiteHeader.vue`.
- Content samples: `content/blog/*.md`, `content/profile.yml`, `content/projects.yml`, `content/services.yml`.
