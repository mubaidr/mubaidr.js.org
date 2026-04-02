<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
}>()

// Fetch profile data using composable
const { data: profileData } = await useProfileData()

const available = computed(() => profileData.value?.availability?.status === 'available')
</script>

<template>
  <section class="relative py-32 overflow-hidden">
    <!-- Subtle gradient background -->
    <div class="absolute inset-0 bg-linear-to-b from-primary-50/30 to-transparent dark:from-primary-950/20" />

    <div class="relative max-w-3xl mx-auto px-6 text-center space-y-8">
      <!-- Heading -->
      <h2 class="font-display text-3xl md:text-4xl font-semibold tracking-tight">
        {{ title || "Let's Build Something Exceptional" }}
      </h2>

      <!-- Description -->
      <p class="text-lg text-neutral-600 dark:text-neutral-400">
        {{ description || profileData?.availability?.description }}
      </p>

      <!-- Dual Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <UButton :to="profileData?.availability?.cta?.url" size="lg" class="px-8">
          {{ profileData?.availability?.cta?.text || 'Start a Conversation' }}
        </UButton>
        <UButton to="/projects" variant="outline" size="lg" class="px-8">
          View My Work
        </UButton>
      </div>

      <!-- Availability Indicator -->
      <div v-if="available" class="pt-4">
        <span
          class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-primary-50 text-primary-700 dark:bg-primary-950/50 dark:text-primary-300">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
          </span>
          Available for new projects
        </span>
      </div>
    </div>
  </section>
</template>
