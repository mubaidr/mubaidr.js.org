// https://nuxt.com/docs/api/configuration/nuxt-config
const IS_DEV = import.meta.dev

console.log(IS_DEV)

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

  compatibilityDate: "2025-01-01",

  content: {
    preview: {
      dev: IS_DEV,
      api: "https://api.nuxt.studio",
      gitInfo: {
        name: "mubaidr.js.org",
        owner: "mubaidr",
        url: "https://github.com/mubaidr/mubaidr.js.org",
      },
    },
    build: {
      markdown: {
        rehypePlugins: {
          "rehype-external-links": {
            target: "_blank",
            rel: "noopener noreferer",
          },
        },
      },
    },
  },

  debug: false,

  // delayHydration: {
  //   mode: "mount",
  // },

  devtools: { enabled: IS_DEV },

  experimental: {
    typedPages: true,
    viewTransition: true,
    componentIslands: true,
    buildCache: true,
  },

  future: {
    compatibilityVersion: 4,
  },

  // fonts: {},

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
    // "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxtjs/tailwindcss",
    "nuxt-build-cache",
    // "nuxt-delay-hydration",
    // "nuxt-feedme",
    "@nuxt/content",
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

  tailwindcss: {
    configPath: "./tailwind.config",
    editorSupport: true,
  },

  typescript: {
    strict: true,
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
