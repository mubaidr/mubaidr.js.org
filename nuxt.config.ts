// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    header: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './assets/favicon.png' },
      ],
    },
  },

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
    preference: 'light',
  },

  content: {
    contentHead: false,
  },

  debug: false,

  devtools: { enabled: true },

  experimental: {
    typedPages: true,
    sharedPrerenderData: true,
    writeEarlyHints: true,
  },

  fonts: {
    google: {
      families: {
        'Open Sans': [400, 700],
      },
    },
  },

  icon: {
    size: '2em',
  },

  linkChecker: {
    enabled: false,
  },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@nuxthq/studio',
    '@nuxtjs/tailwindcss',
  ],

  routeRules: {
    '/': {
      static: true,
    },
  },

  seo: {
    automaticDefaults: true,
    enabled: true,
  },

  site: {
    indexable: true,
    url: 'https://mubaidr.js.org',
    name: 'Muhammad Ubaid Raza',
    description:
      'Personal Website of Muhammad Ubaid Raza, Full Stack Developer',
    defaultLocale: 'en',
  },

  studio: {
    enabled: true,
  },

  tailwindcss: {
    configPath: './tailwind.config',
    editorSupport: true,
  },

  compatibilityDate: '2024-07-12',
})
