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
    <!-- Subtle gradient background -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute inset-0 bg-linear-to-b from-primary-50/50 via-transparent to-transparent dark:from-primary-950/20" />
    </div>

    <section v-if="profileData" class="min-h-[90vh] flex items-center justify-center py-16 md:py-24">
      <div class="max-w-3xl mx-auto px-4 space-y-8">
        <div class="flex flex-col items-center text-center space-y-6">
          <!-- Label -->
          <p class="fade-in-up stagger-1 text-sm font-medium tracking-[0.2em] uppercase text-primary">
            {{ profileData.title }}
          </p>

          <!-- Name as Hero -->
          <h1 class="fade-in-up stagger-2 font-display text-5xl md:text-7xl font-semibold tracking-tight">
            {{ profileData.name }}
          </h1>

          <!-- Tagline as Subheading -->
          <p v-if="profileData.heroHeadline"
            class="fade-in-up stagger-3 text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
            {{ profileData.heroHeadline }}
          </p>

          <!-- CTA Button -->
          <div class="fade-in-up stagger-4 pt-2">
            <UButton to="/contact" size="lg" class="px-8 group">
              Let's Work Together
              <UIcon name="i-ph-arrow-right" class="ml-2 transition-transform group-hover:translate-x-1" />
            </UButton>
          </div>

          <!-- Stats Divider -->
          <div class="fade-in-up stagger-5 flex items-center justify-center gap-3 text-sm text-neutral-500">
            <span class="w-8 h-px bg-neutral-300 dark:bg-neutral-700" />
            <span>125+ projects • 100% satisfaction</span>
            <span class="w-8 h-px bg-neutral-300 dark:bg-neutral-700" />
          </div>

          <!-- Social Links -->
          <div class="fade-in-up stagger-6 flex items-center justify-center gap-4">
            <ULink v-for="social in profileData.social" :key="social.name" :to="social.url" external
              :title="social.name"
              class="p-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-950/30 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-all">
              <UIcon :name="social.icon" size="1.25rem" />
            </ULink>
          </div>
        </div>

        <!-- Availability Info -->
        <div class="flex justify-center fade-in-up stagger-6">
          <AvailabilityInfo />
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
