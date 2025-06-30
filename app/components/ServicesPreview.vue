<script lang="ts" setup>
// Fetch limited services data for preview
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
    <section class="space-y-16">
      <div class="text-center space-y-6">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
        >
          <UIcon name="i-ph-briefcase" class="w-4 h-4 text-primary" />
          <span class="text-sm font-medium text-primary">Services</span>
        </div>

        <h2
          class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
        >
          How I Can Help You
        </h2>

        <p
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          From full-stack development to technical consulting, I deliver
          solutions that drive business growth.
        </p>
      </div>

      <!-- Service Categories -->
      <div class="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
        <div
          v-for="service in servicesPreview"
          :key="service.title"
          class="group relative"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-500 opacity-0 group-hover:opacity-100"
          ></div>

          <UCard variant="soft" class="text-center h-full relative">
            <div class="space-y-6">
              <!-- Icon & Title -->
              <div class="space-y-4">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                >
                  <UIcon :name="service.icon" class="w-8 h-8 text-primary" />
                </div>

                <div class="space-y-3">
                  <h3
                    class="text-xl font-bold text-gray-900 dark:text-gray-100"
                  >
                    {{ service.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {{ service.description }}
                  </p>
                </div>
              </div>

              <!-- Key Highlight -->
              <div class="bg-primary/5 rounded-lg p-4">
                <div class="text-sm text-primary font-medium">
                  {{ service.suitable }}
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Strong CTA to Services Page -->
      <div class="text-center space-y-6">
        <div class="max-w-3xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Ready to Explore All Services?
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            View detailed service offerings, pricing packages, and my proven
            4-step process.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              to="/services"
              variant="solid"
              size="lg"
              class="glass-button bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <UIcon name="i-ph-list" class="mr-2" />
              View All Services & Pricing
            </UButton>
            <UButton
              to="/contact"
              variant="outline"
              size="lg"
              class="border-2 border-gray-300 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300"
            >
              <UIcon name="i-ph-chat-circle" class="mr-2" />
              Get Free Consultation
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Glass Button Animation */
.glass-button {
  position: relative;
  overflow: hidden;
}

.glass-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.6s ease;
  z-index: 1;
  pointer-events: none;
}

.glass-button:hover::before {
  left: 100%;
}

/* Ensure button content is above the effects */
.glass-button :deep(*) {
  position: relative;
  z-index: 2;
}
</style>

<style scoped>
/* Glass Button Animation */
.glass-button {
  position: relative;
  overflow: hidden;
}

.glass-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.6s ease;
  z-index: 1;
  pointer-events: none;
}

.glass-button:hover::before {
  left: 100%;
}

/* Ensure button content is above the effects */
.glass-button :deep(*) {
  position: relative;
  z-index: 2;
}
</style>
