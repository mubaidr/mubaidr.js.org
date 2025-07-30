# AI Coding Agent Instructions

This is a **Nuxt 3 portfolio website** using TypeScript, Nuxt Content, and Nuxt UI for a personal blog and services showcase.

## Architecture Overview

**Content-Driven Architecture**: Content lives in YAML/Markdown files under `/content/` with strict TypeScript schemas defined in `content.config.ts`. Pages consume this data via `queryCollection()` calls.

**UI System**: Built on Nuxt UI 3 + Tailwind CSS 4 with custom component variants in `app.config.ts`. Glass morphism design with backdrop blur effects and smooth transitions.

**Static Generation**: Configured for GitHub Pages deployment with SSR + static prerendering. All routes use `static: true` in route rules.

## Key Patterns

### Content Management

- **Collections**: Define schemas in `content.config.ts` for type-safe content queries
- **Data Flow**: `queryCollection("profile").first()` → reactive data → SEO meta generation
- **Content Types**: Blog posts (Markdown), structured data (YAML), author profiles (JSON)

```typescript
// Pattern: Content queries with SEO integration
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})

// Auto-generate SEO meta from content
useHead({
  title: `${profile.value.name} - ${profile.value.title}`,
  meta: [{ name: "description", content: profile.value.description }],
})
```

### Component Architecture

- **Composition API**: All components use `<script setup lang="ts">`
- **Atomic Design**: Preview components (`AboutPreview.vue`) aggregate data and link to detail pages
- **State Management**: Reactive refs for UI state (mobile menu, theme), no external store needed

### SEO & Meta Management

- **Schema.org**: Structured data via `useSchemaOrg()` with person/website definitions
- **OG Images**: Auto-generated via `asOgImageCollection()` in content config
- **Multi-format Meta**: OpenGraph, Twitter cards, and JSON-LD all generated from content

### Styling Conventions

- **Design System**: Glass morphism with `backdrop-blur-lg` and semi-transparent backgrounds
- **Responsive**: Mobile-first with `lg:` breakpoints for desktop navigation
- **Animations**: `hover:scale-110 transition-transform duration-300` for micro-interactions
- **Dark Mode**: System preference detection via `@nuxtjs/color-mode`

## Critical Files

- `nuxt.config.ts`: Module configuration, GitHub Pages preset, experimental features
- `content.config.ts`: Type-safe content schemas with Zod validation
- `app.config.ts`: UI theme customization and component defaults
- `app/layouts/default.vue`: Geometric background + header/footer structure
- `content/profile.yml`: Central profile data driving homepage hero section

## Development Workflow

```bash
npm run dev          # Development server with hot reload
npm run generate     # Static site generation for deployment
npm run lint         # ESLint with auto-fix
npm run type-check   # TypeScript validation
```

**Content Editing**: Use Nuxt Studio integration or direct file editing. Content changes trigger regeneration.

**Component Development**: Create in `/app/components/`, auto-imported by Nuxt. Follow PascalCase naming.

**Blog Posts**: Add to `/content/blog/` with frontmatter matching blog collection schema. Include `date`, `author`, `description`.

## Deployment Notes

- **Target**: GitHub Pages with `nitro.preset: "github-pages"`
- **Build**: Static generation with prerendering enabled
- **Assets**: Images optimized, Brotli/Gzip compression enabled
- **Routes**: All routes marked as `static: true` for full prerendering

## Integration Points

- **Nuxt Content**: File-based CMS with MDC component support
- **Nuxt SEO**: Automated sitemap, robots.txt, schema.org
- **Nuxt Studio**: Live content editing (configured for this repo)
- **Schema.org**: Person identity defined in `nuxt.config.ts` schemaOrg section

When adding features, maintain the content-driven approach and ensure SEO meta generation follows existing patterns.
