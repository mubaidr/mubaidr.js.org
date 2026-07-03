<script lang="ts" setup>
// Fetch data using composables
const { data: profileData } = await useProfileData()
const { data: testimonialsData } = await useTestimonialsData()

// SEO Meta using reactive composables
if (profileData.value) {
  useSeoMeta({
    title: "Home",
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
    defineAggregateRating({
      ratingValue: 5.0,
      bestRating: 5,
      worstRating: 1,
      ratingCount: testimonialsData.value?.length || 0,
      reviewCount: testimonialsData.value?.length || 0,
      itemReviewed: definePerson({
        name: profileData.value.name,
        url: "https://mubaidr.js.org",
      }),
    }),
  ])
}
</script>

<template>
  <div>
    <!-- Subtle gradient background -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute inset-0 bg-linear-to-b from-primary-50/20 via-transparent to-transparent dark:from-primary-950/20"
      />
    </div>

    <section
      v-if="profileData"
      class="min-h-[64vh] flex items-center justify-center py-32 md:py-48"
    >
      <div class="max-w-3xl mx-auto px-4 space-y-12">
        <div class="flex flex-col items-center text-center space-y-6">
          <!-- Label -->
          <!-- <p
            class=" text-sm font-medium tracking-[0.2em] uppercase"
          >
            <UIcon name="i-ph-terminal" class="w-4 h-4 inline-block mr-2" />
            {{ profileData.title }}
          </p> -->

          <!-- Name as Hero -->
          <h1>
            {{ profileData.name }}
          </h1>

          <!-- Tagline as Subheading with monospace code aesthetic -->
          <p v-if="profileData.heroHeadline" class="text-2xl! mt-0!">
            <UIcon
              name="i-ph-brackets-angle"
              class="w-4 h-4 inline-block mx-1 text-primary-500/60"
            />
            {{ profileData.heroHeadline }}
            <UIcon
              name="i-ph-brackets-angle"
              class="w-4 h-4 inline-block mx-1 text-primary-500/60"
            />
          </p>

          <!-- CTA Button -->
          <div class="pt-2">
            <UButton to="/contact" size="lg" class="px-8 group">
              Let's Work Together
              <UIcon
                name="i-ph-arrow-right"
                class="ml-2 transition-transform group-hover:translate-x-1"
              />
            </UButton>
          </div>

          <!-- Stats Divider -->
          <div class="flex items-center justify-center gap-3 text-neutral-500">
            <span class="w-8 h-px bg-neutral-300 dark:bg-neutral-700" />
            <span>125+ projects • 100% satisfaction</span>
            <span class="w-8 h-px bg-neutral-300 dark:bg-neutral-700" />
          </div>

          <!-- Social Links -->
          <div class="flex items-center justify-center gap-4">
            <ULink
              v-for="social in profileData.social"
              :key="social.name"
              :to="social.url"
              external
              :title="social.name"
              class="p-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:text-primary transition-all"
            >
              <UIcon :name="social.icon" size="1.25rem" />
            </ULink>
          </div>
        </div>

        <!-- Availability Info -->
        <div class="flex justify-center">
          <AvailabilityInfo />
        </div>
      </div>
    </section>

    <div class="space-y-24 pb-16">
      <CompactCaseStudies />
      <WhoIWorkWith />
      <TestimonialsPreview />
      <CallToAction />
      <RecentBlogPosts />
    </div>
  </div>
</template>
