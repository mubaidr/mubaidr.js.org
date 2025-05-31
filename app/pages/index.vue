<script lang="ts" setup>
// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})

// Fetch testimonials from collection
const { data: testimonials } = await useAsyncData("testimonials", () => {
  return queryCollection("testimonials").all()
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

// Animation helpers
const isVisible = ref(false)
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

// Icon mapping function
function getIconForCategory(category: string): string {
  const iconMap: Record<string, string> = {
    languages: "i-ph-code",
    frameworks: "i-ph-stack",
    frontend: "i-ph-browser",
    testing: "i-ph-test-tube",
    databases: "i-ph-database",
    devops: "i-ph-cloud",
    automation: "i-ph-robot",
    build: "i-ph-gear",
    other: "i-ph-plus-circle",
  }
  return iconMap[category] || "i-ph-code"
}
</script>

<template>
  <div v-if="profile" class="-mt-32 md:-mt-42">
    <div class="space-y-32">
      <!-- Hero Section -->
      <section
        class="flex flex-col items-center align-top justify-center min-h-screen mx-auto max-w-3xl text-center space-y-8"
      >
        <div class="flex justify-center mb-8">
          <UAvatar
            :src="profile.avatar"
            :alt="profile.name"
            size="3xl"
            class="ring-4 ring-primary-500/20"
          />
        </div>

        <div class="space-y-4">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
            {{ profile.name }}
          </h1>
          <p
            class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
          >
            {{ profile.title }}
          </p>
          <p
            class="text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-5xl mx-auto leading-relaxed"
          >
            {{ profile.tagline }}
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-6 pt-8">
          <UButton
            v-for="social in profile.social"
            :key="social.name"
            :to="social.url"
            external
            target="_blank"
            variant="soft"
          >
            <UIcon
              :name="
                social.name === 'GitHub'
                  ? 'i-ph-github-logo'
                  : 'i-ph-linkedin-logo'
              "
              class="w-6 h-6"
            />
            {{ social.name }}
          </UButton>
        </div>

        <!-- CTA -->
        <!-- <div class="pt-8">
        <UButton
          :to="profile.availability.cta.url"
          class="px-8 py-4 text-lg font-semibold transition-all"
          variant="subtle"
        >
          {{ profile.availability.cta.text }}
          <UIcon name="i-ph-arrow-right" class="w-5 h-5 ml-2" />
        </UButton>
      </div> -->
      </section>

      <!-- About Section -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-5xl mx-auto">
            {{ profile.description }}
          </p>
        </div>

        <!-- Work Approach -->
        <UCard variant="soft">
          <template #header>
            <h3 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-strategy" class="w-6 h-6 text-primary-500" />
              My Work Approach
            </h3>
          </template>

          <div class="grid gap-6 md:grid-cols-3">
            <div
              v-for="(approach, index) in profile.workApproach"
              :key="index"
              class="flex items-start gap-3"
            >
              <UIcon
                name="i-ph-check-circle"
                class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
              />
              <p class="text-gray-700 dark:text-gray-300">{{ approach }}</p>
            </div>
          </div>
        </UCard>

        <!-- Current Focus -->
        <UCard variant="soft">
          <template #header>
            <h3 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-target" class="w-6 h-6 text-primary-500" />
              Current Focus
            </h3>
          </template>

          <div class="grid gap-6 md:grid-cols-3">
            <div
              v-for="(focus, index) in profile.currentFocus"
              :key="index"
              class="flex items-start gap-3"
            >
              <UIcon
                name="i-ph-check-circle"
                class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
              />
              <p class="text-gray-700 dark:text-gray-300">{{ focus }}</p>
            </div>
          </div>
        </UCard>
      </section>

      <!-- Technologies Section -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Technologies & Tools
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Technologies I work with to build exceptional digital experiences
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="(techs, category) in profile.technologies"
            :key="category"
            class="h-full"
            variant="soft"
          >
            <template #header>
              <h3
                class="text-xl font-semibold capitalize flex items-center gap-2"
              >
                <UIcon
                  :name="getIconForCategory(String(category))"
                  class="w-5 h-5 text-primary-500"
                />
                {{
                  String(category)
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                }}
              </h3>
            </template>

            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tech in techs"
                :key="tech"
                variant="outline"
                size="sm"
                class="text-xs"
              >
                {{ tech }}
              </UBadge>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section v-if="testimonials && testimonials.length > 0" class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            What clients say about working with me
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <UCard
            v-for="testimonial in testimonials.slice(0, 6)"
            :key="testimonial.name"
            class="h-full"
            variant="soft"
          >
            <div class="flex flex-col h-full">
              <div class="flex items-center gap-3 mb-4">
                <UAvatar
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  size="sm"
                />
                <div>
                  <h4 class="font-semibold">{{ testimonial.name }}</h4>
                </div>
              </div>

              <blockquote
                class="text-gray-700 dark:text-gray-300 italic flex-grow"
              >
                "{{ testimonial.quote }}"
              </blockquote>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Availability Section -->
      <section class="text-center space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center">
          Let's Work Together
        </h2>
        <p class="text-lg text-gray-700 dark:text-gray-300">
          {{ profile.availability.description }}
        </p>

        <UButton :to="profile.availability.cta.url" size="xl" variant="subtle">
          {{ profile.availability.cta.text }}
          <UIcon name="i-ph-envelope" />
        </UButton>

        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ profile.availability.note }}
        </p>
      </section>

      <!-- Footer Message -->
      <!-- <section
        class="text-center py-12 border-t border-gray-200 dark:border-gray-800"
      >
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-2">
          {{ profile.footer.message }}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {{ profile.footer.lastUpdated }}
        </p>
      </section> -->
    </div>
  </div>
</template>
