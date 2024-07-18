// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    header: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'HCL7-zzyR002AD-QxBUEhq9uwSKx2KWCsamU0ANbBW8',
        },
      ],
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
    documentDriven: true,
    highlight: {
      theme: 'github-dark',
      preload: ['typescript', 'javascript', 'json', 'bash'],
    },
    experimental: {
      cacheContents: true,
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
  ],

  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      failOnError: false,
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

  sourcemap: true,

  studio: {
    enabled: true,
  },

  tailwindcss: {
    configPath: './tailwind.config',
    editorSupport: true,
  },

  compatibilityDate: '2024-07-12',
})
