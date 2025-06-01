<script lang="ts" setup>
// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})

// SEO Meta
if (profile.value) {
  useHead({
    title: `${profile.value.name} - ${profile.value.title}`,
    meta: [
      {
        name: "description",
        content: profile.value.description,
      },
      {
        property: "og:title",
        content: `${profile.value.name} - ${profile.value.title}`,
      },
      {
        property: "og:description",
        content: profile.value.description,
      },
      {
        property: "og:image",
        content: profile.value.avatar,
      },
      {
        property: "og:type",
        content: "profile",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: `${profile.value.name} - ${profile.value.title}`,
      },
      {
        name: "twitter:description",
        content: profile.value.description,
      },
      {
        name: "twitter:image",
        content: profile.value.avatar,
      },
    ],
  })

  // Structured data for SEO
  useSchemaOrg([
    defineWebSite({
      name: profile.value.name,
      description: profile.value.description,
      url: "https://mubaidr.js.org",
    }),
    definePerson({
      name: profile.value.name,
      jobTitle: profile.value.title,
      description: profile.value.description,
      image: profile.value.avatar,
      url: "https://mubaidr.js.org",
      sameAs: profile.value.social?.map((s) => s.url) || [],
    }),
  ])
}
</script>

<template>
  <div v-if="profile">
    <!-- Hero Section -->
    <section class="relative text-center min-h-screen">
      <div class="max-w-5xl mx-auto">
        <div class="flex justify-center mb-8">
          <UAvatar
            :src="profile.avatar"
            :alt="profile.name"
            size="3xl"
            class="ring-2 ring-zinc-200/50 dark:ring-zinc-700/50"
          />
        </div>

        <div class="space-y-6">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
            {{ profile.name }}
          </h1>
          <p class="text-xl md:text-2xl text-primary font-medium">
            {{ profile.title }}
          </p>
          <p
            class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {{ profile.tagline }}
          </p>
        </div>

        <!-- Availability Status -->
        <div class="flex justify-center mt-8">
          <div
            class="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full"
          >
            <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span class="text-primary text-sm font-medium"
              >Available for new projects</span
            >
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <UButton to="/contact" size="lg" variant="solid">
            <UIcon name="i-ph-envelope" />
            Get In Touch
          </UButton>

          <UButton to="/projects" size="lg" variant="outline">
            <UIcon name="i-ph-folder-open" />
            View My Work
          </UButton>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-4 mt-8">
          <UButton
            v-for="social in profile.social"
            :key="social.name"
            :to="social.url"
            external
            variant="ghost"
            size="sm"
          >
            <UIcon
              :name="
                social.name === 'GitHub'
                  ? 'i-ph-github-logo'
                  : 'i-ph-linkedin-logo'
              "
              class="w-5 h-5"
            />
            {{ social.name }}
          </UButton>
        </div>
      </div>
    </section>

    <div class="space-y-24">
      <!-- About Preview -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ profile.description }}
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <!-- Work Approach -->
          <UCard variant="soft" class="h-full">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <UIcon name="i-ph-strategy" class="w-6 h-6 text-primary" />
                <h3 class="text-xl font-semibold">My Work Approach</h3>
              </div>
              <ul class="space-y-2">
                <li
                  v-for="(approach, index) in (
                    profile.workApproach || []
                  ).slice(0, 3)"
                  :key="index"
                  class="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                >
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  />
                  <span class="text-sm">{{ approach }}</span>
                </li>
              </ul>
              <UButton to="/about" variant="ghost" size="sm" class="mt-4">
                Learn More About Me
                <UIcon name="i-ph-arrow-right" />
              </UButton>
            </div>
          </UCard>

          <!-- Current Focus -->
          <UCard variant="soft" class="h-full">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <UIcon name="i-ph-target" class="w-6 h-6 text-primary" />
                <h3 class="text-xl font-semibold">Current Focus</h3>
              </div>
              <ul class="space-y-2">
                <li
                  v-for="(focus, index) in (profile.currentFocus || []).slice(
                    0,
                    3,
                  )"
                  :key="index"
                  class="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                >
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  />
                  <span class="text-sm">{{ focus }}</span>
                </li>
              </ul>
              <UButton to="/about" variant="ghost" size="sm" class="mt-4">
                View Professional Journey
                <UIcon name="i-ph-arrow-right" />
              </UButton>
            </div>
          </UCard>
        </div>

        <div class="text-center">
          <UButton to="/about" variant="outline" size="lg">
            <UIcon name="i-ph-info" />
            View All Details
          </UButton>
        </div>
      </section>

      <TestimonialsPreview />

      <FeaturedProjects />

      <RecentBlogPosts />

      <CallToAction />
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
