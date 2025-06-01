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
    <!-- Services Preview -->
    <section class="space-y-8">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Services</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Professional web development services to help bring your ideas to life
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <UCard
          v-for="service in servicesPreview"
          :key="service.title"
          class="text-center h-full"
          variant="soft"
        >
          <div class="space-y-4">
            <div
              class="w-12 h-12 bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto"
            >
              <UIcon :name="service.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-xl font-semibold">{{ service.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              {{ service.description }}
            </p>
          </div>
        </UCard>
      </div>

      <div class="text-center">
        <UButton to="/services" variant="outline" size="lg">
          <UIcon name="i-ph-briefcase" />
          View All Services
        </UButton>
      </div>
    </section>
  </div>
</template>
