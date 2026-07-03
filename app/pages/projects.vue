<script setup lang="ts">
definePageMeta({
  title: "Projects",
  description:
    "Explore my portfolio of web applications, browser extensions, and open source contributions.",
})

const site = useSiteConfig()

// Fetch projects data using composable
const { data: projectsData } = await useProjectsData()
const { data: testimonialsData } = await useTestimonialsData()

// SEO Meta
const url = `${site.url}/projects`
const htmlTitle = "Projects"
const ogTitle = "Projects - Muhammad Ubaid Raza"
const description =
  "Explore my portfolio of web applications, browser extensions, and open source contributions."

useSeoMeta({
  title: htmlTitle,
  description,
  ogTitle,
  ogDescription: description,
  ogType: "website",
  ogUrl: url,
  ogImage: site.url + "/img/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: ogTitle,
  twitterDescription: description,
  twitterImage: site.url + "/img/og-image.jpg",
})

useHead({
  link: [{ rel: "canonical", href: url }],
})

// Structured data for SEO
useSchemaOrg([
  defineWebPage({
    name: ogTitle,
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
      <section class="text-center space-y-4">
        <h1>Projects</h1>
        <p>
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
            @click="selectedCategory = category.name"
          >
            {{ category.name }}
          </UButton>
        </div>
      </section>

      <!-- Projects Grid -->
      <section>
        <div class="grid gap-8 md:grid-cols-2">
          <UCard
            v-for="project in filteredProjects"
            :key="project.id"
            variant="soft"
            class="h-full"
          >
            <div class="space-y-6">
              <!-- Project Header -->
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3>
                    {{ project.title }}
                  </h3>
                  <p>
                    {{ project.description }}
                  </p>
                </div>
                <UBadge :label="project.category" variant="soft" size="sm" />
              </div>

              <!-- Role & Team -->
              <template v-if="project.myRole">
                <div class="space-y-2">
                  <h6>Role</h6>
                  <div class="flex justify-between">
                    <span class="flex items-center gap-1">
                      <UIcon name="i-ph-user" />
                      {{ project.myRole }}
                    </span>
                    <span
                      v-if="project.teamSize"
                      class="flex items-center gap-2"
                    >
                      <UIcon name="i-ph-users" />
                      {{ project.teamSize }}
                      {{ project.teamSize === 1 ? "person" : "people" }}
                    </span>
                  </div>
                </div>
              </template>

              <!-- Client Info -->
              <template v-if="project.client">
                <div class="space-y-2">
                  <h6>Client</h6>
                  <div class="flex justify-between">
                    <div>{{ project.client.name }}</div>
                    <div v-if="project.client.industry">
                      {{ project.client.industry }}
                    </div>
                  </div>
                </div>
              </template>

              <!-- Business Impact Metrics -->
              <template v-if="project.businessImpact">
                <div class="space-y-2">
                  <h6>Business Impact</h6>
                  <div class="space-y-2">
                    <div
                      v-for="(value, key) in project.businessImpact"
                      :key="key"
                    >
                      <div class="capitalize">
                        {{ key.replace(/([A-Z])/g, " $1").trim() }}
                      </div>
                      <div class="text-success">
                        {{ value }}
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <!-- Client Testimonials -->
              <div
                v-if="getProjectTestimonials(project).length > 0"
                class="space-y-3"
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
                    v-for="testimonial in getProjectTestimonials(project).slice(
                      0,
                      1,
                    )"
                    :key="testimonial.id"
                    class="space-y-2"
                  >
                    <p class="text-sm italic">"{{ testimonial.quote }}"</p>
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
              <div>
                <div class="space-y-2">
                  <h6>Technologies</h6>
                  <div class="flex gap-2">
                    <UBadge
                      v-for="tech in project.technologies || []"
                      :key="tech"
                      :label="tech"
                      variant="subtle"
                      color="neutral"
                    />
                  </div>
                </div>
              </div>

              <!-- Links -->
              <template
                v-if="project.links && Object.keys(project.links).length > 0"
              >
                <h6>Links</h6>
                <div class="flex gap-2 justify-center text-center">
                  <UButton
                    v-if="project.links.github"
                    :to="project.links.github"
                    external
                    variant="link"
                    icon="i-ph-github-logo"
                  >
                    GitHub
                  </UButton>
                  <UButton
                    v-if="project.links.npm"
                    :to="project.links.npm"
                    external
                    variant="link"
                    icon="i-ph-package"
                  >
                    npm
                  </UButton>
                  <UButton
                    v-if="project.links.documentation"
                    :to="project.links.documentation"
                    external
                    variant="link"
                    icon="i-ph-book-open"
                  >
                    Docs
                  </UButton>
                </div>
              </template>
            </div>
          </UCard>
        </div>
      </section>

      <!-- GitHub CTA -->
      <section class="text-center">
        <p class="mb-4">Explore my complete open source portfolio on GitHub</p>
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
