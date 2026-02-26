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
        <UCard>
          <div class="grid gap-6 md:grid-cols-2">
            <USkeleton v-for="i in 4" :key="i" class="h-32 w-full" />
          </div>
        </UCard>
      </div>

      <!-- Testimonials Grid -->
      <div v-else-if="testimonialsData && testimonialsData.length > 0">
        <UCard>
          <div class="grid gap-6 md:grid-cols-2">
            <div v-for="testimonial in testimonialsData" :key="testimonial.name" class="space-y-2">
              <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                "{{ testimonial.quote }}"
              </p>
              <p class="text-sm font-medium text-neutral-500">
                — {{ testimonial.name }}
              </p>
            </div>
          </div>
        </UCard>
      </div>

      <div v-else class="text-center">
        <UCard class="max-w-md mx-auto">
          <div class="space-y-4 text-center">
            <UIcon name="i-ph-chat-circle" class="mx-auto" />
            <p>No testimonials found.</p>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
