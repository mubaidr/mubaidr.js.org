<script setup lang="ts">
// Fetch testimonials using composable with loading state
const { data: testimonialsData, pending: isLoading } = await useTestimonialsData()
</script>

<template>
  <div>
    <div class="space-y-12">
      <div class="text-center space-y-4">
        <h2>What People Say</h2>
        <p class="text-neutral-600 dark:text-neutral-400">
          Trusted by teams and leaders worldwide
        </p>
      </div>

      <!-- Loading Skeleton -->
      <div v-if="isLoading">
        <div class="grid gap-6 md:grid-cols-2">
          <USkeleton v-for="i in 4" :key="i" class="h-40 w-full" />
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div v-else-if="testimonialsData && testimonialsData.length > 0" class="grid gap-6 md:grid-cols-2">
        <UPageCard v-for="testimonial in testimonialsData" :key="testimonial.name" :ui="{
          root: 'transition-all duration-300 hover:shadow-md'
        }" variant="soft">
          <div class="space-y-4">
            <p class="text-neutral-600 dark:text-neutral-400 italic leading-relaxed">
              "{{ testimonial.quote }}"
            </p>
            <p class="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              — {{ testimonial.name }}
            </p>
          </div>
        </UPageCard>
      </div>

      <div v-else class="text-center">
        <UPageCard class="max-w-md mx-auto">
          <div class="space-y-4 text-center">
            <UIcon name="i-ph-chat-circle" class="mx-auto" />
            <p>No testimonials found.</p>
          </div>
        </UPageCard>
      </div>
    </div>
  </div>
</template>
