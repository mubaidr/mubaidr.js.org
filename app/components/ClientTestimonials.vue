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
  <div>
    <h2>💬 What Clients Say About My Work</h2>
    <div
      class="not-prose border-t-2 border-b-2 border-amber-700 bg-amber-700 bg-opacity-5"
    >
      <Carousel v-bind="carouselConfig">
        <Slide
          v-for="testimonial in testimonials"
          :key="testimonial.name"
        >
          <div
            class="carousel__item px-6 md:px-12 py-3 md:py-6 w-full text-center"
          >
            <p class="mb-6 text-lg">
              <q>{{ testimonial.quote }}</q>
            </p>

            <div>
              <div>
                <template v-if="testimonial.avatar">
                  <img
                    :src="testimonial.avatar"
                    :alt="testimonial.name"
                    class="w-16 h-16 rounded mx-auto my-0"
                  />
                </template>
                <template v-else>
                  <div
                    class="w-16 h-16 rounded bg-amber-700 text-stone-50 text-5xl font-semibold text-center justify-center align-middle content-center mx-auto"
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
  </div>
</template>
