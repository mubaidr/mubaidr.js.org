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
  <UPage>
    <UPageHero
      v-if="profileData"
      class="py-32 md:py-48"
      orientation="horizontal"
    >
      <LazyStarsBg />
      <template #headline>{{ profileData.title }}</template>
      <template #title>
        {{ profileData.name }}
      </template>
      <template #description>
        {{ profileData.heroHeadline }}
      </template>
      <template #links>
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
      </template>

      <div class="inline-block perspective-container">
        <UCard variant="outline" class="border border-primary/25 tilt">
          {{ profileData.description }}
        </UCard>
      </div>
    </UPageHero>
    <UPageBody>
      <WhatIDo />
      <!-- <FeaturedProjects :hide-link="true" /> -->
      <FeaturedTestimonials />
      <RecentBlogPosts />
    </UPageBody>
  </UPage>
</template>

<style>
.perspective-container {
  perspective: none;
}

.tilt {
  transform: none;
  transition: none;
  box-shadow:
    rgba(0, 0, 0, 0.024) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.05) 0px 1px 0px 0px,
    rgba(0, 0, 0, 0.03) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.1) 0px 10px 15px 0px;
}

@media (min-width: 768px) {
  .perspective-container {
    perspective: 1000px;
  }

  .tilt {
    transform: perspective(900px) rotateY(-7deg);
  }
}
</style>
