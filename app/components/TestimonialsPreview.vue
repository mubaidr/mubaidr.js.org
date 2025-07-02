<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

// const { count } = defineProps({
//   count: {
//     type: Number,
//     default: -1,
//   },
// })

const { data: testimonials } = await useAsyncData("testimonials-preview", () =>
  queryCollection("testimonials")
    .order("id", "ASC")
    // .where("featured", "=", true)
    // .limit(count)
    .all(),
)

// Carousel state
const currentSlide = ref(0)
const isAutoPlaying = ref(true)
const isPaused = ref(false)
let autoPlayInterval: NodeJS.Timeout | null = null

const nextSlide = () => {
  if (testimonials.value && testimonials.value.length > 0) {
    currentSlide.value = (currentSlide.value + 1) % testimonials.value.length
  }
}

const prevSlide = () => {
  if (testimonials.value && testimonials.value.length > 0) {
    currentSlide.value =
      currentSlide.value === 0
        ? testimonials.value.length - 1
        : currentSlide.value - 1
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
  if (!isPaused.value) {
    autoPlayInterval = setInterval(nextSlide, 5000)
  }
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

const toggleAutoPlay = () => {
  isPaused.value = !isPaused.value
  if (isPaused.value) {
    stopAutoPlay()
  } else {
    startAutoPlay()
  }
}

onMounted(() => {
  if (isAutoPlaying.value) {
    startAutoPlay()
  }
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div class="text-center space-y-6">
      <h2>What Clients Say About Working With Me</h2>

      <p class="max-w-3xl mx-auto">
        Real feedback from satisfied clients who've transformed their businesses
        with custom web solutions
      </p>
    </div>

    <!-- Carousel Container -->
    <div
      v-if="testimonials && testimonials.length > 0"
      class="relative"
      @mouseenter="stopAutoPlay"
      @mouseleave="startAutoPlay"
    >
      <!-- Main Carousel -->
      <div class="overflow-hidden">
        <div class="flex">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="w-full flex-shrink-0 p-4"
          >
            <UCard variant="subtle" class="h-[500px]">
              <div class="h-full flex flex-col space-y-6">
                <!-- Rating Stars -->
                <div v-if="testimonial.rating" class="flex items-center gap-1">
                  <UIcon
                    v-for="star in 5"
                    :key="star"
                    name="i-ph-star-fill"
                    class="w-5 h-5"
                  />
                  <span class="ml-2">{{ testimonial.rating }}/5</span>
                </div>

                <!-- Quote -->
                <div class="relative flex-1">
                  <UIcon
                    name="i-ph-quotes"
                    class="w-10 h-10 absolute -top-2 -left-2"
                  />
                  <p class="italic pl-8">
                    {{ testimonial.quote }}
                  </p>
                </div>

                <!-- Project Results -->
                <div
                  v-if="testimonial.results && testimonial.results.length > 0"
                  class="space-y-3"
                >
                  <h4>Key Results:</h4>
                  <div class="grid grid-cols-2 gap-2">
                    <div
                      v-for="(result, resultIndex) in testimonial.results.slice(
                        0,
                        4,
                      )"
                      :key="resultIndex"
                      class="flex items-center gap-2"
                    >
                      <UIcon
                        name="i-ph-check-circle"
                        class="w-4 h-4 flex-shrink-0"
                      />
                      <span>{{ result }}</span>
                    </div>
                  </div>
                </div>

                <!-- Project Info -->
                <div v-if="testimonial.project" class="p-4">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-ph-briefcase" class="w-5 h-5" />
                    <span>{{ testimonial.project }}</span>
                  </div>
                </div>

                <!-- Author -->
                <div class="flex items-center space-x-4 pt-4 mt-auto">
                  <div
                    v-if="testimonial.avatar"
                    class="w-14 h-14 flex items-center justify-center overflow-hidden flex-shrink-0"
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
                    <UIcon
                      v-if="!testimonial.avatar"
                      name="i-ph-user"
                      class="w-6 h-6"
                    />
                  </div>
                  <div
                    v-else
                    class="w-14 h-14 flex items-center justify-center flex-shrink-0"
                  >
                    <UIcon name="i-ph-user" class="w-6 h-6" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p>
                      {{ testimonial.name }}
                    </p>
                    <p v-if="testimonial.title" class="truncate">
                      {{ testimonial.title }}
                      <span v-if="testimonial.company"
                        >@ {{ testimonial.company }}</span
                      >
                    </p>
                    <UBadge label="Verified Client" class="mt-2" />
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>

      <!-- Auto-play toggle -->
      <button
        class="w-12 h-12 flex items-center justify-center z-10"
        :title="isPaused ? 'Resume auto-play' : 'Pause auto-play'"
        @click="toggleAutoPlay"
      >
        <UIcon :name="isPaused ? 'i-ph-play' : 'i-ph-pause'" class="w-5 h-5" />
      </button>

      <!-- Enhanced Controls -->
      <div class="flex flex-col items-center gap-6 mt-8">
        <!-- Navigation and Dots -->
        <div class="flex items-center gap-6">
          <UButton
            icon="i-ph-caret-left"
            :disabled="testimonials.length <= 1"
            aria-label="Previous testimonial"
            @click="prevSlide"
          />

          <div class="flex items-center gap-2">
            <button
              v-for="(testimonial, index) in testimonials"
              :key="`dot-${index}`"
              :class="[currentSlide === index ? 'w-4 h-4' : 'w-3 h-3']"
              :aria-label="`View testimonial ${index + 1}`"
              @click="goToSlide(index)"
            />
          </div>

          <UButton
            icon="i-ph-caret-right"
            :disabled="testimonials.length <= 1"
            aria-label="Next testimonial"
            @click="nextSlide"
          />
        </div>
      </div>

      <!-- Progress indicator -->
      <div class="mt-6 max-w-sm mx-auto">
        <div class="flex justify-between mb-2">
          <span>{{ currentSlide + 1 }} of {{ testimonials.length }}</span>
          <span v-if="!isPaused" class="flex items-center gap-1">
            <UIcon name="i-ph-play" class="w-4 h-4" />
            Auto-playing
          </span>
        </div>
        <div class="w-full h-2">
          <div
            class="h-2 bg-gray-500"
            :style="{
              width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
            }"
          />
        </div>
      </div>
    </div>

    <div v-else class="text-center">
      <UCard variant="subtle" class="max-w-md mx-auto">
        <div class="space-y-4 text-center">
          <UIcon name="i-ph-chat-circle" class="w-12 h-12 mx-auto" />
          <p>No testimonials found.</p>
        </div>
      </UCard>
    </div>
  </div>
</template>
