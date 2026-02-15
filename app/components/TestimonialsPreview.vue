<script setup lang="ts">
// Fetch testimonials using composable
const { data: testimonialsData } = await useTestimonialsData()
</script>

<template>
  <div>
    <div class="space-y-12">
      <div class="text-center space-y-6">
        <h2>What Clients Say About Working With Me</h2>
        <p class="max-w-3xl mx-auto">
          Real feedback from satisfied clients who've transformed their
          businesses with custom web solutions
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div v-if="testimonialsData && testimonialsData.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UCard v-for="testimonial in testimonialsData" :key="testimonial.name" class="h-full">
          <div class="flex flex-col h-full space-y-4">
            <!-- Header: Rating and Quote -->
            <div class="space-y-3">
              <!-- Rating -->
              <!-- <div class="flex justify-center pb-4">
              <div v-if="testimonial.rating" class="flex items-center gap-1">
                <UIcon v-for="star in 5" :key="star" name="i-ph-star-fill" class="w-5 h-5 text-yellow-400" />
              </div>
              </div> -->

              <!-- Quote -->
              <p class="text-base leading-relaxed text-neutral-700 dark:text-neutral-200">
                "{{ testimonial.quote }}"
              </p>
            </div>

            <!-- Results as Badges -->
            <div v-if="testimonial.results && testimonial.results.length > 0" class="flex flex-wrap gap-2">
              <UBadge v-for="(result, index) in testimonial.results.slice(0, 3)" :key="index" :label="result"
                variant="subtle" color="primary" size="sm" />
              <UBadge v-if="testimonial.results.length > 3" :label="`+${testimonial.results.length - 3} more`"
                variant="soft" color="neutral" size="sm" />
            </div>

            <!-- Project Info -->
            <div v-if="testimonial.project" class="flex items-center gap-2 text-sm">
              <UIcon name="i-ph-briefcase" class="w-4 h-4 text-primary-500" />
              <span class="text-neutral-600 dark:text-neutral-300">{{
                testimonial.project
              }}</span>
            </div>

            <!-- Spacer -->
            <div class="flex-1" />

            <!-- Author Section -->
            <div class="flex items-start gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <div v-if="testimonial.avatar"
                class="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full shrink-0 border border-neutral-200 dark:border-neutral-800">
                <NuxtImg :src="testimonial.avatar" :alt="testimonial.name" width="40" height="40"
                  class="w-full h-full object-cover" placeholder format="webp" />
              </div>
              <div v-else
                class="w-10 h-10 flex items-center justify-center rounded-full shrink-0 bg-neutral-100 dark:bg-neutral-800">
                <UIcon name="i-ph-user-bold" class="w-5 h-5 text-neutral-400" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-semibold text-sm text-neutral-900 dark:text-white">
                  {{ testimonial.name }}
                </p>
                <p v-if="testimonial.title" class="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                  {{ testimonial.title }}
                  <span v-if="testimonial.company">
                    @ {{ testimonial.company }}</span>
                </p>
              </div>
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
