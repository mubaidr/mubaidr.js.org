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
    <div class="text-center">
      <h2 class="mb-4">{{ title }}</h2>
      <p class="max-w-3xl mx-auto">
        A selection of projects that showcase my expertise and passion for
        development
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <UCard
        v-for="project in featuredProjects"
        :key="project.id"
        class="cursor-pointer h-full"
      >
        <div class="space-y-4">
          <!-- Project Header -->
          <div class="flex items-center justify-center">
            <UIcon name="i-ph-code" class="text-xl text-primary" />
          </div>

          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold">
                {{ project.title }}
              </h3>
              <UBadge :label="project.category" />
            </div>

            <p class="text-neutral-600 dark:text-neutral-300">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-1">
              <UBadge
                v-for="tech in project.technologies.slice(0, 3)"
                :key="tech"
                :label="tech"
              />
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <div v-if="!hideLink" class="text-center">
      <UButton to="/projects" class="modern-btn">
        <UIcon name="i-ph-folder-open" />
        View All Projects
      </UButton>
    </div>
  </div>
</template>
