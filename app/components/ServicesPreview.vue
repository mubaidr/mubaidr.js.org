<script lang="ts" setup>
// Fetch services data
const { data: servicesPreview } = await useAsyncData(
  "services-preview",
  async () => {
    const data = await queryCollection("services").first()
    return data?.services.slice(0, 3)
  },
)
</script>

<template>
  <div>
    <!-- Services Preview Section -->
    <section class="space-y-12">
      <div class="text-center space-y-6">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
        >
          <UIcon name="i-ph-briefcase" class="w-4 h-4 text-primary" />
          <span class="text-sm font-medium text-primary"
            >Services & Pricing</span
          >
        </div>

        <h2
          class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
        >
          Professional Web Development Services
        </h2>

        <p
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Transparent pricing for professional web development services. No
          hidden fees, no surprises.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <UCard
          v-for="service in servicesPreview"
          :key="service.title"
          class="text-center h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
          variant="soft"
        >
          <!-- Popular Badge -->
          <div v-if="service.featured" class="absolute top-4 right-4">
            <UBadge
              label="Most Popular"
              variant="solid"
              size="sm"
              class="bg-gradient-to-r from-primary-500 to-primary-600"
            />
          </div>

          <div class="space-y-4">
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center mx-auto rounded-xl group-hover:scale-110 transition-transform duration-300"
            >
              <UIcon :name="service.icon" class="w-8 h-8 text-primary" />
            </div>
            <h3 class="text-xl font-semibold">{{ service.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Pricing Information -->
            <div
              v-if="service.pricing"
              class="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg p-4 space-y-2"
            >
              <div class="text-3xl font-bold text-primary">
                ${{ service.pricing.hourly }}
                <span
                  class="text-sm font-normal text-gray-600 dark:text-gray-400"
                  >/hour</span
                >
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                {{ service.timeline }} | {{ service.suitable }}
              </div>
              <div
                class="text-xs text-green-600 dark:text-green-400 font-medium"
              >
                Free consultation included
              </div>
            </div>

            <!-- Key Features -->
            <div v-if="service.features" class="text-left space-y-2">
              <h4
                class="text-sm font-semibold text-gray-900 dark:text-gray-100 text-center"
              >
                What's Included:
              </h4>
              <ul class="space-y-1">
                <li
                  v-for="(feature, index) in service.features.slice(0, 3)"
                  :key="index"
                  class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                >
                  <UIcon
                    name="i-ph-check"
                    class="w-3 h-3 text-green-500 flex-shrink-0"
                  />
                  <span>{{ feature }}</span>
                </li>
              </ul>
              <div v-if="service.features.length > 3" class="text-center">
                <span
                  class="text-xs text-primary cursor-pointer hover:underline"
                  >+{{ service.features.length - 3 }} more features</span
                >
              </div>
            </div>

            <!-- CTA Button -->
            <UButton
              to="/contact"
              variant="solid"
              size="sm"
              class="w-full group-hover:scale-105 transition-transform duration-300"
            >
              <UIcon name="i-ph-chat-circle" />
              Get Free Quote
            </UButton>

            <!-- Additional Info -->
            <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
              <div class="flex items-center justify-center gap-1">
                <UIcon
                  name="i-ph-shield-check"
                  class="w-3 h-3 text-green-500"
                />
                <span>100% satisfaction guarantee</span>
              </div>
              <div class="flex items-center justify-center gap-1">
                <UIcon name="i-ph-clock" class="w-3 h-3 text-blue-500" />
                <span>24h response time</span>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Trust Indicators -->
      <div
        class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6"
      >
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div class="text-2xl font-bold text-primary mb-1">Low</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Upfront Payment
            </div>
          </div>
          <div>
            <div class="text-2xl font-bold text-primary mb-1">Free</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Consultation
            </div>
          </div>
          <div>
            <div class="text-2xl font-bold text-primary mb-1">24/7</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Support</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-primary mb-1">100%</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Satisfaction
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <UButton
          to="/services"
          variant="outline"
          size="lg"
          class="hover:scale-105 transition-transform duration-300"
        >
          <UIcon name="i-ph-briefcase" />
          View All Services & Packages
        </UButton>
      </div>
    </section>
  </div>
</template>
