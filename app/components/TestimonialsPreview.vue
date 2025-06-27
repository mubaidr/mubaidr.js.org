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
  <div>
    <section class="space-y-12">
      <div class="text-center space-y-6">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
        >
          <UIcon name="i-ph-chat-circle" class="w-4 h-4 text-primary" />
          <span class="text-sm font-medium text-primary"
            >Client Testimonials</span
          >
        </div>

        <h2
          class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
        >
          What Clients Say About Working With Me
        </h2>

        <p
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Real feedback from satisfied clients who've transformed their
          businesses with custom web solutions
        </p>
      </div>

      <!-- Carousel Container -->
      <div
        v-if="testimonials && testimonials.length > 0"
        class="relative max-w-4xl mx-auto"
        @mouseenter="stopAutoPlay"
        @mouseleave="startAutoPlay"
      >
        <!-- Main Carousel -->
        <div class="overflow-hidden rounded-2xl">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.id"
              class="w-full flex-shrink-0 px-4"
            >
              <UCard
                class="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                variant="soft"
              >
                <div class="space-y-4">
                  <!-- Rating Stars -->
                  <div
                    v-if="testimonial.rating"
                    class="flex items-center gap-1"
                  >
                    <UIcon
                      v-for="star in 5"
                      :key="star"
                      name="i-ph-star-fill"
                      :class="
                        star <= testimonial.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      "
                      class="w-4 h-4"
                    />
                    <span class="text-sm text-gray-500 ml-2"
                      >{{ testimonial.rating }}/5</span
                    >
                  </div>

                  <!-- Quote -->
                  <div class="relative">
                    <UIcon
                      name="i-ph-quotes"
                      class="w-8 h-8 text-primary-300 dark:text-primary-700 absolute -top-2 -left-2"
                    />
                    <p
                      class="text-gray-700 dark:text-gray-300 italic pl-6 leading-relaxed"
                    >
                      {{ testimonial.quote }}
                    </p>
                  </div>

                  <!-- Project Results -->
                  <div
                    v-if="testimonial.results && testimonial.results.length > 0"
                    class="space-y-2"
                  >
                    <h4
                      class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      Key Results:
                    </h4>
                    <div class="grid grid-cols-2 gap-2">
                      <div
                        v-for="(result, index) in testimonial.results.slice(
                          0,
                          4,
                        )"
                        :key="index"
                        class="flex items-center gap-1 text-xs"
                      >
                        <UIcon
                          name="i-ph-check-circle"
                          class="w-3 h-3 text-green-500 flex-shrink-0"
                        />
                        <span class="text-gray-600 dark:text-gray-400">{{
                          result
                        }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Project Info -->
                  <div
                    v-if="testimonial.project"
                    class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-3"
                  >
                    <div class="flex items-center gap-2 mb-1">
                      <UIcon
                        name="i-ph-briefcase"
                        class="w-4 h-4 text-primary"
                      />
                      <span class="text-sm font-medium text-primary">{{
                        testimonial.project
                      }}</span>
                    </div>
                  </div>

                  <!-- Author -->
                  <div
                    class="flex items-center space-x-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div
                      v-if="testimonial.avatar"
                      class="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center overflow-hidden rounded-full"
                    >
                      <img
                        :src="testimonial.avatar"
                        :alt="testimonial.name"
                        class="w-full h-full object-cover rounded-full"
                        @error="
                          (e) =>
                            ((e.target as HTMLImageElement).style.display =
                              'none')
                        "
                      />
                      <UIcon
                        v-if="!testimonial.avatar"
                        name="i-ph-user"
                        class="w-5 h-5 text-primary"
                      />
                    </div>
                    <div
                      v-else
                      class="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center rounded-full"
                    >
                      <UIcon name="i-ph-user" class="w-5 h-5 text-primary" />
                    </div>
                    <div class="flex-1">
                      <p class="font-semibold text-gray-900 dark:text-gray-100">
                        {{ testimonial.name }}
                      </p>
                      <p
                        v-if="testimonial.title"
                        class="text-sm text-gray-600 dark:text-gray-400"
                      >
                        {{ testimonial.title }}
                        <span v-if="testimonial.company" class="text-primary"
                          >@ {{ testimonial.company }}</span
                        >
                      </p>
                      <UBadge
                        label="Verified Client"
                        variant="soft"
                        size="sm"
                        class="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>

        

        <!-- Auto-play toggle -->
        <button
          @click="toggleAutoPlay"
          class="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-lg group"
          :title="isPaused ? 'Resume auto-play' : 'Pause auto-play'"
        >
          <UIcon
            :name="isPaused ? 'i-ph-play' : 'i-ph-pause'"
            class="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors duration-300"
          />
        </button>

        <!-- Enhanced Controls -->
        <div class="flex flex-col items-center gap-4 mt-8">
          <!-- Navigation and Dots -->
          <div class="flex items-center gap-4">
            <UButton
              @click="prevSlide"
              icon="i-ph-caret-left"
              size="sm"
              color="gray"
              variant="ghost"
              class="rounded-full hover:scale-110 transition-transform duration-300"
              :disabled="testimonials.length <= 1"
              aria-label="Previous testimonial"
            />

            <div class="flex items-center gap-3">
              <button
                v-for="(testimonial, index) in testimonials"
                :key="`dot-${index}`"
                @click="goToSlide(index)"
                :class="[
                  'transition-all duration-300 rounded-full border-2',
                  currentSlide === index
                    ? 'w-3 h-3 bg-primary border-primary scale-125 shadow-lg'
                    : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 border-gray-300 dark:border-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:border-gray-400 dark:hover:border-gray-500 hover:scale-110',
                ]"
                :aria-label="`View testimonial ${index + 1}`"
              />
            </div>

            <UButton
              @click="nextSlide"
              icon="i-ph-caret-right"
              size="sm"
              color="gray"
              variant="ghost"
              class="rounded-full hover:scale-110 transition-transform duration-300"
              :disabled="testimonials.length <= 1"
              aria-label="Next testimonial"
            />
          </div>
        </div>

        <!-- Progress indicator -->
        <div class="mt-4 max-w-xs mx-auto">
          <div
            class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1"
          >
            <span>{{ currentSlide + 1 }} of {{ testimonials.length }}</span>
            <span v-if="!isPaused" class="flex items-center gap-1">
              <UIcon name="i-ph-play" class="w-3 h-3" />
              Auto-playing
            </span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
            <div
              class="bg-primary h-1 rounded-full transition-all duration-300"
              :style="{
                width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
              }"
            />
          </div>
        </div>
      </div>

      <div v-else class="text-center">
        <UCard variant="soft" class="max-w-md mx-auto">
          <div class="space-y-4 text-center">
            <UIcon
              name="i-ph-chat-circle"
              class="w-12 h-12 text-gray-400 mx-auto"
            />
            <p class="text-gray-600 dark:text-gray-400">
              No testimonials found.
            </p>
          </div>
        </UCard>
      </div>

      
    </section>
  </div>
</template>
