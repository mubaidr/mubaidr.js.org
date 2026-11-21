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

  compatibilityDate: "2026-08-20",

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
    "nuxt-llms",
  ],

  llms: {
    domain: "https://mubaidr.js.org",
    title: "Muhammad Ubaid Raza — Senior Software Engineer & AI Systems Architect",
    description:
      "Personal portfolio, blog, and consulting site for Muhammad Ubaid Raza (mubaidr). 13+ years shipping production SaaS, AI agent systems, browser extensions, and full-stack web applications. Currently building a rental marketplace (Nuxt 4 + Laravel 12). Open-source maintainer of gem-team, an AI agent orchestration framework.",
    sections: [
      {
        title: "About",
        description:
          "Muhammad Ubaid Raza (mubaidr) is a Senior Software Engineer and AI Systems Architect with 13+ years of experience shipping production systems — SaaS platforms, AI-powered tools, browser extensions, and cloud-native infrastructure — for startups and enterprise clients. He specializes in full-stack development (Vue, Nuxt, React, Laravel, Node.js), multi-agent LLM orchestration, and scalable architecture. He works async-first, produces clean written specs, and takes end-to-end ownership from requirements through deployment. Available for freelance contracts, part-time engagements, and technical advisory work. Contact: mubaidr@gmail.com",
        links: [
          {
            title: "Homepage",
            description: "Portfolio and consulting landing page",
            href: "/",
          },
          {
            title: "Contact",
            description: "Get in touch to discuss a project",
            href: "/contact",
          },
        ],
      },
      {
        title: "Services & Expertise",
        description:
          "Full-stack development (Vue 3, Nuxt 4, React, TypeScript, Laravel, Node.js, Python). AI agent orchestration, multi-agent systems, RAG pipelines, LLM integrations. Scalable system architecture, CI/CD, containerized cloud deployments. Browser extension development. Technical leadership, code review, and team mentoring. MVP builds and project rescue.",
        links: [],
      },
      {
        title: "Open Source — gem-team",
        description:
          "gem-team is an open-source AI agent orchestration framework authored and maintained by Muhammad Ubaid Raza. It provides multi-agent workflows with structured output contracts, fast-path routing, verification boundaries, and anti-slop directives. Used across 666+ agent runs with 82.8M+ tokens processed. Available for Copilot, Claude, Cursor, Opencode, Codex, Gemini, and Windsurf.",
        links: [
          {
            title: "gem-team documentation",
            description: "Official gem-team documentation and guides",
            href: "https://mubaidr.github.io/gem-team/",
          },
          {
            title: "gem-team GitHub",
            description: "Source code and releases",
            href: "https://github.com/mubaidr/gem-team",
          },
        ],
      },
      {
        title: "Blog — AI Systems & Engineering",
        description:
          "Technical writing on AI agent systems, multi-agent orchestration, LLM engineering, full-stack architecture, Nuxt, Laravel, and production tooling. All posts written from direct production experience.",
        links: [
          {
            title: "Blog index",
            description: "All articles and insights",
            href: "/blog",
          },
          {
            title: "Production-Grade AI Agents Are Not Prompts — They Are Systems",
            description:
              "What separates toy agents from systems that work in production: orchestration layers, structured state, and verification boundaries.",
            href: "/blog/37-production-grade-ai-agents-not-prompts",
          },
          {
            title: "Multi-Agent Memory Systems: What Actually Works in Production",
            description:
              "Memory is the hardest part of AI systems — not reasoning. Structured state, controlled injection, and scoped retrieval.",
            href: "/blog/41-multi-agent-memory-systems-production",
          },
          {
            title: "DAG-Based AI Orchestration: Why Linear Agent Pipelines Break at Scale",
            description:
              "Why DAG-based orchestration beats sequential chains for real-world AI workloads.",
            href: "/blog/38-dag-ai-orchestration-pipelines-break",
          },
          {
            title: "Laravel + AI Agent Systems: Building Hybrid Backends in 2026",
            description:
              "Laravel as the orchestration backend for AI agents — queue-driven execution, API gateway, real SaaS patterns.",
            href: "/blog/42-laravel-ai-agent-hybrid-backends",
          },
          {
            title: "Gem Team v1.123: What Changed and Why It Matters",
            description:
              "Output contracts, fast path, verification boundaries, critic mode, anti-slop — the last 30 releases of gem-team.",
            href: "/blog/44-gem-team-v1.123-release",
          },
          {
            title: "Async-First Engineering in 2026",
            description:
              "Why senior engineering work is increasingly async-first: written specs, structured delivery, fewer calls.",
            href: "/blog/40-async-first-engineering-2026",
          },
          {
            title: "Execution Systems First, Not Features",
            description:
              "Designing execution flows, state, and task decomposition before features — why it produces better software.",
            href: "/blog/39-execution-systems-first-not-features",
          },
          {
            title: "How I Finally Enabled SWR on My Nuxt + Laravel App",
            description:
              "Tracing a Set-Cookie leak in Nuxt SSR that broke SWR caching — traced and fixed in two lines.",
            href: "/blog/45-nuxt-swr-set-cookie-leak",
          },
          {
            title: "Deploying Laravel + Nuxt with Dokploy",
            description:
              "Complete production setup: Docker Compose, domains, environment, DNS, HTTPS, and Traefik.",
            href: "/blog/43-dokploy-deploy-laravel-nuxt",
          },
        ],
      },
      {
        title: "Connect",
        description:
          "Available on GitHub (mubaidr), LinkedIn (/in/mubaidr), and X (@mubaidr). Email: mubaidr@gmail.com. Best approach: send a written brief about the project scope, timeline, and budget.",
        links: [
          {
            title: "GitHub",
            href: "https://github.com/mubaidr",
            description: "Open source projects and contributions",
          },
          {
            title: "LinkedIn",
            href: "https://linkedin.com/in/mubaidr",
            description: "Professional profile",
          },
        ],
      },
    ],
    notes:
      "This site is authored and maintained by Muhammad Ubaid Raza (handle: mubaidr). All blog posts represent direct production experience. The gem-team framework referenced throughout is a real open-source project actively used in production. For consulting inquiries, email mubaidr@gmail.com.",
    full: {
      title: "Muhammad Ubaid Raza — Full Portfolio & Blog Content",
      description:
        "Complete content from mubaidr.js.org — portfolio, blog posts, services, and consulting information for Muhammad Ubaid Raza, Senior Software Engineer and AI Systems Architect.",
    },
  },

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

  vite: {
    optimizeDeps: {
      // include: ["@vueuse/core"],
    },
  },
})
