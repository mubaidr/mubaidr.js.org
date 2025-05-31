import { defineContentConfig, defineCollection, z } from "@nuxt/content"
import { asOgImageCollection } from 'nuxt-og-image/content'

export default defineContentConfig({
  collections: {
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
    blog: defineCollection(asOgImageCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        headline: z.string().optional(),
        abstract: z.string().optional(),
        date: z.string().datetime(),
        dateUpdated: z.string().datetime().optional(),
        author: z.string(),
        authorUrl: z.string().optional(),
        socialImage: z.object({
          src: z.string(),
          mime: z.string(),
          alt: z.string(),
          width: z.number(),
          height: z.number(),
        }).optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
    })),
    pages: defineCollection(asOgImageCollection({
      type: "page",
      source: "*.md",
    })),
    testimonials: defineCollection({
      type: "data",
      source: "testimonials/**/*.{json,yml,yaml}",
      schema: z.object({
        name: z.string(),
        quote: z.string(),
        avatar: z.string().url().optional(),
      }),
    }),
    profile: defineCollection({
      type: "data",
      source: "profile.{json,yml,yaml}",
      schema: z.object({
        name: z.string(),
        title: z.string(),
        avatar: z.string(),
        description: z.string(),
        tagline: z.string(),
        social: z.array(z.object({
          name: z.string(),
          url: z.string().url(),
        })),
        workApproach: z.array(z.string()),
        currentFocus: z.array(z.string()),
        availability: z.object({
          description: z.string(),
          cta: z.object({
            text: z.string(),
            url: z.string(),
          }),
          note: z.string(),
        }),
        technologies: z.object({
          languages: z.array(z.string()),
          frameworks: z.array(z.string()),
          frontend: z.array(z.string()),
          testing: z.array(z.string()),
          databases: z.array(z.string()),
          devops: z.array(z.string()),
          automation: z.array(z.string()),
          build: z.array(z.string()),
          other: z.array(z.string()),
        }),
        footer: z.object({
          message: z.string(),
          lastUpdated: z.string(),
        }),
      }),
    }),
  },
})
