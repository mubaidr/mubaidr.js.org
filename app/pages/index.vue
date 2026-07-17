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
    <UPageHero v-if="profileData" class="pt-24 md:pt-48">
      <LazyStarsBg />
      <template #title>
        {{ profileData.name }}
      </template>
      <template #description>
        <div>
          <p>
            {{ profileData.title }}
          </p>
          <p>
            {{ profileData.heroHeadline }}
          </p>
        </div>
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
    </UPageHero>
    <UPageBody>
      <About />
      <WhatIDo />
      <!-- <FeaturedProjects :hide-link="true" /> -->
      <RecentBlogPosts />
    </UPageBody>
  </UPage>
</template>
