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
    contentHead: true,
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

  linkChecker: {
    enabled: false,
  },

  mdc: {
    components: {
      prose: true,
    },
  },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxthq/studio',
    '@nuxtjs/tailwindcss',
  ],

  nitro: {
    prerender: {
      routes: ['/public/blog/img/**'],
    },
  },

  routeRules: {
    '/': {
      prerender: true,
    },
    '/blog/**': {
      isr: true,
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
