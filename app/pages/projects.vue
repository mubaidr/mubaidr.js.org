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
    <div class="space-y-24">
      <!-- Page Header -->
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A showcase of web applications, open source contributions, and
          development tools I've built
        </p>
      </div>

      <!-- Featured Projects -->
      <FeaturedProjects :hide-link="true" />

      <!-- All Projects -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-8">All Projects</h2>

          <!-- Category Filter -->
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <UButton
              v-for="category in projects?.categories"
              :key="category.name"
              :variant="
                selectedCategory === category.name ? 'solid' : 'outline'
              "
              size="sm"
              @click="selectedCategory = category.name"
            >
              {{ category.name }}
              <UBadge
                v-if="category.name !== 'All'"
                :label="category.count.toString()"
                variant="soft"
                size="sm"
                class="ml-1"
              />
            </UButton>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="project in filteredProjects"
            :key="project.id"
            class="group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          >
            <!-- Project Image -->
            <div
              class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 mb-4 flex items-center justify-center"
            >
              <UIcon
                name="i-ph-folder-open"
                class="w-8 h-8 text-gray-500 dark:text-gray-400"
              />
            </div>

            <!-- Project Content -->
            <div class="space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <h3
                    class="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  >
                    {{ project.title }}
                  </h3>
                  <UBadge :label="project.category" variant="soft" size="sm" />
                </div>
                <p
                  class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2"
                >
                  {{ project.description }}
                </p>
              </div>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-1">
                <UBadge
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  :label="tech"
                  variant="outline"
                  size="sm"
                />
                <UBadge
                  v-if="project.technologies.length > 3"
                  :label="`+${project.technologies.length - 3}`"
                  variant="soft"
                  size="sm"
                  color="neutral"
                />
              </div>

              <!-- Status Badge -->
              <div class="flex items-center justify-between">
                <UBadge
                  :label="project.status"
                  :variant="project.status === 'active' ? 'solid' : 'outline'"
                  size="sm"
                />
                <span class="text-xs text-gray-500">
                  {{ new Date(project.startDate).getFullYear() }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex items-center gap-2 pt-2">
                <UButton
                  v-if="project.links.demo"
                  :to="project.links.demo"
                  external
                  variant="soft"
                  size="sm"
                >
                  <UIcon name="i-ph-eye" />
                </UButton>

                <UButton
                  v-if="project.links.github"
                  :to="project.links.github"
                  external
                  variant="ghost"
                  size="sm"
                >
                  <UIcon name="i-ph-github-logo" />
                </UButton>

                <UButton
                  v-if="project.links.case_study"
                  :to="project.links.case_study"
                  variant="ghost"
                  size="sm"
                >
                  <UIcon name="i-ph-article" />
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- GitHub Integration -->
      <section class="text-center py-12 bg-zinc-100/50 dark:bg-zinc-800/50">
        <h2 class="text-3xl font-bold mb-4">More on GitHub</h2>
        <p
          class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Explore my complete portfolio of open source projects, contributions,
          and experiments on GitHub.
        </p>

        <UButton
          to="https://github.com/mubaidr"
          external
          size="lg"
          variant="soft"
        >
          <UIcon name="i-ph-github-logo" />
          View GitHub Profile
        </UButton>
      </section>
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
