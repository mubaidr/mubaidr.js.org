import { defineContentConfig, defineCollection, z } from "@nuxt/content"
import { asOgImageCollection } from 'nuxt-og-image/content'

export default defineContentConfig({
  collections: {
    components: defineCollection({
      type: "page",
      source: "components/**/*.md",
    }),
    pages: defineCollection(asOgImageCollection({
      type: "page",
      source: "*.md",
    })),
    blog: defineCollection(asOgImageCollection({
      type: "page",
      source: "blog/*.md",
    })),
    authors: defineCollection({
      type: "data",
      source: "authors/**/*.{json,yml,yaml}",
      schema: z.object({
        "@context": z.string(), // expected: "https://schema.org/author"
        "@id": z.string().url(),
        "@type": z.string(), // expected: "Person"
        alternateName: z.string().optional(),
        gender: z.string(),
        image: z.string().url(),
        jobTitle: z.string(),
        name: z.string(),
        nationality: z.string(),
        sameAs: z.array(z.string().url()).optional(),
        url: z.string().url(),
      }),
    }),
    testimonials: defineCollection({
      type: "data",
      source: "testimonials/**/*.{json,yml,yaml}",
      schema: z.object({
        name: z.string(),
        quote: z.string(),
        avatar: z.string().url().optional(),
      }),
    }),
  },
})
