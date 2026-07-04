<script setup lang="ts">
// Fetch testimonials using composable
const { data: testimonialsData } = await useTestimonialsData()
</script>

<template>
  <div>
    <div class="space-y-12">
      <div class="text-center space-y-4">
        <h2>What People Say</h2>
        <p class="">Trusted by teams and leaders worldwide</p>
      </div>

      <!-- Testimonials Grid -->
      <div
        v-if="testimonialsData && testimonialsData.length > 0"
        class="grid gap-6 md:grid-cols-3"
      >
        <UPageCard
          v-for="testimonial in testimonialsData.slice(0, 3)"
          :key="testimonial.name"
          variant="subtle"
        >
          <div class="space-y-4 text-center">
            <p>"{{ testimonial.quote }}"</p>
            <p>- {{ testimonial.name }}</p>
          </div>
        </UPageCard>
      </div>
    </div>
  </div>
</template>
