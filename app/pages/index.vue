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
    <section v-if="profileData" class="py-12 md:py-24">
      <div class="max-w-5xl mx-auto px-4">
        <div class="flex flex-col items-center text-center space-y-8">
          <!-- Avatar with Integrated Status -->
          <div class="relative">
            <div
              class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl">
              <NuxtImg :src="profileData.avatar" :alt="profileData.name" width="160" height="160"
                class="w-full h-full object-cover" placeholder format="webp" />
            </div>
            <!-- Status badge -->
            <div v-if="profileData.availability"
              class="absolute bottom-2 right-2 flex items-center gap-1.5 bg-white dark:bg-neutral-900 px-2.5 py-1 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-800 text-[10px] font-medium uppercase tracking-wider">
              <span class="h-2 w-2 rounded-full" :class="profileData.availability.status === 'available'
                  ? 'bg-green-500'
                  : 'bg-yellow-500'
                " />
              {{ profileData.availability.statusText || "Available" }}
            </div>
          </div>

          <div class="space-y-4 max-w-3xl">
            <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {{ profileData.name }}
            </h1>
            <p class="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400">
              {{ profileData.title }}
            </p>
            <p class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {{ profileData.tagline }}
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <UButton to="/contact" size="xl" icon="i-ph-rocket-launch" class="px-8">
              Start Your Project
            </UButton>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center gap-2">
            <UButton v-for="social in profileData.social" :key="social.name" :to="social.url" external variant="ghost"
              color="neutral" size="xl" :icon="social.icon" :title="social.name" />
          </div>
        </div>
      </div>
    </section>

    <div class="space-y-32 pb-20">
      <OpenSourceImpact />
      <AboutPreview />
      <TestimonialsPreview />
      <!-- <ServicesPreview /> -->
      <!-- <CallToAction /> -->
      <RecentBlogPosts />
    </div>
  </div>
</template>
