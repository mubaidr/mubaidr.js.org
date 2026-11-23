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

  compatibilityDate: "2026-11-11",

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/favicon.png" },
      ],
      meta: [
        {
          name: "keywords",
          content:
            "Muhammad Ubaid Raza, mubaidr, AI agent architect, multi-agent systems, LLM orchestration, gem-team, AI systems engineer, Laravel consultant, Nuxt consultant, full-stack architect, software architecture review, MVP development, fractional CTO, technical consultant, async software development, open source engineer, AI integration specialist, agentic workflows, workflow orchestration, developer tooling, SaaS architecture, Laravel expert, Vue.js consultant, senior software engineer Pakistan",
        },
      ],
    },
  },

  content: {
    experimental: { sqliteConnector: "native" },
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
    navigationRepaint: true,
    payloadExtraction: true,
  },

  future: {
    typescriptBundlerResolution: true,
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
    "@nuxtjs/seo",
    // "nuxt-feedme",
    "@nuxt/content",
    // "nuxt-mcp-dev",
    "@nuxt/eslint",
  ],

  nitro: {
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
  },

  site: {
    indexable: true,
    url: "https://mubaidr.js.org",
    name: "Muhammad Ubaid Raza",
    description:
      "Senior Software Engineer specializing in AI agent systems, LLM orchestration, Laravel, Nuxt, and scalable SaaS architecture. 13+ years shipping production systems for startups and enterprise.",
    defaultLocale: "en",
    enabled: true,
    ogImage: "/mubaidr.png",
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

  // Robots - Allow AI and SEO crawlers
  robots: {
    allow: ["*"],
    disallow: [],
    enabled: true,
    robotsTxt: true,
    blockAiBots: false,
    credits: false,
    sitemap: ["sitemap.xml", "llms.txt", "llms-full.txt"],
    blockNonSeoBots: true,
  },

  // 6. Optimized SEO (Removed IE support)
  seo: {
    enabled: true,

    meta: {
      applicationName: "Muhammad Ubaid Raza",
      author: "Muhammad Ubaid Raza",

      colorScheme: "dark light",

      titleTemplate: "%s | Muhammad Ubaid Raza",
    },

    automaticDefaults: true,
    automaticOgAndTwitterTags: true,
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
      image: "https://mubaidr.js.org/mubaidr.png",
      description:
        "Senior Software Engineer and AI Systems Architect with 13+ years shipping production SaaS, AI agent orchestration systems, browser extensions, and cloud-native infrastructure. Maintainer of gem-team, an open-source multi-agent orchestration framework.",
      jobTitle: "Senior Software Engineer & AI Systems Architect",
      knowsAbout: [
        "AI agent systems",
        "LLM orchestration",
        "multi-agent systems",
        "Vue.js",
        "Nuxt",
        "React",
        "Laravel",
        "Node.js",
        "TypeScript",
        "full-stack development",
        "SaaS architecture",
        "browser extensions",
        "DevOps",
        "RAG pipelines",
      ],

      // Contact & Social, if applicable
      email: "mubaidr@gmail.com",
      url: "https://mubaidr.js.org",
      sameAs: [
        "https://twitter.com/mubaidr",
        "https://x.com/mubaidr",
        "https://github.com/mubaidr",
        "https://linkedin.com/in/mubaidr",
        "https://mubaidr.github.io/gem-team/",
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
