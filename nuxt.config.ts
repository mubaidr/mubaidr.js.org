import { definePerson } from "nuxt-schema-org/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
const IS_DEV = import.meta.dev

export default defineNuxtConfig({
  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: "",
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2026-07-03",

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/favicon.png" },
        { rel: "llms-txt", href: "/llms.txt" },
        { rel: "llms-txt-full", href: "/llms-full.txt" },
        { rel: "llms", href: "/llms.txt" },
      ],
    },
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        rehypePlugins: {
          "rehype-external-links": {
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
        toc: {
          depth: 2,
          searchDepth: 2,
        },
        highlight: {
          langs: [
            "js",
            "jsx",
            "json",
            "ts",
            "tsx",
            "vue",
            "css",
            "html",
            "vue",
            "bash",
            "md",
            "mdc",
            "yaml",
            "php",
            "dockerfile",
            "nginx",
            "apache",
            "ini",
            "bash",
            "python",
            "yaml",
          ],
        },
      },
    },
    preview: {
      dev: IS_DEV,
      api: "https://api.nuxt.studio",
      gitInfo: {
        name: "mubaidr.js.org",
        owner: "mubaidr",
        url: "https://github.com/mubaidr/mubaidr.js.org",
      },
    },
  },

  debug: false,

  devtools: { enabled: IS_DEV },

  experimental: {
    typedPages: true,
    typescriptPlugin: true,
    buildCache: true,
    headNext: true,
    viewTransition: true,
    navigationRepaint: true,
    payloadExtraction: false,
    appManifest: false,
  },

  eslint: {
    checker: false,
    config: true,
  },

  features: {
    inlineStyles: true,
  },

  // fonts: {},

  icon: {
    provider: "iconify",
  },

  // image: {
  //   format: ["webp", "avif"],
  // },

  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/ui",
    // "@nuxt/image",
    // "@nuxtjs/mdc",
    "@nuxtjs/seo",
    // "nuxt-feedme",
    "@nuxt/content",
    "nuxt-mcp-dev",
    "@nuxt/eslint",
  ],

  nitro: {
    preset: "github-pages",
    prerender: {
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: true,
    },
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },

  routeRules: {
    "/**": {
      static: true,
    },
    "/llms.txt": {
      static: true,
    },
    "/llms-full.txt": {
      static: true,
    },
  },

  site: {
    indexable: true,
    url: "https://mubaidr.js.org",
    name: "Muhammad Ubaid Raza - Full Stack Engineer",
    description:
      "Senior Software Engineer specializing in modern web technologies. Crafting scalable web applications and browser extensions for startups and founders.",
    defaultLocale: "en",
    enabled: true,
  },

  ssr: true,

  typescript: {
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        skipLibCheck: true,
      },
    },
  },

  ogImage: {
    buildCache: true,
    zeroRuntime: true,
  },

  // Sitemap - Auto-generates from static routes + dynamic sources
  sitemap: {
    enabled: true,
    zeroRuntime: true,
  },

  // Robots - Dynamic generation with AI crawler controls
  robots: {
    allow: ["*"],
    enabled: true,
    robotsTxt: true,
    blockAiBots: false,
    credits: false,
    sitemap: "sitemap.xml",
    blockNonSeoBots: true,
  },

  // 6. Optimized SEO (Removed IE support)
  seo: {
    enabled: true,

    meta: {
      applicationName: "Muhammad Ubaid Raza",
      author: "Muhammad Ubaid Raza",

      keywords:
        "AI agent architecture consultant, multi-agent systems, LLM orchestration, AI agents engineer, Laravel consultant, Nuxt consultant, full stack architect, software architecture review, MVP development consultant, fractional CTO, technical consultant, async software development, open source engineer, AI integration specialist, agentic workflows, workflow orchestration, developer tooling, SaaS architecture, Laravel expert, Vue.js consultant",

      description:
        "Senior Software Engineer specializing in AI agent systems, LLM orchestration, Laravel, Nuxt, and scalable SaaS architecture. Helping startups and teams build MVPs, AI-powered products, and production-ready systems through async-first consulting.",

      colorScheme: "dark light",

      titleTemplate: "%s | Muhammad Ubaid Raza",
    },

    automaticDefaults: true,
    automaticOgAndTwitterTags: true,
    setupNuxtConfigAppHeadWithMoreDefaults: true,
  },

  schemaOrg: {
    identity: definePerson({
      // Basic Information, if applicable
      name: "Muhammad Ubaid Raza",
      givenName: "Muhammad Ubaid",
      familyName: "Raza",
      additionalName: "mubaidr", // middle name or other additional names
      alternateName: "Muhammad Ubaid Raza",

      // Profile Information, if applicable
      image: "/mubaidr.png",
      description:
        "Senior Software Engineer specializing in modern web technologies. Crafting scalable web applications and browser extensions for startups and founders.",
      jobTitle:
        "Senior Software Engineer | Full-Stack Developer | DevOps Enthusiast",

      // Contact & Social, if applicable
      email: "mubaidr@gmail.com",
      url: "https://mubaidr.js.org",
      sameAs: [
        "https://twitter.com/mubaidr",
        "https://github.com/mubaidr",
        "https://linkedin.com/in/mubaidr",
      ],

      // Professional Details, if applicable
      worksFor: {
        "@type": "Organization",
        name: "Paragon Square Inc.",
        url: "https://paragonsquare.ai",
      },
    }),
  },
})
