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
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-32 py-16">
        <!-- Page Header -->
        <div class="text-center space-y-6">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
          >
            <UIcon name="i-ph-briefcase" class="w-4 h-4 text-primary" />
            <span class="text-sm font-medium text-primary"
              >Professional Services</span
            >
          </div>

          <h1
            class="text-3xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
          >
            Web Development Services
          </h1>

          <p
            class="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            From concept to deployment, I deliver high-quality web solutions
            that drive results and exceed expectations.
          </p>
        </div>

        <!-- Process -->
        <section class="space-y-12">
          <div class="text-center space-y-6">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <UIcon name="i-ph-flow-arrow" class="w-4 h-4 text-primary" />
              <span class="text-sm font-medium text-primary">My Process</span>
            </div>

            <h2
              class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
            >
              How I Work
            </h2>

            <p
              class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              A proven 4-step process that ensures successful project delivery
              and exceptional results.
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="(step, index) in servicesData?.process"
              :key="step.step"
              class="group relative text-center"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-500 opacity-0 group-hover:opacity-100"
              ></div>
              <div class="relative p-6 h-full">
                <!-- Step Number -->
                <div
                  class="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold"
                >
                  {{ index + 1 }}
                </div>

                <!-- Icon -->
                <div class="relative mb-6">
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    <UIcon :name="step.icon" class="w-8 h-8 text-primary" />
                  </div>
                </div>

                <!-- Content -->
                <h3
                  class="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100"
                >
                  {{ step.title }}
                </h3>
                <p
                  class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                >
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Services Grid -->
        <section class="space-y-12">
          <div class="text-center space-y-6">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <UIcon name="i-ph-stack" class="w-4 h-4 text-primary" />
              <span class="text-sm font-medium text-primary"
                >Service Offerings</span
              >
            </div>

            <h2
              class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
            >
              What I Deliver
            </h2>

            <p
              class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive web development services tailored to your specific
              needs and business goals.
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-2">
            <div
              v-for="service in servicesData?.services"
              :key="service.id"
              class="group relative h-full"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue/5 to-purple/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-500 opacity-0 group-hover:opacity-100"
              ></div>
              <UCard
                variant="soft"
                class="relative h-full border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:border-blue/20 dark:hover:border-blue/30 transition-all duration-500 transform group-hover:-translate-y-1"
              >
                <div class="space-y-6">
                  <!-- Service Header -->
                  <div class="flex items-start gap-4">
                    <div
                      class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    >
                      <UIcon
                        :name="service.icon"
                        class="w-6 h-6 text-primary"
                      />
                    </div>
                    <div class="flex-1">
                      <h3
                        class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100"
                      >
                        {{ service.title }}
                      </h3>
                      <p
                        class="text-gray-600 dark:text-gray-400 leading-relaxed"
                      >
                        {{ service.description }}
                      </p>
                    </div>
                  </div>

                  <!-- Key Features (simplified) -->
                  <div>
                    <h4
                      class="font-semibold mb-3 text-gray-900 dark:text-gray-100"
                    >
                      Key Features:
                    </h4>
                    <ul class="space-y-2">
                      <li
                        v-for="feature in service.features?.slice(0, 4)"
                        :key="feature"
                        class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <UIcon
                          name="i-ph-check-circle"
                          class="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                        />
                        {{ feature }}
                      </li>
                    </ul>
                  </div>

                  <!-- Timeline (simplified) -->
                  <div
                    class="flex items-center gap-2 pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
                  >
                    <UIcon name="i-ph-clock" class="w-4 h-4 text-primary" />
                    <span
                      class="text-sm font-medium text-gray-900 dark:text-gray-100"
                      >Timeline:</span
                    >
                    <span class="text-sm text-gray-600 dark:text-gray-400">{{
                      service.timeline
                    }}</span>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </section>

        <!-- Pricing -->
        <section class="space-y-12">
          <div class="text-center space-y-6">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <UIcon name="i-ph-currency-dollar" class="w-4 h-4 text-primary" />
              <span class="text-sm font-medium text-primary"
                >Investment Options</span
              >
            </div>

            <h2
              class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
            >
              Simple, Transparent Pricing
            </h2>

            <p
              class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Choose the package that fits your project needs. No hidden fees,
              no surprises.
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-3">
            <div
              v-for="pkg in servicesData?.packages"
              :key="pkg.name"
              class="group relative h-full"
              :class="pkg.highlighted ? 'scale-105' : ''"
            >
              <div
                v-if="pkg.highlighted"
                class="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue/10 rounded-2xl"
              ></div>
              <div
                v-else
                class="absolute inset-0 bg-gradient-to-r from-purple/5 to-primary/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-500 opacity-0 group-hover:opacity-100"
              ></div>

              <UCard
                :variant="pkg.highlighted ? 'outline' : 'soft'"
                :class="[
                  'relative h-full text-center border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-500',
                  pkg.highlighted
                    ? 'ring-2 ring-primary/50 border-primary/20 dark:border-primary/30 shadow-2xl'
                    : 'hover:shadow-2xl hover:border-purple/20 dark:hover:border-purple/30 transform group-hover:-translate-y-1',
                ]"
              >
                <!-- Popular Badge -->
                <div
                  v-if="pkg.highlighted"
                  class="absolute -top-3 left-1/2 transform -translate-x-1/2"
                >
                  <UBadge
                    label="Most Popular"
                    variant="solid"
                    color="primary"
                  />
                </div>

                <div class="space-y-6">
                  <div class="pt-4">
                    <h3
                      class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100"
                    >
                      {{ pkg.name }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {{ pkg.description }}
                    </p>
                  </div>

                  <ul class="space-y-3 text-left">
                    <li
                      v-for="feature in pkg.features"
                      :key="feature"
                      class="flex items-start gap-2 text-sm"
                    >
                      <UIcon
                        name="i-ph-check-circle"
                        class="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                      />
                      <span class="text-gray-600 dark:text-gray-400">{{
                        feature
                      }}</span>
                    </li>
                  </ul>

                  <UButton
                    to="/contact"
                    :variant="pkg.highlighted ? 'solid' : 'outline'"
                    size="lg"
                    class="w-full"
                    :class="
                      pkg.highlighted ? 'bg-primary hover:bg-primary-600' : ''
                    "
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
          <div class="relative overflow-hidden">
            <!-- Background Elements -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue/5 to-purple/5 rounded-3xl"
            ></div>
            <div
              class="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
            ></div>
            <div
              class="absolute bottom-10 right-10 w-24 h-24 bg-blue/10 rounded-full blur-3xl"
            ></div>

            <div class="relative text-center space-y-8 py-16 px-8">
              <div class="space-y-6">
                <div
                  class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
                >
                  <UIcon
                    name="i-ph-rocket-launch"
                    class="w-4 h-4 text-primary"
                  />
                  <span class="text-sm font-medium text-primary"
                    >Ready to Start?</span
                  >
                </div>

                <h2
                  class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
                >
                  Let's Build Something Amazing
                </h2>

                <p
                  class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
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
                  variant="solid"
                  class="bg-primary hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <UIcon name="i-ph-chat-circle" />
                  Start Your Project
                </UButton>

                <UButton
                  to="/#testimonials"
                  size="xl"
                  variant="outline"
                  class="hover:scale-105 transition-transform duration-300"
                >
                  <UIcon name="i-ph-users" />
                  See Client Reviews
                </UButton>
              </div>

              <!-- Trust Indicators -->
              <div
                class="flex flex-wrap justify-center items-center gap-8 pt-8 text-sm text-gray-500 dark:text-gray-400"
              >
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-ph-check-circle"
                    class="w-4 h-4 text-green-500"
                  />
                  <span>10+ Years Experience</span>
                </div>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-ph-check-circle"
                    class="w-4 h-4 text-green-500"
                  />
                  <span>100% Client Satisfaction</span>
                </div>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-ph-check-circle"
                    class="w-4 h-4 text-green-500"
                  />
                  <span>24h Response Time</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
