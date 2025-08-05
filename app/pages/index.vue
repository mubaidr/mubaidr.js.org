<script lang="ts" setup>
// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})

// Fetch professional journey data from Nuxt Content collection
const { data: professionalJourney } = await useAsyncData(
  "professional-journey",
  () => {
    return queryCollection("professionalJourney").first()
  },
)

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
  <div>
    <section v-if="profile" class="text-center">
      <div class="max-w-5xl mx-auto h-screen">
        <!-- Avatar with Integrated Status - Redesigned -->
        <div class="flex flex-col items-center mb-8 space-y-3">
          <!-- Larger, cleaner avatar without ring -->
          <div
            class="w-32 h-32 md:w-40 md:h-40 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out rounded-full"
          >
            <UAvatar
              :src="profile.avatar"
              :alt="profile.name"
              class="w-full h-full transform hover:scale-105 transition-all duration-300 ease-in-out shadow hover:shadow-lg"
            />
          </div>
          <!-- Status badge on avatar - bottom right positioned -->
          <div
            v-if="profile.availability"
            class="flex gap-2 items-center justify-center text-xs"
          >
            <div
              class="h-3 w-3 rounded-full"
              :class="{
                'bg-primary': profile.availability.status === 'available',
                'bg-yellow-500': profile.availability.status !== 'available',
                'animate-pulse': true,
              }"
            />
            <div>
              {{
                profile.availability.statusText || "Available for new projects"
              }}
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <h1>
            {{ profile.name }}
          </h1>
          <p class="text-xl">{{ profile.title }}</p>
          <p class="text-lg max-w-3xl mx-auto">
            {{ profile.tagline }}
          </p>
        </div>

        <!-- Key Metrics -->
        <div
          class="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-6 text-sm"
        >
          <div class="flex items-center gap-1">
            <span class="text-xl font-semibold">
              {{ profile?.experience || "12" }}+
            </span>
            <span>Years Experience</span>
          </div>

          <span class="hidden sm:inline">|</span>

          <div class="flex items-center gap-1">
            <span class="text-xl font-semibold">
              {{ profile?.projectsDelivered || "125" }}+
            </span>
            <span>Projects Delivered</span>
          </div>

          <span class="hidden sm:inline">|</span>

          <div class="flex items-center gap-1">
            <span class="text-xl font-semibold">
              {{ profile?.clientSatisfaction || "100" }}%
            </span>
            <span>Client Satisfaction</span>
          </div>
        </div>

        <!-- Enhanced Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <UButton to="/contact" size="xl" variant="solid">
            <UIcon name="i-ph-rocket-launch" />
            Start Your Project Today
          </UButton>

          <UButton
            href="https://cal.com/mubaidr"
            external
            size="xl"
            variant="subtle"
          >
            <UIcon name="i-ph-calendar-check" />
            Book Free Consultation
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
            size="xl"
            :title="`Visit ${social.name} Profile`"
          >
            <UIcon :name="social.icon" /> {{ social.name }}
          </UButton>
        </div>
      </div>
    </section>

    <div class="space-y-32">
      <AboutPreview />

      <!-- Technologies -->
      <section class="space-y-12">
        <div class="text-center space-y-6">
          <h2>Skills & Expertise</h2>

          <p class="max-w-3xl mx-auto">
            Comprehensive technical expertise across modern web technologies,
            frameworks, and development practices.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(skills, category) in professionalJourney?.technologies"
            :key="category"
            class="h-full"
          >
            <div />
            <UCard class="h-full">
              <div
                class="space-y-4 text-center content-center items-center justify-center"
              >
                <div
                  class="flex gap-2 mb-6 text-center content-center items-center justify-center"
                >
                  <div class="flex items-center justify-center flex-shrink-0">
                    <UIcon name="i-ph-code" class="w-6 h-6" />
                  </div>
                  <h3
                    class="capitalize text-center content-center items-center justify-center"
                  >
                    {{ category.replace(/([A-Z])/g, " $1") }}
                  </h3>
                </div>
                <div
                  class="flex flex-wrap gap-2 text-center content-center items-center justify-center"
                >
                  <UBadge
                    v-for="skill in skills"
                    :key="skill"
                    :label="skill"
                    variant="outline"
                    size="xl"
                  />
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </section>

      <TestimonialsPreview />

      <ServicesPreview />

      <CallToAction />

      <RecentBlogPosts />
    </div>
  </div>
</template>
