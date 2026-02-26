<script lang="ts" setup>
// Fetch data using composables
const { data: profileData } = await useProfileData()
// const { data: professionalJourneyData } = await useProfessionalJourneyData()

// SEO Meta using reactive composables
if (profileData.value) {
  useSeoMeta({
    title: `${profileData.value.name} - ${profileData.value.title}`,
    description: profileData.value.description,
    ogTitle: `${profileData.value.name} - ${profileData.value.title}`,
    ogDescription: profileData.value.description,
    ogImage: profileData.value.avatar,
    ogType: "profile",
    twitterCard: "summary_large_image",
    twitterTitle: `${profileData.value.name} - ${profileData.value.title}`,
    twitterDescription: profileData.value.description,
    twitterImage: profileData.value.avatar,
  })

  // Structured data for SEO
  useSchemaOrg([
    defineWebSite({
      name: profileData.value.name,
      description: profileData.value.description,
      url: "https://mubaidr.js.org",
    }),
    definePerson({
      name: profileData.value.name,
      jobTitle: profileData.value.title,
      description: profileData.value.description,
      image: profileData.value.avatar,
      url: "https://mubaidr.js.org",
      sameAs: profileData.value.social?.map((s) => s.url) || [],
    }),
  ])
}
</script>

<template>
  <div>
    <section v-if="profileData" class="md:py-32">
      <div class="max-w-4xl mx-auto px-4 space-y-8">
        <div class="flex flex-col items-center text-center space-y-4">
          <!-- Name as Hero -->
          <h1>
            {{ profileData.name }}
          </h1>

          <!-- Tagline as Subheading -->
          <p v-if="profileData.heroHeadline" class="text-3xl">
            {{ profileData.heroHeadline }}
          </p>

          <!-- Social Links (Subtle) -->
          <div class="flex gap-4 items-center justify-center">
            <ULink v-for="social in profileData.social" :key="social.name" :to="social.url" external
              :title="social.name" class="hover:text-primary dark:hover:text-primary transition-colors">
              <UIcon :name="social.icon" size="1.5em" />
            </ULink>
          </div>
        </div>

        <div class="flex flex-col items-center text-center space-y-4">
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <UButton to="/contact" size="xl" icon="i-ph-paper-plane-tilt"
              class="px-6 transition-all duration-300 shadow hover:shadow-md hover:-translate-y-0.5 active:translate-0 active:shadow">
              Let's Talk
            </UButton>
            <!-- <UButton to="/projects" variant="outline" size="lg" icon="i-ph-folder-open">
              View Projects
            </UButton> -->
          </div>

          <!-- Availability Info -->
          <AvailabilityInfo />
        </div>

        <!-- Results-Focused Headline -->
        <div class="flex justify-center w-full py-12">
          <UAlert color="secondary" variant="soft" size="xl" class="text-center w-auto inline-flex text-xl"
            icon="i-ph-check-circle" :title="profileData.tagline">
            {{ profileData.tagline }}
          </UAlert>
        </div>
      </div>
    </section>

    <div class="space-y-24 pb-16">
      <CompactCaseStudies />
      <!-- <WhoIWorkWith /> -->
      <TestimonialsPreview />
      <CallToAction />
      <RecentBlogPosts />
    </div>
  </div>
</template>
