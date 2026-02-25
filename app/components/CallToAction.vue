<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
}>()

// Fetch profile data using composable
const { data: profileData } = await useProfileData()
</script>

<template>
  <div>
    <UPageCard class="text-center" :spotlight="true" :highlight="true">
      <div class="space-y-8 py-12">
        <!-- Main Heading -->
        <div class="space-y-4">
          <h2 class="text-3xl md:text-4xl font-bold">
            {{ title || "Ready to Start Your Next Project?" }}
          </h2>
          <p class="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 text-lg">
            {{ description || profileData?.availability?.description }}
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <UButton :to="profileData?.availability?.cta?.url" size="xl" icon="i-ph-rocket-launch" class="px-8">
            {{ profileData?.availability?.cta?.text }}
          </UButton>
          <UButton to="/projects" variant="outline" size="xl" icon="i-ph-list" class="px-8">
            View Projects
          </UButton>
        </div>

        <!-- Availability Note -->
        <div v-if="profileData?.availability?.status === 'available'">
          <UBadge variant="soft" color="info">
            Only {{ profileData?.availability?.slotsAvailable }} project slots
            available for
            {{ profileData?.availability?.startDate }}
          </UBadge>
        </div>
      </div>
    </UPageCard>
  </div>
</template>
