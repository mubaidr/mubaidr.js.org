<script lang="ts" setup>
import "vue3-carousel/carousel.css"
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"

const carouselConfig = {
  autoplay: 5000,
  itemsToShow: 1,
  wrapAround: true,
  gap: 16,
}

const { data: testimonials } = useAsyncData("testimonials", async () => {
  return queryCollection("testimonials").all()
})
</script>

<template>
  <div class="not-prose">
    <Carousel v-bind="carouselConfig">
      <Slide
        v-for="testimonial in testimonials"
        :key="testimonial.name"
      >
        <div
          class="carousel__item bg-amber-100 dark:bg-stone-700 px-6 md:px-12 py-3 md:py-6 bg-opacity-75 rounded-xl w-full justify-center text-center"
        >
          <p class="text-lg md:text-xl font-light mb-6">
            {{ testimonial.quote }}
          </p>

          <div>
            <div class="text-center">
              <template v-if="testimonial.avatar">
                <img
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="w-16 h-16 rounded mx-auto my-0"
                />
              </template>
              <template v-else>
                <div
                  class="w-16 h-16 rounded bg-amber-600 text-stone-50 text-5xl font-semibold text-center justify-center align-middle content-center mx-auto"
                >
                  {{ testimonial.name[0] }}
                </div>
              </template>
            </div>
            <span>{{ testimonial.name }}</span>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <!-- <Pagination /> -->
      </template>
    </Carousel>
  </div>
</template>
