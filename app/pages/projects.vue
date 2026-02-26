<script setup lang="ts">
definePageMeta({
  title: "Projects - Muhammad Ubaid Raza",
  description:
    "Explore my portfolio of web applications, browser extensions, and open source contributions.",
})

const site = useSiteConfig()

// Fetch projects data using composable
const { data: projectsData } = await useProjectsData()
const { data: testimonialsData } = await useTestimonialsData()

// SEO Meta
const url = `${site.url}/projects`
const title = "Projects - Muhammad Ubaid Raza"
const description =
  "Explore my portfolio of web applications, browser extensions, and open source contributions."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogUrl: url,
  ogImage: site.url + "/img/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: site.url + "/img/og-image.jpg",
})

useHead({
  link: [{ rel: "canonical", href: url }],
})

// Structured data for SEO
useSchemaOrg([
  defineWebPage({
    name: title,
    description,
    url,
  }),
  defineWebSite({
    name: site.name,
  }),
])

const selectedCategory = ref("All")

const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") {
    return projectsData.value?.projects || []
  }

  return (
    projectsData.value?.projects.filter(
      (p) => p.category === selectedCategory.value,
    ) || []
  )
})

// Get testimonials for a specific project
const getProjectTestimonials = (project: { testimonials?: number[] }) => {
  if (!project.testimonials || !Array.isArray(project.testimonials)) return []
  return (
    testimonialsData.value?.filter((t) => {
      const testimonialId = typeof t.id === "number" ? t.id : parseInt(t.id, 10)
      return project.testimonials?.includes(testimonialId)
    }) || []
  )
}
</script>

<template>
  <div>
    <div class="space-y-24">
      <!-- Page Header -->
      <section class="text-center space-y-6">
        <h1>Projects</h1>
        <p class="text-lg text-neutral-600 dark:text-neutral-400">
          A selection of web applications, open source tools, and developer
          projects I've built
        </p>
      </section>

      <!-- Category Filter -->
      <section class="flex justify-center">
        <div class="flex flex-wrap justify-center gap-2">
          <UButton
            v-for="category in projectsData?.categories"
            :key="category.name"
            :variant="selectedCategory === category.name ? 'solid' : 'outline'"
            size="sm"
            @click="selectedCategory = category.name"
          >
            {{ category.name }}
          </UButton>
        </div>
      </section>

      <!-- Projects Grid -->
      <section>
        <div class="grid gap-6 md:grid-cols-2">
          <div v-for="project in filteredProjects" :key="project.id">
            <UCard class="h-full group hover:shadow-lg transition-shadow">
              <div class="space-y-4">
                <!-- Project Header -->
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                      <h3 class="text-lg font-semibold">
                        {{ project.title }}
                      </h3>
                      <UBadge
                        v-if="project.type"
                        :label="project.type"
                        variant="subtle"
                        size="xs"
                      />
                    </div>
                    <p class="text-sm text-neutral-600 dark:text-neutral-400">
                      {{ project.description }}
                    </p>
                  </div>
                  <UBadge :label="project.category" variant="soft" size="sm" />
                </div>

                <!-- Role & Team -->
                <div
                  v-if="project.myRole"
                  class="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400"
                >
                  <span class="flex items-center gap-1">
                    <UIcon name="i-ph-user" />
                    {{ project.myRole }}
                  </span>
                  <span v-if="project.teamSize" class="flex items-center gap-1">
                    <UIcon name="i-ph-users" />
                    {{ project.teamSize }}
                    {{ project.teamSize === 1 ? "person" : "people" }}
                  </span>
                </div>

                <!-- Client Info -->
                <div
                  v-if="project.client"
                  class="p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg"
                >
                  <div
                    class="text-xs text-neutral-600 dark:text-neutral-400 mb-1"
                  >
                    Client
                  </div>
                  <div class="font-medium">{{ project.client.name }}</div>
                  <div
                    v-if="project.client.industry"
                    class="text-xs text-neutral-500 dark:text-neutral-500"
                  >
                    {{ project.client.industry }}
                  </div>
                </div>

                <!-- Business Impact Metrics -->
                <div v-if="project.businessImpact" class="space-y-2">
                  <div
                    class="text-xs font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Business Impact
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div
                      v-for="(value, key) in project.businessImpact"
                      :key="key"
                      class="p-2 bg-primary-50 dark:bg-primary-950/30 rounded"
                    >
                      <div
                        class="text-[10px] text-neutral-600 dark:text-neutral-400 capitalize"
                      >
                        {{ key.replace(/([A-Z])/g, " $1").trim() }}
                      </div>
                      <div
                        class="text-sm font-semibold text-primary-700 dark:text-primary-300"
                      >
                        {{ value }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Client Testimonials -->
                <div
                  v-if="getProjectTestimonials(project).length > 0"
                  class="space-y-2"
                >
                  <div
                    class="text-xs font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Client Feedback
                  </div>
                  <div
                    class="p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg"
                  >
                    <div
                      v-for="testimonial in getProjectTestimonials(
                        project,
                      ).slice(0, 1)"
                      :key="testimonial.id"
                      class="space-y-2"
                    >
                      <p
                        class="text-sm italic text-neutral-600 dark:text-neutral-400"
                      >
                        "{{ testimonial.quote }}"
                      </p>
                      <div class="flex items-center gap-2">
                        <div
                          v-if="testimonial.avatar"
                          class="w-6 h-6 rounded-full overflow-hidden"
                        >
                          <img
                            :src="testimonial.avatar"
                            :alt="testimonial.name"
                            class="w-full h-full object-cover"
                          />
                        </div>
                        <div class="text-xs">
                          <div class="font-medium">{{ testimonial.name }}</div>
                          <div class="text-neutral-500 dark:text-neutral-500">
                            {{ testimonial.title }},
                            {{ testimonial.company }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-1.5">
                  <UBadge
                    v-for="tech in (project.technologies || []).slice(0, 4)"
                    :key="tech"
                    :label="tech"
                    variant="outline"
                    size="sm"
                  />
                  <UBadge
                    v-if="(project.technologies || []).length > 4"
                    :label="`+${(project.technologies || []).length - 4}`"
                    variant="subtle"
                    size="sm"
                  />
                </div>

                <!-- Links -->
                <div
                  v-if="project.links && Object.keys(project.links).length > 0"
                  class="flex flex-wrap items-center gap-2 pt-2"
                >
                  <UButton
                    v-if="project.links.github"
                    :to="project.links.github"
                    external
                    variant="outline"
                    size="sm"
                    icon="i-ph-github-logo"
                    trailing
                  >
                    GitHub
                  </UButton>
                  <UButton
                    v-if="project.links.npm"
                    :to="project.links.npm"
                    external
                    variant="outline"
                    size="sm"
                    icon="i-ph-package"
                    trailing
                  >
                    npm
                  </UButton>
                  <UButton
                    v-if="project.links.documentation"
                    :to="project.links.documentation"
                    external
                    variant="outline"
                    size="sm"
                    icon="i-ph-book-open"
                    trailing
                  >
                    Docs
                  </UButton>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </section>

      <!-- GitHub CTA -->
      <section class="text-center">
        <p class="text-neutral-600 dark:text-neutral-400 mb-6">
          Explore my complete open source portfolio on GitHub
        </p>
        <UButton
          to="https://github.com/mubaidr"
          external
          icon="i-ph-github-logo"
          variant="outline"
          size="lg"
        >
          View GitHub Profile
        </UButton>
      </section>
    </div>
  </div>
</template>
