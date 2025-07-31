import { defineContentConfig, defineCollection, z } from "@nuxt/content"
import { asOgImageCollection } from "nuxt-og-image/content"

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
    blog: defineCollection(
      asOgImageCollection({
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
          socialImage: z
            .object({
              src: z.string(),
              mime: z.string(),
              alt: z.string(),
              width: z.number(),
              height: z.number(),
            })
            .optional(),
          image: z.string().optional(),
          tags: z.array(z.string()).optional(),
          featured: z.boolean().optional().default(false),
        }),
      }),
    ),
    pages: defineCollection(
      asOgImageCollection({
        type: "page",
        source: "*.md",
      }),
    ),
    testimonials: defineCollection({
      type: "data",
      source: "testimonials/**/*.{json,yml,yaml}",
      schema: z.object({
        name: z.string(),
        title: z.string(),
        company: z.string(),
        quote: z.string(),
        avatar: z.string().url().optional(),
        project: z.string(),
        results: z.array(z.string()),
        featured: z.boolean().optional().default(false),
        rating: z.number().min(0).max(5),
      }),
    }),
    faqs: defineCollection({
      type: "data",
      source: "faqs.{json,yml,yaml}", // Points to content/faqs.yml
      schema: z.object({
        list: z.array(
          z.object({
            label: z.string(),
            content: z.string(),
            // Add other fields if your FAQs have them, e.g., id, category
          }),
        ),
      }),
    }),
    professionalJourney: defineCollection({
      type: "data",
      source: "professional-journey.{json,yml,yaml}",
      schema: z.object({
        experiences: z.array(
          z.object({
            id: z.number(),
            title: z.string(),
            company: z.string(),
            location: z.string(),
            period: z.string(),
            current: z.boolean(),
            description: z.string(),
            responsibilities: z.array(z.string()),
            technologies: z.array(z.string()),
            achievements: z.array(z.string()),
          }),
        ),
        education: z.array(
          z.object({
            id: z.number(),
            degree: z.string(),
            institution: z.string(),
            location: z.string(),
            period: z.string(),
            description: z.string(),
            achievements: z.array(z.string()),
          }),
        ),
        certifications: z.array(
          z.object({
            id: z.number(),
            name: z.string(),
            issuer: z.string(),
            date: z.string(),
            credentialId: z.string(),
            description: z.string(),
          }),
        ),
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
        social: z.array(
          z.object({
            name: z.string(),
            url: z.string().url(),
            icon: z.string(),
          }),
        ),
        workApproach: z.array(z.string()),
        currentFocus: z.array(z.string()),
        clientSatisfaction: z.number().min(0).max(100),
        projectsDelivered: z.number().min(0),
        experience: z.number().min(0),
        availability: z.object({
          status: z.string(),
          statusText: z.string(),
          startDate: z.string(),
          startDateContext: z.string(),
          description: z.string(),
          responseTime: z.string(),
          slotsAvailable: z.number(),
          paymentTerms: z.string(),
          cta: z.object({
            text: z.string(),
            url: z.string(),
          }),
          note: z.string(),
        }),
        footer: z.object({
          message: z.string(),
          lastUpdated: z.string(),
        }),
      }),
    }),
    projects: defineCollection({
      type: "data",
      source: "projects.{json,yml,yaml}",
      schema: z.object({
        projects: z.array(
          z.object({
            id: z.number(),
            title: z.string(),
            description: z.string(),
            longDescription: z.string(),
            image: z.string(),
            technologies: z.array(z.string()),
            category: z.string(),
            featured: z.boolean(),
            status: z.string(),
            startDate: z.string(),
            endDate: z.string().nullable(),
            links: z.object({
              github: z.string().optional(),
              demo: z.string().optional(),
              npm: z.string().optional(),
              documentation: z.string().optional(),
              case_study: z.string().optional(),
            }),
            stats: z.record(z.union([z.string(), z.number()])).optional(),
            features: z.array(z.string()),
            challenges: z.array(z.string()),
            outcomes: z.array(z.string()),
          }),
        ),
        categories: z.array(
          z.object({
            name: z.string(),
            count: z.number(),
          }),
        ),
      }),
    }),
    services: defineCollection({
      type: "data",
      source: "services.{json,yml,yaml}",
      schema: z.object({
        services: z.array(
          z.object({
            id: z.number(),
            title: z.string(),
            description: z.string(),
            icon: z.string(),
            category: z.string(),
            featured: z.boolean(),
            features: z.array(z.string()),
            pricing: z.object({
              hourly: z.number().nullable(),
              currency: z.string(),
              description: z.string(),
            }),
            timeline: z.string(),
            suitable: z.string(),
            technologies: z.array(z.string()),
          }),
        ),
        process: z.array(
          z.object({
            step: z.number(),
            title: z.string(),
            description: z.string(),
            icon: z.string(),
            details: z.array(z.string()),
          }),
        ),
        packages: z.array(
          z.object({
            name: z.string(),
            price: z.number().nullable(),
            currency: z.string(),
            period: z.string(),
            description: z.string(),
            features: z.array(z.string()),
            highlighted: z.boolean(),
            category: z.string(),
          }),
        ),
      }),
    }),
    techStack: defineCollection({
      type: "data",
      source: "tech-stack.{json,yml,yaml}",
      schema: z.object({
        categories: z.array(
          z.object({
            title: z.string(),
            items: z.array(z.string()),
          }),
        ),
      }),
    }),
  },
})
