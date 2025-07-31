<script setup lang="ts">
const { data: testimonials } = await useAsyncData("testimonials-preview", () =>
  queryCollection("testimonials").order("id", "ASC").all(),
)

const isPaused = ref(false)

function togglePause() {
  isPaused.value = !isPaused.value
}
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

      <!-- Carousel Container using Nuxt UI UCarousel -->
      <div v-if="testimonials && testimonials.length > 0" class="relative">
        <UButton
          class="absolute right-2 top-2 z-10 md:right-4 md:top-4"
          :title="isPaused ? 'Resume auto-play' : 'Pause auto-play'"
          variant="soft"
          color="neutral"
          @click="togglePause"
        >
          <UIcon :name="isPaused ? 'i-ph-play' : 'i-ph-pause'" />
        </UButton>

        <UCard class="p-4 sm:p-6 md:p-8">
          <UCarousel
            v-slot="{ item: testimonial }"
            :items="testimonials"
            fade
            arrows
            dots
            loop
            :autoplay="isPaused ? false : true"
            class="w-full"
            :prev="{ variant: 'soft' }"
            :next="{ variant: 'soft' }"
          >
            <div class="p-2 sm:p-4 md:p-8">
              <div class="h-full flex flex-col justify-between">
                <div>
                  <!-- Rating Stars -->
                  <div
                    v-if="testimonial.rating"
                    class="flex items-center gap-1 mb-3 sm:mb-4"
                  >
                    <UIcon
                      v-for="star in 5"
                      :key="star"
                      name="i-ph-star-fill"
                      class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    />
                    <span
                      class="ml-2 text-neutral-600 dark:text-neutral-300 text-[10px] sm:text-xs"
                      >{{ testimonial.rating }}/5</span
                    >
                  </div>

                  <!-- Quote -->
                  <div class="relative mb-4 sm:mb-6">
                    <p class="text-sm sm:text-base leading-relaxed">
                      {{ testimonial.quote }}
                    </p>
                  </div>

                  <!-- Project Results -->
                  <div
                    v-if="testimonial.results && testimonial.results.length > 0"
                    class="space-y-2 sm:space-y-3 mb-4 sm:mb-6"
                  >
                    <h3 class="text-sm sm:text-base font-semibold">
                      Key Results:
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <div
                        v-for="(
                          result, resultIndex
                        ) in testimonial.results.slice(0, 4)"
                        :key="resultIndex"
                        class="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm"
                      >
                        <UIcon
                          name="i-ph-check-circle"
                          class="w-4 h-4 flex-shrink-0 text-primary-500"
                        />
                        <span>{{ result }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Project Info -->
                  <div v-if="testimonial.project" class="mb-4 sm:mb-6">
                    <div
                      class="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm"
                    >
                      <UIcon
                        name="i-ph-briefcase"
                        class="w-5 h-5 text-primary-500"
                      />
                      <span>{{ testimonial.project }}</span>
                    </div>
                  </div>
                </div>

                <!-- Author -->
                <div
                  class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto"
                >
                  <div
                    v-if="testimonial.avatar"
                    class="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center overflow-hidden rounded-full flex-shrink-0 shadow-sm mb-2 sm:mb-0"
                  >
                    <img
                      :src="testimonial.avatar"
                      :alt="testimonial.name"
                      class="w-full h-full object-cover"
                      @error="
                        (e) =>
                          ((e.target as HTMLImageElement).style.display =
                            'none')
                      "
                    />
                    <UIcon v-if="!testimonial.avatar" name="i-ph-user" />
                  </div>
                  <div
                    v-else
                    class="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full flex-shrink-0 shadow-sm mb-2 sm:mb-0"
                  >
                    <UIcon name="i-ph-user" />
                  </div>
                  <div class="flex-1 min-w-0 text-center sm:text-left">
                    <p class="font-semibold">
                      {{ testimonial.name }}
                    </p>
                    <p
                      v-if="testimonial.title"
                      class="truncate text-[10px] sm:text-xs"
                    >
                      {{ testimonial.title }}
                      <span v-if="testimonial.company"
                        >@ {{ testimonial.company }}</span
                      >
                    </p>
                    <UBadge
                      label="Verified Client"
                      class="mt-2"
                      color="success"
                    />
                  </div>
                </div>
              </div>
            </div>
          </UCarousel>
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
