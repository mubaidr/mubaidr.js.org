<script setup lang="ts">
const { count } = defineProps({
  count: {
    type: Number,
    default: 3,
  },
})

const { data: testimonials } = await useAsyncData("testimonials-preview", () =>
  queryCollection("testimonials")
    .order("id", "ASC")
    .where("featured", "=", true)
    .limit(count)
    .all(),
)
</script>

<template>
  <div>
    <section class="space-y-8">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Hear from satisfied clients about their experience working with me
        </p>
      </div>

      <div
        v-if="testimonials && testimonials.length > 0"
        class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <UCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="h-full"
          variant="soft"
        >
          <div class="space-y-4">
            <!-- Quote -->
            <div class="relative">
              <UIcon
                name="i-ph-quotes"
                class="w-8 h-8 text-primary-300 dark:text-primary-700 absolute -top-2 -left-2"
              />
              <p class="text-gray-700 dark:text-gray-300 italic pl-6">
                {{ testimonial.quote }}
              </p>
            </div>

            <!-- Author -->
            <div
              class="flex items-center space-x-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
            >
              <div
                v-if="testimonial.avatar"
                class="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center overflow-hidden"
              >
                <img
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="w-full h-full object-cover"
                  @error="(e) => ((e.target as HTMLImageElement).style.display = 'none')"
                />
                <UIcon
                  v-if="!testimonial.avatar"
                  name="i-ph-user"
                  class="w-5 h-5 text-primary"
                />
              </div>
              <div
                v-else
                class="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center"
              >
                <UIcon name="i-ph-user" class="w-5 h-5 text-primary" />
              </div>
              <div>
                <p class="font-semibold text-gray-900 dark:text-gray-100">
                  {{ testimonial.name }}
                </p>
                <UBadge label="Verified Client" variant="soft" size="sm" />
              </div>
            </div>
          </div>
        </UCard>
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

      <div class="text-center">
        <UButton to="/services?testimonials=true" variant="outline" size="lg">
          <UIcon name="i-ph-stamp" />
          View All Testimonials
        </UButton>
      </div>
    </section>
  </div>
</template>
