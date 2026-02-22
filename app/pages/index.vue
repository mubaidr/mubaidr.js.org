<script lang="ts" setup>
// Fetch data using composables
const { data: profileData } = await useProfileData()
// const { data: professionalJourneyData } = await useProfessionalJourneyData()

// SEO Meta using reactive composables
if (profileData.value) {
  useSeoMeta({
    title: `${profileData.value.name} - ${profileData.value.title}`,
    description: profileData.value.description,
    ogTitle: `${profileData.value.name} - ${profileData.value.title}`,
    ogDescription: profileData.value.description,
    ogImage: profileData.value.avatar,
    ogType: "profile",
    twitterCard: "summary_large_image",
    twitterTitle: `${profileData.value.name} - ${profileData.value.title}`,
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
</script>

<template>
  <div>
    <section v-if="profileData" class="py-36 md:py-48">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex flex-col items-center text-center space-y-8">
          <!-- Name as Hero -->
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {{ profileData.name }}
          </h1>

          <!-- Tagline as Subheading -->
          <p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            {{ profileData.tagline }}
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <UButton to="/contact" size="lg" icon="i-ph-envelope">
              Let's Talk
            </UButton>
            <UButton to="/projects" variant="outline" size="lg" icon="i-ph-folder-open">
              View Projects
            </UButton>
          </div>

          <!-- Social Links (Subtle) -->
          <div class="flex gap-3 text-neutral-500">
            <ULink
v-for="social in profileData.social" :key="social.name" :to="social.url" external
              :title="social.name" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <UIcon :name="social.icon" size="1.5em" />
            </ULink>
          </div>
        </div>
      </div>
    </section>

    <div class="space-y-32 pb-20">
      <!-- <OpenSourceImpact /> -->
      <AboutPreview />
      <TestimonialsPreview />
      <!-- <ServicesPreview /> -->
      <!-- <CallToAction /> -->
      <FeaturedProjects :count="2" />
      <RecentBlogPosts />
    </div>
  </div>
</template>
