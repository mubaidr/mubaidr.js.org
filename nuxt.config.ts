// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    header: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './assets/favicon.png' },
      ],
    },
  },

  // compatibilityDate: '2024-04-03',
  colorMode: {
    preference: 'dark',
  },

  content: {
    documentDriven: true,
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

  // fonts: {
  //   google: {
  //     families: {
  //       Inter: [400, 700],
  //     },
  //   },
  // },
  future: {
    compatibilityVersion: 4,
  },

  // icon: {},

  // image: {},
  modules: [
    '@nuxt/content',
    // '@nuxt/eslint',
    // '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/seo',
    'nuxt-resend',
    // 'nuxt-content-assets',
    '@nuxthq/studio',
  ],

  resend: {
    apiKey: '',
  },

  seo: {
    automaticDefaults: true,
    enabled: true,
    fallbackTitle: true,
  },

  site: {
    indexable: true,
  },

  sitemap: {
    cacheMaxAgeSeconds: 86400,
    credits: true,
    experimentalCompression: true,
  },

  // ui: {
  //   icons: {
  //     scale: 1.5,
  //   },
  // },

  studio: {
    enabled: true,
  },

  compatibilityDate: '2024-07-09',
})
