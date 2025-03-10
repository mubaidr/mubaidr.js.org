// https://nuxt.com/docs/api/configuration/nuxt-config
const IS_DEV = import.meta.dev

export default defineNuxtConfig({
  css: ["./app/assets/css/main.css"],

  compatibilityDate: "2025-10-03",

  content: {
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
    renderer: {
      anchorLinks: true,
    },
  },

  debug: false,

  // delayHydration: {
  //   mode: "init",
  // },

  devtools: { enabled: IS_DEV },

  experimental: {
    typedPages: true,
    viewTransition: true,
    buildCache: true,
    asyncEntry: true,
  },

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

  // linkChecker: {
  //   enabled: true,
  // },

  modules: ["@nuxt/ui", "@nuxtjs/mdc", "@nuxt/content"],

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
    "/blog/**": {
      static: true,
    },
  },

  // seo: {
  //   automaticDefaults: true,
  //   enabled: true,
  // },

  // site: {
  //   indexable: true,
  //   url: "https://mubaidr.js.org",
  //   name: "Muhammad Ubaid Raza",
  //   description:
  //     "Personal Website and Blog by Muhammad Ubaid Raza, Full Stack Developer",
  //   defaultLocale: "en",
  // },

  // sitemap: {
  //   enabled: true,
  // },

  ssr: true,

  // robots: {
  //   enabled: true,
  // },

  typescript: {
    strict: true,
  },

  ui: {
    fonts: false
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // or "modern"
        },
      },
    },
    build: {
      cssCodeSplit: true,
    },
  },

  // webVitals: {
  //   // provider: '', // auto detectd
  //   debug: false,
  //   disabled: true,
  // },
})
