<script setup lang="ts">
definePageMeta({
  title: "Services - Muhammad Ubaid Raza",
  description:
    "Professional web development services including full-stack development, consulting, and technical leadership.",
})

// Fetch services data using composable
const { data: servicesData } = await useServicesData()

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
</script>

<template>
  <div>
    <div class="space-y-32">
      <!-- Page Header -->
      <div class="text-center space-y-6">
        <h1>Web Development Services</h1>

        <p class="max-w-4xl mx-auto">
          From concept to deployment, I deliver high-quality web solutions that
          drive results and exceed expectations.
        </p>
      </div>

      <!-- Process -->
      <section class="space-y-12">
        <div class="text-center space-y-6">
          <h2>How I Work</h2>

          <p class="max-w-3xl mx-auto">
            A proven 4-step process that ensures successful project delivery and
            exceptional results.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <UCard
            v-for="step in servicesData?.process"
            :key="step.step"
            class="text-center h-full"
          >
            <div class="p-6 space-y-6">
              <!-- Icon -->
              <div class="flex items-center justify-center mx-auto">
                <UIcon :name="step.icon" size="3em" class="text-primary-500" />
              </div>

              <!-- Content -->
              <div class="space-y-3">
                <h3 class="text-xl font-bold">
                  {{ step.title }}
                </h3>
                <p
                  class="text-neutral-600 dark:text-neutral-400 leading-relaxed"
                >
                  {{ step.description }}
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Pricing -->
      <section class="space-y-12">
        <div class="text-center space-y-6">
          <h2>Simple, Transparent Pricing</h2>

          <p class="max-w-3xl mx-auto">
            Choose the package that fits your project needs. No hidden fees, no
            surprises.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <div
            v-for="pkg in servicesData?.packages"
            :key="pkg.name"
            class="h-full transition-transform duration-300"
            :class="pkg.highlighted ? 'md:scale-105 z-10' : ''"
          >
            <UCard
              class="h-full"
              :class="pkg.highlighted ? 'ring-2 ring-primary-500' : ''"
            >
              <div class="space-y-8 py-4">
                <div class="space-y-2">
                  <h3 class="text-2xl font-bold">
                    {{ pkg.name }}
                  </h3>
                  <p class="text-neutral-600 dark:text-neutral-400">
                    {{ pkg.description }}
                  </p>
                </div>

                <ul class="space-y-4 text-left">
                  <li
                    v-for="feature in pkg.features"
                    :key="feature"
                    class="flex items-start gap-3"
                  >
                    <UIcon
                      name="i-ph-check-circle-bold"
                      class="w-5 h-5 shrink-0 text-primary-500"
                    />
                    <span class="text-sm">{{ feature }}</span>
                  </li>
                </ul>

                <UButton
                  to="/contact"
                  :variant="pkg.highlighted ? 'solid' : 'outline'"
                  size="xl"
                  class="w-full justify-center"
                  icon="i-ph-arrow-right-bold"
                  trailing
                >
                  Get Started
                </UButton>
              </div>
            </UCard>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="space-y-12">
        <UCard>
          <div class="text-center space-y-10 py-16 px-8">
            <div class="space-y-4">
              <h2 class="text-3xl md:text-4xl font-bold">
                Let's Build Something Amazing
              </h2>

              <p
                class="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 text-lg"
              >
                Ready to transform your ideas into reality? Let's discuss your
                project and create something extraordinary together.
              </p>
            </div>

            <div
              class="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <UButton
                to="/contact"
                size="xl"
                icon="i-ph-chat-circle-bold"
                class="px-8"
              >
                Start Your Project
              </UButton>

              <UButton
                to="/#testimonials"
                size="xl"
                variant="outline"
                icon="i-ph-users-bold"
                class="px-8"
              >
                See Client Reviews
              </UButton>
            </div>

            <!-- Trust Indicators -->
            <div
              class="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-neutral-100 dark:border-neutral-800"
            >
              <div
                class="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400"
              >
                <UIcon name="i-ph-check-circle-bold" class="text-primary-500" />
                <span>10+ Years Experience</span>
              </div>
              <div
                class="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400"
              >
                <UIcon name="i-ph-check-circle-bold" class="text-primary-500" />
                <span>100% Satisfaction</span>
              </div>
              <div
                class="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400"
              >
                <UIcon name="i-ph-check-circle-bold" class="text-primary-500" />
                <span>24h Response Time</span>
              </div>
            </div>
          </div>
        </UCard>
      </section>
    </div>
  </div>
</template>
