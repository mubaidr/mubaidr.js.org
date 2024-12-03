// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  booster: {
    detection: {
      performance: true,
      browserSupport: true,
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 },
      },
      timing: {
        fcp: 800,
        dcl: 1200,
      },
    },
  },

  colorMode: {
    preference: "system",
    fallback: "light",
  },

  compatibilityDate: "2024-12-01",

  content: {
    contentHead: false,
    documentDriven: false,
    highlight: {
      theme: "github-dark",
      // preload: ["typescript", "javascript", "json", "bash"],
    },
    experimental: {
      clientDB: true,
    },
    markdown: {
      mdc: true,
      toc: {
        depth: 3,
      },
      rehypePlugins: [
        [
          "rehype-external-links",
          {
            target: "_blank",
            rel: "noopener noreferer",
          },
        ],
      ],
    },
  },

  debug: false,

  delayHydration: {
    mode: "mount",
  },

  devtools: { enabled: true },

  experimental: {
    typedPages: true,
    viewTransition: true,
    componentIslands: true,
  },

  future: {
    compatibilityVersion: 4,
  },

  fonts: {},

  image: {
    domains: ["mubaidr.js.org"],
    format: ["webp"],
    quality: 80,
  },

  linkChecker: {
    enabled: true,
  },

  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxthq/studio",
    "@nuxtjs/tailwindcss",
    "nuxt-build-cache",
    "nuxt-delay-hydration",
    "nuxt-feedme",
  ],

  nitro: {
    preset: "github-pages",
    prerender: {
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: true,
    },
    compressPublicAssets: true,
  },

  routeRules: {
    "/**": {
      prerender: true,
    },
    "/_ipx/**": {
      prerender: true,
    },
    // '/blog/**': {
    //   prerender: true,
    // },
  },

  seo: {
    automaticDefaults: true,
    enabled: true,
    // redirectToCanonicalSiteUrl: true,
  },

  site: {
    indexable: true,
    url: "https://mubaidr.js.org",
    name: "Muhammad Ubaid Raza",
    description:
      "Personal Website and Blog by Muhammad Ubaid Raza, Full Stack Developer",
    defaultLocale: "en",
  },

  sitemap: {
    enabled: true,
  },

  ssr: true,

  robots: {
    enabled: true,
  },

  studio: {
    enabled: true,
    gitInfo: {
      name: "mubaidr.js.org",
      owner: "mubaidr",
      url: "https://github.com/mubaidr/mubaidr.js.org",
    },
  },

  tailwindcss: {
    configPath: "./tailwind.config",
    editorSupport: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // or "modern"
        },
      },
    },
  },
})
