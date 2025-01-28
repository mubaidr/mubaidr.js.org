import { defineContentConfig, defineCollection, z } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
    }),
    components: defineCollection({
      type: "page",
      source: "components/**/*.md",
    }),
    data: defineCollection({
      type: "data",
      source: "data/**/*.{json,yml}",
      schema: z.object({}),
    }),
    pages: defineCollection({
      type: "page",
      source: "pages/**/*.md",
    }),
  },
})
