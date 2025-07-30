<script setup lang="ts">
definePageMeta({
  title: "Projects - Muhammad Ubaid Raza",
  description:
    "Explore my portfolio of web applications, browser extensions, and open source contributions.",
})

// Fetch projects data from Nuxt Content collection
const { data: projects } = await useAsyncData("projects", async () => {
  return queryCollection("projects").first()
})

useHead({
  title: "Projects - Muhammad Ubaid Raza",
  meta: [
    {
      name: "description",
      content:
        "Explore my portfolio of web applications, browser extensions, and open source contributions.",
    },
  ],
})

const selectedCategory = ref("All")

const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") {
    return projects.value?.projects || []
  }

  return (
    projects.value?.projects.filter(
      (p) => p.category === selectedCategory.value,
    ) || []
  )
})
</script>

<template>
  <div>
    <div class="space-y-32">
      <!-- Page Header -->
      <div class="text-center space-y-6">
        <h1>My Projects</h1>

        <p class="max-w-4xl mx-auto">
          A showcase of web applications, open source contributions, and
          development tools I've built
        </p>
      </div>

      <!-- Featured Projects -->
      <FeaturedProjects :hide-link="true" />

      <!-- All Projects -->
      <section class="space-y-12">
        <div class="text-center space-y-6">
          <h2>Explore My Work</h2>
          <p class="max-w-3xl mx-auto">
            Browse through a diverse range of projects, from web apps to open
            source tools.
          </p>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-2 mb-8">
          <UButton
            v-for="category in projects?.categories"
            :key="category.name"
            :variant="selectedCategory === category.name ? 'solid' : 'outline'"
            @click="selectedCategory = category.name"
          >
            {{ category.name }}
            <UBadge
              v-if="category.name !== 'All'"
              :label="category.count.toString()"
              variant="soft"
            />
          </UButton>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="project in filteredProjects" :key="project.id">
            <div />
            <UCard class="modern-card glass">
              <!-- Project Image -->
              <div
                class="mb-4 flex items-center justify-center overflow-hidden"
              >
                <img
                  v-if="project.image"
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover"
                />
                <UIcon v-else name="i-ph-folder-open" />
              </div>

              <!-- Project Content -->
              <div class="space-y-4">
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <h3>
                      {{ project.title }}
                    </h3>
                    <UBadge :label="project.category" variant="soft" />
                  </div>
                  <p>
                    {{ project.description }}
                  </p>
                </div>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-1.5">
                  <UBadge
                    v-for="tech in project.technologies.slice(0, 4)"
                    :key="tech"
                    :label="tech"
                    variant="outline"
                  />
                  <UBadge
                    v-if="project.technologies.length > 4"
                    :label="`+${project.technologies.length - 4}`"
                    variant="soft"
                  />
                </div>

                <!-- Status and Date -->
                <div class="flex items-center justify-between">
                  <UBadge
                    :label="project.status"
                    :color="project.status === 'active' ? 'success' : 'neutral'"
                    variant="soft"
                    size="sm"
                  />
                  <span>
                    {{ new Date(project.startDate).getFullYear() }}
                  </span>
                </div>

                <!-- Links -->
                <div class="flex items-center gap-2 pt-2">
                  <UButton
                    v-if="project.links.demo"
                    :to="project.links.demo"
                    external
                    variant="solid"
                    size="sm"
                    class="flex-1 justify-center"
                  >
                    <UIcon name="i-ph-eye" />
                    Live Demo
                  </UButton>

                  <UButton
                    v-if="project.links.github"
                    :to="project.links.github"
                    external
                    variant="outline"
                    size="sm"
                  >
                    <UIcon name="i-ph-github-logo" />
                  </UButton>

                  <UButton
                    v-if="project.links.case_study"
                    :to="project.links.case_study"
                    variant="outline"
                    size="sm"
                  >
                    <UIcon name="i-ph-article" />
                  </UButton>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </section>

      <!-- GitHub Integration -->
      <section class="text-center py-16">
        <div class="p-8">
          <h2 class="mb-4">More on GitHub</h2>
          <p class="mb-8 max-w-3xl mx-auto">
            Explore my complete portfolio of open source projects,
            contributions, and experiments on GitHub.
          </p>

          <UButton
            to="https://github.com/mubaidr"
            external
            size="xl"
            variant="solid"
          >
            <UIcon name="i-ph-github-logo" />
            <span>View GitHub Profile</span>
          </UButton>
        </div>
      </section>
    </div>
  </div>
</template>
