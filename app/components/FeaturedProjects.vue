<script lang="ts" setup>
const { count, title, hideLink } = defineProps({
  count: {
    type: Number,
    default: 3,
  },
  title: {
    type: String,
    default: "Selected Work",
    required: false,
  },
  hideLink: {
    type: Boolean,
    default: false,
  },
})

const { data: featuredProjectsData } = await useFeaturedProjects(count)
</script>

<template>
  <UPageSection
    v-if="featuredProjectsData"
    :title="title"
    description="Production systems shipped across multiple domains"
  >
    <div class="space-y-8">
      <div
        v-for="project in featuredProjectsData || []"
        :key="project.id"
        class="space-y-2"
      >
        <h3 class="text-lg font-semibold">{{ project.title }}</h3>
        <p class="text-muted">{{ project.description }}</p>
        <p
          v-if="project.technologies?.length"
          class="text-sm text-muted font-mono"
        >
          {{ project.technologies.join(" · ") }}
        </p>
      </div>

      <div v-if="!hideLink">
        <ULink to="/projects" class="text-sm"> More projects → </ULink>
      </div>
    </div>
  </UPageSection>
</template>
