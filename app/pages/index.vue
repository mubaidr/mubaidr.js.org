<script lang="ts" setup>
// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})

// SEO Meta
if (profile.value) {
  useHead({
    title: `${profile.value.name} - ${profile.value.title}`,
    meta: [
      {
        name: "description",
        content: profile.value.description,
      },
      {
        property: "og:title",
        content: `${profile.value.name} - ${profile.value.title}`,
      },
      {
        property: "og:description",
        content: profile.value.description,
      },
      {
        property: "og:image",
        content: profile.value.avatar,
      },
      {
        property: "og:type",
        content: "profile",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: `${profile.value.name} - ${profile.value.title}`,
      },
      {
        name: "twitter:description",
        content: profile.value.description,
      },
      {
        name: "twitter:image",
        content: profile.value.avatar,
      },
    ],
  })

  // Structured data for SEO
  useSchemaOrg([
    defineWebSite({
      name: profile.value.name,
      description: profile.value.description,
      url: "https://mubaidr.js.org",
    }),
    definePerson({
      name: profile.value.name,
      jobTitle: profile.value.title,
      description: profile.value.description,
      image: profile.value.avatar,
      url: "https://mubaidr.js.org",
      sameAs: profile.value.social?.map((s) => s.url) || [],
    }),
  ])
}
</script>

<template>
  <div v-if="profile">
    <!-- Enhanced Hero Section -->
    <section class="relative text-center min-h-screen">
      <div class="max-w-5xl mx-auto">
        <!-- Avatar with Integrated Status - Redesigned -->
        <div class="flex flex-col items-center mb-8 space-y-3">
          <!-- Larger, cleaner avatar without ring -->
          <div class="w-32 h-32 md:w-40 md:h-40">
            <UAvatar
              :src="profile.avatar"
              :alt="profile.name"
              class="w-full h-full"
            />
          </div>
          <!-- Status badge on avatar - bottom right positioned -->
          <UBadge
            v-if="profile.availability"
            :color="
              profile.availability.status === 'available' ? 'green' : 'orange'
            "
            variant="soft"
          >
            {{
              profile.availability.statusText || "Available for new projects"
            }}
          </UBadge>
        </div>

        <div class="space-y-6">
          <h1>
            {{ profile.name }}
          </h1>
          <p>
            {{ profile.title }}
          </p>
          <p class="max-w-3xl mx-auto">
            {{ profile.tagline }}
          </p>
        </div>

        <!-- Key Metrics -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
        >
          <div class="text-center">
            <div class="mb-2">{{ profile?.experience || "12" }}+</div>
            <div>Years Experience</div>
          </div>
          <div class="text-center">
            <div class="mb-2">{{ profile?.projectsDelivered || "125" }}+</div>
            <div>Projects Delivered</div>
          </div>
          <div class="text-center">
            <div class="mb-2">{{ profile?.clientSatisfaction || "100" }}%</div>
            <div>Client Satisfaction</div>
          </div>
          <div class="text-center">
            <div class="mb-2">
              {{ profile?.availability?.responseTime || "8h" }}
            </div>
            <div>Response Time</div>
          </div>
        </div>

        <!-- Enhanced Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <UButton to="/contact" size="xl" variant="solid">
            <UIcon name="i-ph-rocket-launch" />
            Start Your Project Today
          </UButton>

          <UButton
            href="https://cal.com/mubaidr"
            external
            size="xl"
            variant="outline"
          >
            <UIcon name="i-ph-calendar-check" />
            Book Free Consultation
          </UButton>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-4 mt-8">
          <UButton
            v-for="social in profile.social"
            :key="social.name"
            :to="social.url"
            external
            variant="ghost"
          >
            <UIcon :name="social.icon" class="w-5 h-5" />
          </UButton>
        </div>
      </div>
    </section>

    <!-- Clear separation between hero and content sections -->
    <div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-32 py-16">
          <!-- About Preview Section -->
          <section class="relative overflow-hidden py-16">
            <!-- Background Elements Removed -->

            <div class="relative space-y-16">
              <!-- Header -->
              <div class="text-center space-y-6">
                <h2>Building Digital Solutions That Drive Results</h2>

                <p class="max-w-4xl mx-auto">
                  {{ profile.description }}
                </p>
              </div>

              <!-- Value Proposition Cards -->
              <div class="grid gap-6 lg:grid-cols-3 justify-around">
                <!-- Technical Excellence -->
                <UCard class="text-center h-full">
                  <div class="space-y-6">
                    <div
                      class="w-16 h-16 flex items-center justify-center mx-auto"
                    >
                      <UIcon name="i-ph-code" class="w-8 h-8" />
                    </div>

                    <div class="space-y-3">
                      <h3>Technical Excellence</h3>
                      <p>
                        {{ profile?.experience || "12" }}+ years of deep
                        technical expertise across full-stack development,
                        DevOps, and modern architectures.
                      </p>
                    </div>
                  </div>
                </UCard>

                <UCard class="text-center h-full">
                  <div class="space-y-6">
                    <div
                      class="w-16 h-16 flex items-center justify-center mx-auto"
                    >
                      <UIcon name="i-ph-chart-line-up" class="w-8 h-8" />
                    </div>

                    <div class="space-y-3">
                      <h3>Proven Results</h3>
                      <p>
                        {{ profile?.projectsDelivered || "125" }}+ successful
                        projects delivered with
                        {{ profile?.clientSatisfaction || "100" }}% client
                        satisfaction rate.
                      </p>
                    </div>
                  </div>
                </UCard>

                <UCard class="text-center h-full">
                  <div class="space-y-6">
                    <div
                      class="w-16 h-16 flex items-center justify-center mx-auto"
                    >
                      <UIcon name="i-ph-handshake" class="w-8 h-8" />
                    </div>

                    <div class="space-y-3">
                      <h3>True Partnership</h3>
                      <p>
                        {{ profile?.availability?.responseTime || "8h" }}
                        response time guarantee with transparent communication
                        and agile collaboration.
                      </p>
                    </div>
                  </div>
                </UCard>
              </div>

              <!-- Call to Action -->
              <div class="text-center space-y-6">
                <div class="max-w-3xl mx-auto">
                  <h3 class="mb-4">Ready to Build Something Exceptional?</h3>
                  <p class="mb-8">
                    From SaaS platforms to browser extensions, I help businesses
                    ship scalable solutions that drive growth.
                  </p>
                  <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton to="/about" variant="outline" size="lg">
                      <UIcon name="i-ph-user" class="mr-2" />
                      <span>Learn More About Me</span>
                    </UButton>
                    <UButton to="/contact" variant="solid" size="lg">
                      <UIcon name="i-ph-rocket-launch" class="mr-2" />
                      <span>Start Your Project</span>
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <TestimonialsPreview />

          <ServicesPreview />

          <!-- <CaseStudyPreview /> -->

          <!-- <NewsletterSignup /> -->

          <CallToAction />

          <!-- <RecentBlogPosts /> -->
        </div>
      </div>
    </div>
  </div>
</template>
