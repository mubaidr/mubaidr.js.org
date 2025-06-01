<script lang="ts" setup>
const { count, title, hideLink } = defineProps({
  count: {
    type: Number,
    default: 2,
  },
  title: {
    type: String,
    default: "Featured Projects",
    required: false,
  },
  hideLink: {
    type: Boolean,
    default: false,
  },
})

// Fetch projects data
const { data: featuredProjects } = await useAsyncData(
  "featured-projects",
  async () => {
    const data = await queryCollection("projects").first()
    return data?.projects.filter((p) => p.featured).slice(0, count)
  },
)
</script>

<template>
  <div>
    <section class="space-y-8">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ title }}</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A selection of projects that showcase my expertise and passion for
          development
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <UCard
          v-for="project in featuredProjects"
          :key="project.id"
          class="group cursor-pointer transition-all duration-300 hover:scale-[1.02] h-full"
          variant="soft"
        >
          <div class="space-y-4">
            <!-- Project Header -->
            <div
              class="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center"
            >
              <UIcon name="i-ph-code" class="w-8 h-8 text-primary" />
            </div>

            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h3
                  class="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                >
                  {{ project.title }}
                </h3>
                <UBadge :label="project.category" variant="soft" size="sm" />
              </div>

              <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-1">
                <UBadge
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  :label="tech"
                  variant="outline"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <div class="text-center" v-if="!hideLink">
        <UButton to="/projects" variant="outline" size="lg">
          <UIcon name="i-ph-folder-open" />
          View All Projects
        </UButton>
      </div>
    </section>
  </div>
</template>
