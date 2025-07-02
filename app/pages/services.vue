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
            variant="subtle"
            v-for="(step, index) in servicesData?.process"
            :key="step.step"
            class="relative text-center"
          >
            <div class="absolute inset-0" />
            <div class="relative p-6 h-full">
              <!-- Step Number -->
              <div
                class="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center"
              >
                {{ index + 1 }}
              </div>

              <!-- Icon -->
              <div class="relative mb-6">
                <div
                  class="w-16 h-16 flex items-center justify-center mx-auto mb-4"
                >
                  <UIcon :name="step.icon" class="w-8 h-8" />
                </div>
              </div>

              <!-- Content -->
              <h3 class="mb-3">
                {{ step.title }}
              </h3>
              <p>
                {{ step.description }}
              </p>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="space-y-12">
        <div class="text-center space-y-6">
          <h2>What I Deliver</h2>

          <p class="max-w-3xl mx-auto">
            Comprehensive web development services tailored to your specific
            needs and business goals.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <div
            v-for="service in servicesData?.services"
            :key="service.id"
            class="relative h-full"
          >
            <div class="absolute inset-0" />
            <UCard variant="subtle" class="relative h-full">
              <div class="space-y-6">
                <!-- Service Header -->
                <div class="flex items-start gap-4">
                  <div
                    class="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  >
                    <UIcon :name="service.icon" class="w-6 h-6" />
                  </div>
                  <div class="flex-1">
                    <h3 class="mb-2">
                      {{ service.title }}
                    </h3>
                    <p>
                      {{ service.description }}
                    </p>
                  </div>
                </div>

                <!-- Key Features (simplified) -->
                <div>
                  <h4 class="mb-3">Key Features:</h4>
                  <ul class="space-y-2">
                    <li
                      v-for="feature in service.features?.slice(0, 4)"
                      :key="feature"
                      class="flex items-start gap-2"
                    >
                      <UIcon
                        name="i-ph-check-circle"
                        class="w-4 h-4 flex-shrink-0 mt-0.5"
                      />
                      {{ feature }}
                    </li>
                  </ul>
                </div>

                <!-- Timeline (simplified) -->
                <div class="flex items-center gap-2 pt-4">
                  <UIcon name="i-ph-clock" class="w-4 h-4" />
                  <span>Timeline:</span>
                  <span>{{ service.timeline }}</span>
                </div>
              </div>
            </UCard>
          </div>
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
            class="relative h-full"
            :class="pkg.highlighted ? 'scale-105' : ''"
          >
            <div v-if="pkg.highlighted" class="absolute inset-0" />
            <div v-else class="absolute inset-0" />

            <UCard :variant="pkg.highlighted ? 'solid' : 'subtle'">
              <div class="space-y-6">
                <div class="pt-4">
                  <h3 class="mb-2">
                    {{ pkg.name }}
                  </h3>
                  <p>
                    {{ pkg.description }}
                  </p>
                </div>

                <ul class="space-y-3 text-left">
                  <li
                    v-for="feature in pkg.features"
                    :key="feature"
                    class="flex items-start gap-2"
                  >
                    <UIcon
                      name="i-ph-check-circle"
                      class="w-4 h-4 flex-shrink-0 mt-0.5"
                    />
                    <span>{{ feature }}</span>
                  </li>
                </ul>

                <UButton
                  to="/contact"
                  :variant="pkg.highlighted ? 'solid' : 'outline'"
                  size="lg"
                  class="w-full"
                >
                  Get Started
                  <UIcon name="i-ph-arrow-right" class="ml-2" />
                </UButton>
              </div>
            </UCard>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="space-y-12">
        <div class="overflow-hidden">
          <!-- Background Elements -->
          <div />
          <div />
          <div />

          <div class="text-center space-y-8 py-16 px-8">
            <div class="space-y-6">
              <h2>Let's Build Something Amazing</h2>

              <p class="max-w-3xl mx-auto">
                Ready to transform your ideas into reality? Let's discuss your
                project and create something extraordinary together.
              </p>
            </div>

            <div
              class="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <UButton to="/contact" size="xl" variant="solid">
                <UIcon name="i-ph-chat-circle" />
                Start Your Project
              </UButton>

              <UButton to="/#testimonials" size="xl" variant="outline">
                <UIcon name="i-ph-users" />
                See Client Reviews
              </UButton>
            </div>

            <!-- Trust Indicators -->
            <div class="flex flex-wrap justify-center items-center gap-8 pt-8">
              <div class="flex items-center gap-2">
                <UIcon name="i-ph-check-circle" class="w-4 h-4" />
                <span>10+ Years Experience</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-ph-check-circle" class="w-4 h-4" />
                <span>100% Client Satisfaction</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-ph-check-circle" class="w-4 h-4" />
                <span>24h Response Time</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
