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
  <div>
    <div class="space-y-32">
      <!-- Enhanced Hero Section -->
      <section class="text-center min-h-screen" v-if="profile">
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
                profile.availability.status === 'available'
                  ? 'success'
                  : 'warning'
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
            class="grid grid-cols-3 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
          >
            <UCard variant="subtle" class="text-center">
              <div class="mb-2">{{ profile?.experience || "12" }}+</div>
              <div>Years Experience</div>
            </UCard>
            <UCard variant="subtle" class="text-center">
              <div class="mb-2">{{ profile?.projectsDelivered || "125" }}+</div>
              <div>Projects Delivered</div>
            </UCard>
            <UCard variant="subtle" class="text-center">
              <div class="mb-2">
                {{ profile?.clientSatisfaction || "100" }}%
              </div>
              <div>Client Satisfaction</div>
            </UCard>
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

      <AboutPreview />

      <TestimonialsPreview />

      <ServicesPreview />

      <CallToAction />

      <RecentBlogPosts />
    </div>
  </div>
</template>
