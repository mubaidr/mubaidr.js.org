<script setup lang="ts">
// Fetch case studies data using composable
const { data: caseStudiesData } = await useFeaturedCaseStudies(2)
</script>

<template>
  <div>
    <div class="text-center space-y-6">
      <h2>Real Results from Real Projects</h2>

      <p class="max-w-3xl mx-auto">
        See how technical solutions delivered measurable impact and business
        results.
      </p>
    </div>

    <div v-if="caseStudiesData && caseStudiesData.length > 0" class="grid gap-8 lg:grid-cols-2">
      <UCard v-for="study in caseStudiesData" :key="study.id" class="h-full">
        <div class="space-y-6">
          <!-- Header -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <UBadge :label="study.category" />
              <span v-if="study.type">{{ study.type }}</span>
            </div>
            <h3>
              {{ study.title }}
            </h3>
            <p v-if="study.client?.name">
              {{ study.client.name }}
              <span v-if="study.client.industry" class="text-neutral-500 dark:text-neutral-400">
                ({{ study.client.industry }})
              </span>
            </p>
          </div>

          <!-- Description -->
          <p>
            {{ study.description }}
          </p>

          <!-- Challenges -->
          <div v-if="study.challenges && study.challenges.length > 0">
            <h4 class="mb-2">Key Challenges:</h4>
            <ul class="list-disc list-inside space-y-1">
              <li v-for="(challenge, index) in study.challenges.slice(0, 3)" :key="index">
                {{ challenge }}
              </li>
            </ul>
          </div>

          <!-- Business Impact -->
          <div v-if="study.businessImpact && Object.keys(study.businessImpact).length > 0" class="p-4">
            <h4 class="mb-3">Business Impact:</h4>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="(value, key) in study.businessImpact" :key="key" class="text-center">
                <div class="text-lg font-bold">{{ value }}</div>
                <div class="text-[10px] text-neutral-500 dark:text-neutral-400 capitalize">
                  {{ key.replace(/([A-Z])/g, ' $1').trim() }}
                </div>
              </div>
            </div>
          </div>

          <!-- Outcomes -->
          <div v-if="study.outcomes && study.outcomes.length > 0">
            <h4 class="mb-2">Outcomes:</h4>
            <ul class="list-disc list-inside space-y-1">
              <li v-for="(outcome, index) in study.outcomes.slice(0, 3)" :key="index">
                {{ outcome }}
              </li>
            </ul>
          </div>

          <!-- Technologies -->
          <div v-if="study.technologies && study.technologies.length > 0">
            <h4 class="mb-2">Technologies Used:</h4>
            <div class="flex flex-wrap gap-2">
              <UBadge v-for="tech in study.technologies" :key="tech" :label="tech" />
            </div>
          </div>

          <!-- CTA -->
          <div class="pt-4">
            <UButton v-if="study.links?.case_study" :to="study.links.case_study" class="w-full">
              <UIcon name="i ph-arrow-right" size="3em" class="text-info" />
              Read Full Case Study
            </UButton>
            <UButton v-else to="/contact" class="w-full">
              <UIcon name="i-ph-chat-circle" size="3em" class="text-info" />
              Discuss Similar Project
            </UButton>
          </div>
        </div>
      </UCard>
    </div>

    <div class="text-center">
      <UButton to="/projects">
        <UIcon name="i-ph-folder-open" size="3em" class="text-info" />
        View All Projects
      </UButton>
    </div>
  </div>
</template>
