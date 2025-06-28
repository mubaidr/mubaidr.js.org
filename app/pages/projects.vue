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
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-32 py-16">
        <!-- Page Header -->
        <div class="text-center space-y-6">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
          >
            <UIcon name="i-ph-folder-open" class="w-4 h-4 text-primary" />
            <span class="text-sm font-medium text-primary">My Portfolio</span>
          </div>

          <h1
            class="text-3xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
          >
            My Projects
          </h1>

          <p
            class="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            A showcase of web applications, open source contributions, and
            development tools I've built
          </p>
        </div>

        <!-- Featured Projects -->
        <FeaturedProjects :hide-link="true" />

        <!-- All Projects -->
        <section class="space-y-12">
          <div class="text-center space-y-6">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <UIcon name="i-ph-folders" class="w-4 h-4 text-primary" />
              <span class="text-sm font-medium text-primary">All Projects</span>
            </div>
            <h2
              class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
            >
              Explore My Work
            </h2>
            <p
              class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Browse through a diverse range of projects, from web apps to open
              source tools.
            </p>
          </div>

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
              class="transition-all duration-300 hover:scale-105"
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

          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="project in filteredProjects"
              :key="project.id"
              class="group relative"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-500 opacity-0 group-hover:opacity-100"
              ></div>
              <UCard
                variant="soft"
                class="relative h-full border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-500 transform group-hover:-translate-y-1"
              >
                <!-- Project Image -->
                <div
                  class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 mb-4 flex items-center justify-center rounded-lg overflow-hidden"
                >
                  <img
                    v-if="project.image"
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <UIcon
                    v-else
                    name="i-ph-folder-open"
                    class="w-12 h-12 text-gray-400 dark:text-gray-500"
                  />
                </div>

                <!-- Project Content -->
                <div class="space-y-4">
                  <div>
                    <div class="flex items-center justify-between mb-2">
                      <h3
                        class="text-lg font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                      >
                        {{ project.title }}
                      </h3>
                      <UBadge
                        :label="project.category"
                        variant="soft"
                        size="sm"
                      />
                    </div>
                    <p
                      class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2"
                    >
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
                      size="sm"
                    />
                    <UBadge
                      v-if="project.technologies.length > 4"
                      :label="`+${project.technologies.length - 4}`"
                      variant="soft"
                      size="sm"
                    />
                  </div>

                  <!-- Status and Date -->
                  <div class="flex items-center justify-between text-xs">
                    <UBadge
                      :label="project.status"
                      :color="
                        project.status === 'active' ? 'success' : 'neutral'
                      "
                      variant="soft"
                      size="sm"
                    />
                    <span class="text-gray-500 dark:text-gray-400">
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
                      <UIcon name="i-ph-eye" class="mr-1" />
                      Live Demo
                    </UButton>

                    <UButton
                      v-if="project.links.github"
                      :to="project.links.github"
                      external
                      variant="ghost"
                      color="neutral"
                      size="sm"
                    >
                      <UIcon name="i-ph-github-logo" />
                    </UButton>

                    <UButton
                      v-if="project.links.case_study"
                      :to="project.links.case_study"
                      variant="ghost"
                      color="neutral"
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
          <div
            class="bg-gradient-to-r from-primary/5 via-blue/5 to-purple/5 rounded-2xl p-8 border border-primary/10"
          >
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
            >
              <UIcon name="i-ph-github-logo" class="w-4 h-4 text-primary" />
              <span class="text-sm font-medium text-primary">Explore More</span>
            </div>
            <h2
              class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent mb-4"
            >
              More on GitHub
            </h2>
            <p
              class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              Explore my complete portfolio of open source projects,
              contributions, and experiments on GitHub.
            </p>

            <UButton
              to="https://github.com/mubaidr"
              external
              size="lg"
              variant="solid"
              class="glass-button group/cta bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <UIcon
                name="i-ph-github-logo"
                class="mr-2 group-hover/cta:scale-110 transition-transform duration-300"
              />
              <span
                class="group-hover/cta:translate-x-0.5 transition-transform duration-300"
                >View GitHub Profile</span
              >
            </UButton>
          </div>
        </section>
      </div>
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
