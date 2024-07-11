// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    header: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './assets/favicon.png' },
      ],
    },
  },

  colorMode: {
    preference: 'dark',
  },

  content: {
    // documentDriven: true,
    experimental: {
      cacheContents: true,
    },
  },

  // contentAssets: {},
  debug: false,

  devtools: { enabled: true },

  // eslint: {
  //   checker: {
  //     cache: true,
  //     fix: true,
  //     lintOnStart: false,
  //   },
  // },
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

  // future: {
  //   compatibilityVersion: 4,
  // },

  // icon: {},

  // image: {},
  modules: [
    '@nuxt/content',
    // '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    // '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/seo',
    // 'nuxt-resend',
    // 'nuxt-content-assets',
    '@nuxthq/studio',
  ],

  // robots: {},

  // resend: {
  //   apiKey: '',
  // },

  seo: {
    automaticDefaults: true,
    enabled: true,
    fallbackTitle: true,
  },

  site: {
    indexable: true,
    url: 'https://mubaidr.js.org',
    name: 'Muhammad Ubaid Raza',
    description:
      'Personal Website of Muhammad Ubaid Raza, Full Stack Developer',
    defaultLocale: 'en',
  },

  // sitemap: {
  //   cacheMaxAgeSeconds: 86400,
  //   credits: true,
  //   experimentalCompression: true,
  // },

  // ui: {
  //   icons: {
  //     scale: 1.5,
  //   },
  // },

  // compatibilityDate: '2024-07-11',
  studio: {
    enabled: true,
  },

  compatibilityDate: '2024-07-12',
})