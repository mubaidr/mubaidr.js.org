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
    description="A handful of projects, out of many"
  >
    <div class="text-center text-xl">
      <div class="space-y-6">
        <!-- Projects List -->
        <div class="space-y-8">
          <div v-for="project in featuredProjectsData || []" :key="project.id">
            <p class="font-semibold">
              {{ project.title }}
            </p>
            <p>
              {{ project.description }}
            </p>
            <p v-if="project.technologies?.length" class="text-sm text-muted">
              {{ project.technologies.join(" · ") }}
            </p>
          </div>
        </div>

        <!-- View All Link -->
        <div v-if="!hideLink">
          <ULink to="/projects" class="text-sm"> More projects → </ULink>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
