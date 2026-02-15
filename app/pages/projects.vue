<script setup lang="ts">
definePageMeta({
  title: "Projects - Muhammad Ubaid Raza",
  description:
    "Explore my portfolio of web applications, browser extensions, and open source contributions.",
})

// Fetch projects data using composable
const { data: projectsData } = await useProjectsData()

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
    return projectsData.value?.projects || []
  }

  return (
    projectsData.value?.projects.filter(
      (p) => p.category === selectedCategory.value,
    ) || []
  )
})
</script>

<template>
  <div>
    <div class="space-y-24">
      <!-- Page Header -->
      <section class="max-w-3xl mx-auto text-center space-y-6">
        <h1>Projects</h1>
        <p class="text-lg text-neutral-600 dark:text-neutral-400">
          A selection of web applications, open source tools, and developer
          projects I've built
        </p>
      </section>

      <!-- Category Filter -->
      <section class="flex justify-center">
        <div class="flex flex-wrap justify-center gap-2">
          <UButton v-for="category in projectsData?.categories" :key="category.name"
            :variant="selectedCategory === category.name ? 'solid' : 'outline'"
            @click="selectedCategory = category.name" size="sm">
            {{ category.name }}
          </UButton>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="max-w-6xl mx-auto px-4">
        <div class="grid gap-6 md:grid-cols-2">
          <div v-for="project in filteredProjects" :key="project.id">
            <UCard class="h-full group hover:shadow-lg transition-shadow">
              <div class="space-y-4">
                <!-- Project Header -->
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold mb-2">
                      {{ project.title }}
                    </h3>
                    <p class="text-sm text-neutral-600 dark:text-neutral-400">
                      {{ project.description }}
                    </p>
                  </div>
                  <UBadge :label="project.category" variant="soft" size="sm" />
                </div>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-1.5">
                  <UBadge v-for="tech in project.technologies.slice(0, 4)" :key="tech" :label="tech" variant="outline"
                    size="sm" />
                  <UBadge v-if="project.technologies.length > 4" :label="`+${project.technologies.length - 4}`"
                    variant="subtle" size="sm" />
                </div>

                <!-- Links -->
                <div v-if="Object.keys(project.links).length > 0" class="flex flex-wrap items-center gap-2 pt-2">
                  <UButton v-if="project.links.github" :to="project.links.github" external variant="outline" size="sm"
                    icon="i-ph-github-logo" trailing>
                    GitHub
                  </UButton>
                  <UButton v-if="project.links.npm" :to="project.links.npm" external variant="outline" size="sm"
                    icon="i-ph-package" trailing>
                    npm
                  </UButton>
                  <UButton v-if="project.links.documentation" :to="project.links.documentation" external
                    variant="outline" size="sm" icon="i-ph-book-open" trailing>
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
        <UButton to="https://github.com/mubaidr" external icon="i-ph-github-logo" variant="outline" size="lg">
          View GitHub Profile
        </UButton>
      </section>
    </div>
  </div>
</template>
