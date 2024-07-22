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
    preference: 'light',
  },

  content: {
    contentHead: false,
    documentDriven: false,
    highlight: {
      theme: 'github-dark',
      preload: ['typescript', 'javascript', 'json', 'bash'],
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
          'rehype-external-links',
          {
            target: '_blank',
            rel: 'noopener noreferer',
          },
        ],
      ],
    },
  },

  debug: false,
  devtools: { enabled: true },

  experimental: {
    typedPages: true,
    viewTransition: true,
    componentIslands: true,
  },

  fonts: {
    google: {
      families: {
        Inter: [400, 700],
      },
    },
  },

  linkChecker: {
    enabled: true,
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
    'nuxt-feedme',
  ],

  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
    compressPublicAssets: true,
  },

  routeRules: {
    '/**': {
      prerender: true,
    },
  },

  seo: {
    automaticDefaults: true,
    enabled: true,
    redirectToCanonicalSiteUrl: true,
  },

  site: {
    indexable: true,
    url: 'https://mubaidr.js.org',
    name: 'Muhammad Ubaid Raza',
    description:
      'Personal Website of Muhammad Ubaid Raza, Full Stack Developer',
    defaultLocale: 'en',
  },

  sitemap: {
    enabled: true,
  },

  ssr: true,

  features: {
    noScripts: true,
  },

  robots: {
    enabled: true,
  },

  studio: {
    enabled: true,
  },

  tailwindcss: {
    configPath: './tailwind.config',
    editorSupport: true,
  },

  compatibilityDate: '2024-07-22',
})