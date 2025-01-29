<script lang="ts" setup>
import "vue3-carousel/carousel.css"
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"

const carouselConfig = {
  autoplay: 2500,
  itemsToShow: 1,
  wrapAround: true,
  gap: 16,
}

const { data: testimonials } = useAsyncData("testimonials", async () => {
  return queryCollection("testimonials").all()
})
</script>

<template>
  <div>
    <Carousel v-bind="carouselConfig">
      <Slide
        v-for="testimonial in testimonials"
        :key="testimonial.name"
      >
        <div
          class="carousel__item bg-amber-100 px-6 md:px-12 py-3 md:py-6 bg-opacity-75 rounded w-full justify-center text-center"
        >
          <p>
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
                  class="w-16 h-16 rounded bg-amber-600 text-stone-50 text-3xl font-semibold text-center justify-center align-middle mx-auto"
                >
                  {{ testimonial.name[0] }}
                </div>
              </template>
            </div>
            <span class="font-semibold">{{ testimonial.name }}</span>
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
