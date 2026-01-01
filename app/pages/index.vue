<script lang="ts" setup>
// Fetch data using composables
const { data: profileData } = await useProfileData()
const { data: professionalJourneyData } = await useProfessionalJourneyData()

// SEO Meta
if (profileData.value) {
  useHead({
    title: `${profileData.value.name} - ${profileData.value.title}`,
    meta: [
      {
        name: "description",
        content: profileData.value.description,
      },
      {
        property: "og:title",
        content: `${profileData.value.name} - ${profileData.value.title}`,
      },
      {
        property: "og:description",
        content: profileData.value.description,
      },
      {
        property: "og:image",
        content: profileData.value.avatar,
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
        content: `${profileData.value.name} - ${profileData.value.title}`,
      },
      {
        name: "twitter:description",
        content: profileData.value.description,
      },
      {
        name: "twitter:image",
        content: profileData.value.avatar,
      },
    ],
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
    <section v-if="profileData" class="py-12 md:py-20">
      <div class="max-w-5xl mx-auto px-4">
        <div class="flex flex-col items-center text-center space-y-8">
          <!-- Avatar with Integrated Status -->
          <div class="relative">
            <div
              class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl"
            >
              <NuxtImg
                :src="profileData.avatar"
                :alt="profileData.name"
                width="160"
                height="160"
                class="w-full h-full object-cover"
                placeholder
                format="webp"
              />
            </div>
            <!-- Status badge -->
            <div
              v-if="profileData.availability"
              class="absolute bottom-2 right-2 flex items-center gap-1.5 bg-white dark:bg-neutral-900 px-2.5 py-1 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-800 text-[10px] font-medium uppercase tracking-wider"
            >
              <span
                class="h-2 w-2 rounded-full"
                :class="
                  profileData.availability.status === 'available'
                    ? 'bg-green-500'
                    : 'bg-yellow-500'
                "
              />
              {{ profileData.availability.statusText || "Available" }}
            </div>
          </div>

          <div class="space-y-4 max-w-3xl">
            <h1
              class="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white"
            >
              {{ profileData.name }}
            </h1>
            <p
              class="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400"
            >
              {{ profileData.title }}
            </p>
            <p
              class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
            >
              {{ profileData.tagline }}
            </p>
          </div>

          <!-- Key Metrics -->
          <div
            class="flex flex-wrap justify-center gap-8 md:gap-12 py-8 border-y border-neutral-100 dark:border-neutral-800 w-full max-w-4xl"
          >
            <div class="text-center">
              <div class="text-3xl font-bold text-neutral-900 dark:text-white">
                {{ profileData?.experience || "12" }}+
              </div>
              <div
                class="text-sm text-neutral-500 dark:text-neutral-500 uppercase tracking-widest"
              >
                Years Exp.
              </div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-neutral-900 dark:text-white">
                {{ profileData?.projectsDelivered || "125" }}+
              </div>
              <div
                class="text-sm text-neutral-500 dark:text-neutral-500 uppercase tracking-widest"
              >
                Projects
              </div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-neutral-900 dark:text-white">
                {{ profileData?.clientSatisfaction || "100" }}%
              </div>
              <div
                class="text-sm text-neutral-500 dark:text-neutral-500 uppercase tracking-widest"
              >
                Satisfaction
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <UButton
              to="/contact"
              size="xl"
              icon="i-ph-rocket-launch"
              class="px-8"
            >
              Start Your Project
            </UButton>
            <UButton
              href="https://cal.com/mubaidr"
              external
              size="xl"
              variant="outline"
              icon="i-ph-calendar-check"
              class="px-8"
            >
              Book Consultation
            </UButton>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center gap-2">
            <UButton
              v-for="social in profileData.social"
              :key="social.name"
              :to="social.url"
              external
              variant="ghost"
              color="neutral"
              size="lg"
              :icon="social.icon"
              :title="social.name"
            />
          </div>
        </div>
      </div>
    </section>

    <div class="space-y-32 pb-20">
      <AboutPreview />

      <!-- Skills & Expertise -->
      <section class="max-w-6xl mx-auto px-4 space-y-12">
        <div class="text-center space-y-4">
          <h2 class="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Comprehensive technical expertise across modern web technologies and
            development practices.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="(skills, category) in professionalJourneyData?.technologies"
            :key="category"
            class="flex flex-col"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-ph-code-bold" class="w-5 h-5 text-primary-500" />
                <h3 class="font-bold capitalize">
                  {{ category.replace(/([A-Z])/g, " $1") }}
                </h3>
              </div>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in skills"
                :key="skill"
                :label="skill"
                variant="subtle"
                color="neutral"
              />
            </div>
          </UCard>
        </div>
      </section>

      <TestimonialsPreview />
      <ServicesPreview />
      <CallToAction />
      <RecentBlogPosts />
    </div>
  </div>
</template>
