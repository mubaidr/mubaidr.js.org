import { defineContentConfig, defineCollection, z } from "@nuxt/content"

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
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        // Note: title and description are auto-generated for type: 'page'
        // We can add custom fields without redefining them
        excerpt: z.string().optional(),
        headline: z.string().optional(),
        abstract: z.string().optional(),
        // Use z.date() for proper date parsing as per Nuxt Content docs
        date: z.date(),
        dateUpdated: z.date().optional(),
        author: z.string(),
        authorUrl: z.string().optional(),
        // Preferred: socialImage provides richer data (src, alt, dimensions)
        socialImage: z
          .object({
            src: z.string(),
            mime: z.string(),
            alt: z.string(),
            width: z.number(),
            height: z.number(),
          })
          .optional(),
        // Fallback: simple string URL (legacy support)
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().optional().default(false),
        // Series fields for content organization
        series: z.string().optional(),
        seriesOrder: z.number().optional(),
        seriesDescription: z.string().optional(),
        // OG Image fields
        ogImage: z
          .object({
            component: z.string().optional(),
            disableInjection: z.boolean().optional(),
            route: z.string().optional(),
            alt: z.string().optional(),
            fonts: z.array(z.string()).optional(),
            html: z.string().optional(),
            screenshots: z
              .array(
                z.object({
                  name: z.string(),
                  width: z.number(),
                  height: z.number(),
                }),
              )
              .optional(),
          })
          .optional(),
      }),
    }),
    pages: defineCollection({
      type: "page",
      source: "*.md",
      schema: z.object({
        ogImage: z
          .object({
            component: z.string().optional(),
            disableInjection: z.boolean().optional(),
            route: z.string().optional(),
            alt: z.string().optional(),
            fonts: z.array(z.string()).optional(),
            html: z.string().optional(),
            screenshots: z
              .array(
                z.object({
                  name: z.string(),
                  width: z.number(),
                  height: z.number(),
                }),
              )
              .optional(),
          })
          .optional(),
      }),
    }),
    testimonials: defineCollection({
      type: "data",
      source: "testimonials/**/*.{json,yml,yaml}",
      schema: z.object({
        id: z.union([z.string(), z.number()]),
        name: z.string(),
        title: z.string(),
        company: z.string(),
        quote: z.string(),
        avatar: z.string().url().optional(),
        project: z.string(),
        results: z.array(z.string()),
        featured: z.boolean().optional().default(false),
        rating: z.number().min(0).max(5),
        projectId: z.number().optional(),
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
    profile: defineCollection({
      type: "data",
      source: "profile.{json,yml,yaml}",
      schema: z.object({
        name: z.string(),
        title: z.string(),
        avatar: z.string(),
        description: z.string(),
        heroHeadline: z.string().optional(),
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
          timezone: z.string(),
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
        whoIWorkWith: z
          .array(
            z.object({
              name: z.string(),
              icon: z.string(),
              description: z.string(),
            }),
          )
          .optional(),
        whatIDo: z.array(z.string()),
        pricingRanges: z
          .object({
            mvp: z.object({
              min: z.number(),
              max: z.number(),
              currency: z.string(),
              description: z.string(),
            }),
            architectureAudit: z.object({
              min: z.number(),
              max: z.number(),
              currency: z.string(),
              description: z.string(),
            }),
            hourly: z.object({
              min: z.number(),
              max: z.number(),
              currency: z.string(),
              description: z.string(),
            }),
          })
          .optional(),
      }),
    }),
    projects: defineCollection({
      type: "data",
      source: "projects.{json,yml,yaml}",
      schema: z.object({
        projects: z.array(
          z.object({
            id: z.number(),
            rank: z.number().optional().default(999),
            title: z.string(),
            description: z.string(),
            longDescription: z.string(),
            image: z.string().optional(),
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
            stats: z.record(z.string()).optional(),
            features: z.array(z.string()),
            challenges: z.array(z.string()),
            outcomes: z.array(z.string()),
            // Senior-level fields
            type: z.string().optional(),
            myRole: z.string().optional(),
            teamSize: z.number().optional(),
            client: z
              .object({
                name: z.string(),
                industry: z.string().optional(),
              })
              .optional(),
            businessImpact: z.record(z.string()).optional(),
            testimonials: z.array(z.number()).optional(),
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
  },
})
