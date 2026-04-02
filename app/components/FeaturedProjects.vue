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

// Fetch featured projects using composable
const { data: featuredProjectsData } = await useFeaturedProjects(count)
</script>

<template>
  <div class="space-y-16">
    <!-- Section Header -->
    <div class="text-center space-y-6">
      <h2>{{ title }}</h2>
      <p class="max-w-3xl mx-auto">
        A selection of projects that showcase my expertise and passion for
        development
      </p>
    </div>

    <!-- Projects Grid -->
    <div class="grid gap-8 md:grid-cols-2">
      <UCard v-for="project in featuredProjectsData || []" :key="project.id"
        class="group cursor-pointer h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="space-y-6">
          <!-- Project Icon with Gradient Background -->
          <div class="flex items-center justify-center">
            <div
              class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <UIcon name="i-ph-code-bold" class="text-2xl text-primary" />
            </div>
          </div>

          <!-- Project Content -->
          <div class="space-y-3">
            <div class="flex items-center justify-between gap-4">
              <h3 class="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                {{ project.title }}
              </h3>
              <UBadge :label="project.category" variant="subtle" />
            </div>

            <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 pt-2">
              <UBadge v-for="tech in (project.technologies || []).slice(0, 3)" :key="tech" :label="tech"
                variant="outline" size="sm" />
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <!-- View All Button -->
    <div v-if="!hideLink" class="text-center">
      <UButton to="/projects" variant="outline" size="xl">
        <UIcon name="i-ph-folder-open" />
        View All Projects
      </UButton>
    </div>
  </div>
</template>
