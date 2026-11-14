<script lang="ts" setup>
const site = useSiteConfig()
const { data: profileData } = await useProfileData()

if (!profileData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Profile data not found",
  })
}

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

useSchemaOrg([
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

definePageMeta({
  layout: "home",
})
</script>

<template>
  <UPage>
    <UPageHero>
      <template #headline>
        <span class="font-mono text-primary">{{ profileData!.title }}</span>
      </template>
      <template #title>
        <span class="font-mono font-medium tracking-tight">
          {{ profileData!.name }}
        </span>
      </template>
      <template #description>
        {{ profileData!.heroHeadline }}
      </template>
      <template #links>
        <div class="flex-col sapce-y-2">
          <div class="flex items-center gap-4">
            <UButton
              to="mailto:mubaidr@gmail.com"
              color="neutral"
              label="Get in touch"
            />
          </div>
        </div>
      </template>
      <template #body>
        <p>
          {{ profileData!.description }}
        </p>
      </template>
    </UPageHero>
    <UPageBody>
      <WhatIDo />
      <HowIWork />
      <!-- <FeaturedTestimonials /> -->
      <RecentBlogPosts />
    </UPageBody>
  </UPage>
</template>
