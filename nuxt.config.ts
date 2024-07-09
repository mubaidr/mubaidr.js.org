// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  debug: true,
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/content',
    // '@nuxt/eslint',
    // '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    // '@nuxtjs/seo',
    'nuxt-resend',
    // 'nuxt-content-assets',
    '@nuxthq/studio',
  ],
  // content: {},
  // eslint: {
  //   checker: {
  //     cache: true,
  //     fix: true,
  //     lintOnStart: false,
  //   },
  // },
  // fonts: {
  //   google: {
  //     families: {
  //       Inter: [400, 700],
  //     },
  //   },
  // },
  icon: {
    collections: ['ph'],
  },
  // image: {},
  // ui: {
  //   global: true,
  // },
  // seo: {
  //   automaticDefaults: true,
  //   enabled: true,
  // },
  resend: {
    apiKey: '',
  },
  // contentAssets: {},
  studio: {
    enabled: true,
  },
  experimental: {
    typedPages: true,
    sharedPrerenderData: true,
    writeEarlyHints: true,
  },
})
