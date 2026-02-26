<script setup lang="ts">
// Fetch case studies data using composable with loading state
const { data: caseStudiesData, pending: isLoading } =
  await useCompactCaseStudies()

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
  <div class="space-y-16">
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
    <div
v-else-if="
      caseStudiesData?.caseStudies && caseStudiesData.caseStudies.length > 0
    " class="grid gap-6 md:grid-cols-3">
      <UPageCard
v-for="study in caseStudiesData.caseStudies.slice(0, count)" :key="study.id" :spotlight="true"
        spotlight-color="info">
        <div class="space-y-8 text-center">
          <!-- Problem -->
          <div>
            <p>
              {{ study.problem }}
            </p>
          </div>

          <!-- Arrow -->
          <div>
            <UIcon name="i-ph-arrow-down" class="text-neutral-400" size="1.5em" />
          </div>

          <!-- Solution -->
          <div>
            <p>
              {{ study.solution }}
            </p>
          </div>

          <UAlert :title="study.metric" variant="soft" color="info"/>
        </div>
      </UPageCard>
    </div>

    <!-- CTA Link -->
    <div class="text-center">
      <UButton to="/projects" variant="outline" size="xl">
        <UIcon name="i-ph-article" />
        View All Projects
      </UButton>
    </div>
  </div>
</template>
