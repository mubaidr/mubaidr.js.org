<script lang="ts" setup>
// Fetch data using composables
const { data: profileData } = await useProfileData()

// SEO Meta using reactive composables
if (profileData.value) {
  useSeoMeta({
    title: "Home",
    description: profileData.value.description,
    ogTitle: profileData.value.name,
    ogDescription: profileData.value.description,
    ogImage: profileData.value.avatar,
    ogType: "profile",
    twitterCard: "summary_large_image",
    twitterTitle: profileData.value.name,
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

definePageMeta({
  layout: "home",
})
</script>

<template>
  <div>
    <UPageCard
      v-if="profileData"
      spotlight
      variant="naked"
      class="bg-linear-to-t from-primary-200 via-transparent to-transparent dark:from-primary-900"
    >
      <div
        class="max-w-3xl mx-auto space-y-16 h-dvh flex flex-col justify-center pt-32"
      >
        <div class="flex flex-col items-center text-center space-y-4">
          <!-- Label -->
          <p class="text-sm font-medium tracking-[0.2em] uppercase text-muted">
            <UIcon name="i-ph-terminal" class="w-4 h-4 inline-block mr-2" />
            {{ profileData.title }}
          </p>

          <!-- Name as Hero -->
          <h1>
            {{ profileData.name }}
          </h1>

          <!-- Tagline as Subheading with monospace code aesthetic -->
          <p v-if="profileData.heroHeadline" class="text-2xl! mt-0!">
            <UIcon
              name="i-ph-brackets-angle"
              class="w-4 h-4 inline-block mx-1 text-primary/50"
            />
            {{ profileData.heroHeadline }}
            <UIcon
              name="i-ph-brackets-angle"
              class="w-4 h-4 inline-block mx-1 text-primary/50"
            />
          </p>

          <!-- CTA Button -->
          <!-- <div class="pt-2">
            <UButton to="/contact" size="lg" variant="solid" class="px-8 group">
              Let's Work Together
              <UIcon
                name="i-ph-arrow-right"
                class="ml-2 transition-transform group-hover:translate-x-1"
              />
            </UButton>
          </div> -->

          <!-- Stats Divider -->
          <!-- <div class="flex items-center justify-center gap-3 text-neutral-500">
            <span class="w-8 h-px bg-neutral-300 dark:bg-neutral-700" />
            <span>125+ projects • 100% satisfaction</span>
            <span class="w-8 h-px bg-neutral-300 dark:bg-neutral-700" />
          </div> -->

          <!-- Social Links -->
          <div class="flex items-center justify-center gap-4">
            <UButton
              v-for="social in profileData.social"
              :key="social.name"
              :to="social.url"
              external
              :title="social.name"
              variant="link"
              :icon="social.icon"
            >
            </UButton>
          </div>
        </div>
      </div>
    </UPageCard>

    <div class="flex-1 py-16 md:py-24 lg:py-32 max-w-6xl mx-auto space-y-16">
      <About />
      <WhatIDo />
      <FeaturedProjects :hide-link="true" />
      <RecentBlogPosts />
    </div>
  </div>
</template>
