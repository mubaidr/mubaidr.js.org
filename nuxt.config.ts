import tailwindcss from "@tailwindcss/vite"
import { definePerson } from "nuxt-schema-org/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
const IS_DEV = import.meta.dev

export default defineNuxtConfig({
  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: "",
  },

  css: ["./app/assets/css/main.css"],

  compatibilityDate: "2025-06-01",

  content: {
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        rehypePlugins: {
          "rehype-external-links": {
            target: "_blank",
            rel: "noopener noreferer",
          },
        },
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: "github-light",
            // Theme used if `html.dark`
            dark: "github-dark",
            // Theme used if `html.sepia`
            sepia: "monokai",
          },
        },
        toc: {
          depth: 2,
          searchDepth: 2,
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
    buildCache: true,
    headNext: true,
    lazyHydration: true,
    sharedPrerenderData: true,
    viewTransition: true,
  },

  eslint: {},

  future: {
    compatibilityVersion: 4,
  },

  // fonts: {},

  icon: {
    clientBundle: {
      scan: true,
    },
  },

  // image: {
  //   domains: ["mubaidr.js.org"],
  //   format: ["webp"],
  //   quality: 80,
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
    "nuxt-mcp",
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
      prerender: true,
    },
    "/blog/**": {
      static: true,
      prerender: true,
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
    strict: true,
  },

  vite: {
    plugins: [tailwindcss()],
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
