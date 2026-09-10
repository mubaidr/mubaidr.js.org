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
    <UPageHero
      orientation="horizontal"
      :ui="{
        root: 'relative isolate flex min-h-[calc(100svh-var(--ui-header-height))] flex-col',
        container: 'flex-1 py-16 sm:py-24 gap-12 justify-center',
      }"
    >
      <template #headline>
        <span class="font-mono text-sm text-primary">{{
          profileData!.title
        }}</span>
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
        <div class="flex-col sapce-y-6">
          <div class="flex items-center gap-4">
            <UButton
              to="mailto:mubaidr@gmail.com"
              color="primary"
              label="Get in touch"
              variant="subtle"
            />
            <UButton
              to="/blog"
              variant="link"
              color="neutral"
              label="Read the blog"
            />
          </div>
        </div>
      </template>

      <div class="w-full max-w-md space-y-4">
        <div
          v-if="profileData!.experience?.length"
          class="grid grid-cols-3 gap-3"
        >
          <div
            v-for="stat in profileData!.experience"
            :key="stat.label"
            class="text-center p-3 rounded-lg border border-muted"
          >
            <div class="text-2xl font-bold tracking-tight">
              {{ stat.value }}
            </div>
            <div class="text-xs text-muted font-mono mt-1">
              {{ stat.label }}
            </div>
          </div>
        </div>
        <UCard variant="subtle">
          {{ profileData!.description }}
        </UCard>
      </div>
    </UPageHero>
    <UPageBody>
      <WhatIDo />
      <!-- <FeaturedTestimonials /> -->
      <RecentBlogPosts />
    </UPageBody>
  </UPage>
</template>
