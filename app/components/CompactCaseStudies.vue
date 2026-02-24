<script setup lang="ts">
// Fetch case studies data using composable with loading state
const { data: caseStudiesData, pending: isLoading } = await useCompactCaseStudies()

// Optional props for customization
interface Props {
  title?: string
  count?: number
}

withDefaults(defineProps<Props>(), {
  title: "Real Results, Real Impact",
  count: 3,
})
</script>

<template>
  <div>
    <!-- Section Header -->
    <div class="text-center space-y-4 mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
        {{ title }}
      </h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
        Tangible outcomes from real projects
      </p>
    </div>

    <!-- Case Studies Grid -->
    <!-- Loading Skeleton -->
    <div v-if="isLoading" class="grid gap-6 md:grid-cols-3">
      <USkeleton v-for="i in count" :key="i" class="h-64 w-full" />
    </div>

    <!-- Case Studies -->
    <div v-else-if="caseStudiesData?.caseStudies && caseStudiesData.caseStudies.length > 0" class="grid gap-6 md:grid-cols-3">
      <UCard
        v-for="study in caseStudiesData.caseStudies.slice(0, count)"
        :key="study.id"
        class="h-full hover:shadow-lg transition-shadow"
      >
        <div class="space-y-4">
          <!-- Problem -->
          <div class="flex items-start gap-3">
            <div class="shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <UIcon name="i-ph-warning-circle" class="text-red-600 dark:text-red-400" size="1.25em" />
            </div>
            <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {{ study.problem }}
            </p>
          </div>

          <!-- Arrow -->
          <div class="flex justify-center">
            <UIcon name="i-ph-arrow-down" class="text-neutral-400" size="1.5em" />
          </div>

          <!-- Solution -->
          <div class="flex items-start gap-3">
            <div class="shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <UIcon name="i-ph-lightbulb" class="text-blue-600 dark:text-blue-400" size="1.25em" />
            </div>
            <p class="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {{ study.solution }}
            </p>
          </div>

          <!-- Metric -->
          <div class="p-4 bg-primary-50 dark:bg-primary-950/30 rounded-lg">
            <div class="flex items-center gap-2">
              <UIcon name="i-ph-chart-line-up" class="text-primary-600 dark:text-primary-400" size="1.5em" />
              <span class="font-semibold text-primary-700 dark:text-primary-300">
                {{ study.metric }}
              </span>
            </div>
          </div>

          <!-- CTA Link -->
          <UButton :to="study.link" variant="ghost" size="sm" class="w-full justify-center">
            View Project
            <UIcon name="i-ph-arrow-right" size="1em" class="ml-1" />
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>
