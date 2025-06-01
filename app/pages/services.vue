<script setup lang="ts">
definePageMeta({
  title: "Services - Muhammad Ubaid Raza",
  description:
    "Professional web development services including full-stack development, consulting, and technical leadership.",
})

// Fetch services data from Nuxt Content collection
const { data: servicesData } = await useAsyncData("services", () => {
  return queryCollection("services").first()
})

const { data: testimonials } = await useAsyncData("testimonials", () =>
  queryCollection("testimonials").order("id", "ASC").all(),
)

useHead({
  title: "Services - Muhammad Ubaid Raza",
  meta: [
    {
      name: "description",
      content:
        "Professional web development services including full-stack development, consulting, and technical leadership.",
    },
  ],
})

// If the page was accessed via a link with `?faqs=true`, scroll to FAQs section
onMounted(() => {
  const {
    query: { testimonials: isTestimonialsLink = false },
  } = useRoute()

  if (isTestimonialsLink) {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  }
})
</script>

<template>
  <div>
    <div class="space-y-24">
      <!-- Page Header -->
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Services</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Professional web development services to help bring your ideas to life
        </p>
      </div>

      <!-- Process -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">How I Work</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A proven process that ensures successful project delivery
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="step in servicesData?.process"
            :key="step.step"
            class="text-center"
          >
            <div class="relative mb-6">
              <div
                class="w-16 h-16 bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto mb-4"
              >
                <UIcon :name="step.icon" class="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 class="text-lg font-semibold mb-2">
              {{ step.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              {{ step.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="space-y-8">
        <h2 class="text-3xl font-bold text-center mb-8">What I Offer</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I provide a range of web development services tailored to meet your
          specific needs, from full-stack development to consulting and
          technical leadership.
        </p>

        <div class="grid gap-8 md:grid-cols-2">
          <UCard
            v-for="service in servicesData?.services"
            :key="service.id"
            class="h-full"
            variant="soft"
          >
            <div class="space-y-6">
              <!-- Service Header -->
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 flex items-center justify-center"
                >
                  <UIcon :name="service.icon" class="w-6 h-6 text-primary" />
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold mb-2">
                    {{ service.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ service.description }}
                  </p>
                </div>
              </div>

              <!-- Features -->
              <div>
                <h4 class="font-semibold mb-3">Includes:</h4>
                <ul class="space-y-2">
                  <li
                    v-for="feature in service.features"
                    :key="feature"
                    class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <UIcon
                      name="i-ph-check"
                      class="w-4 h-4 text-primary flex-shrink-0"
                    />
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Service Details -->
              <div
                class="flex flex-wrap gap-4 pt-4 border-t border-neutral-200/50 dark:border-neutral-700/50"
              >
                <div class="text-sm">
                  <span class="font-medium">Timeline:</span>
                  <span class="text-gray-600 dark:text-gray-400 ml-1">{{
                    service.timeline
                  }}</span>
                </div>
                <div class="text-sm">
                  <span class="font-medium">Best for:</span>
                  <span class="text-gray-600 dark:text-gray-400 ml-1">{{
                    service.suitable
                  }}</span>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Pricing -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Pricing</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <UCard
            v-for="pkg in servicesData?.packages"
            :key="pkg.name"
            :class="[
              'h-full text-center',
              pkg.highlighted ? 'ring-2 ring-primary-500 scale-105' : '',
            ]"
            :variant="pkg.highlighted ? 'outline' : 'soft'"
          >
            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-bold mb-2">{{ pkg.name }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mt-2">
                  {{ pkg.description }}
                </p>
              </div>

              <ul class="space-y-3 text-left">
                <li
                  v-for="feature in pkg.features"
                  :key="feature"
                  class="flex items-center gap-2 text-sm"
                >
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-primary flex-shrink-0"
                  />
                  {{ feature }}
                </li>
              </ul>

              <UButton
                to="/contact"
                :variant="pkg.highlighted ? 'subtle' : 'soft'"
                size="xl"
                class="w-full"
              >
                Get Started
              </UButton>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Testimonials -->
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
                class="flex items-center space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700"
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
      </section>
    </div>
  </div>
</template>
