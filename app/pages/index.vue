<script lang="ts" setup>
// Fetch data using composables
const site = useSiteConfig()
const { data: profileData } = await useProfileData()

// SEO Meta using reactive composables
if (profileData.value) {
  // Trim description to ~155 chars for optimal SERP display
  const shortDescription =
    profileData.value.description.length > 155
      ? profileData.value.description.slice(0, 152) + "..."
      : profileData.value.description

  useSeoMeta({
    title: "Home",
    description: shortDescription,
    ogTitle: profileData.value.name,
    ogDescription: shortDescription,
    ogImage: profileData.value.avatar,
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: profileData.value.name,
    twitterDescription: shortDescription,
    twitterImage: profileData.value.avatar,
  })

  useHead({
    link: [{ rel: "canonical", href: site.url }],
  })

  // Structured data for SEO
  useSchemaOrg([
    defineWebSite({
      name: profileData.value.name,
      description: shortDescription,
      url: site.url,
    }),
    definePerson({
      name: profileData.value.name,
      jobTitle: profileData.value.title,
      description: profileData.value.description,
      image: profileData.value.avatar,
      url: site.url,
      sameAs: profileData.value.social?.map((s) => s.url) || [],
    }),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: site.url,
        },
      ],
    },
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
      class="py-24 md:py-48"
      orientation="horizontal"
    >
      <LazyStarsBg />
      <template #headline
        ><span class="tracking-tighter">{{ profileData.title }}</span></template
      >
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

      <div class="inline-block">
        <UCard variant="outline">
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
