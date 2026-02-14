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

        <UStepper
          :items="
            servicesData?.process.map((p) => ({
              value: p.step,
              title: p.title,
              description: p.description,
              icon: p.icon,
              details: p.details,
            })) ?? []
          "
          value-key="value"
          :default-value="-1"
          :disabled="true"
        >
          <template #indicator="{ item }">
            <div class="flex items-center justify-center">
              <UIcon :name="item.icon" size="3em" class="text-primary-500" />
            </div>
          </template>

          <template #title="{ item }">
            <h3 class="text-lg font-bold">
              {{ item.title }}
            </h3>
          </template>

          <template #description="{ item }">
            <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {{ item.description }}
            </p>
          </template>

          <!-- <template #content="{ item }">
            <ul v-if="item.details?.length" class="mt-4 space-y-2">
              <li v-for="(detail, idx) in item.details" :key="idx"
                class="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <UIcon name="i-ph-check-circle" class="w-4 h-4 shrink-0 mt-0.5 text-primary-500" />
                <span>{{ detail }}</span>
              </li>
            </ul>
          </template> -->
        </UStepper>
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
    </div>
  </div>
</template>
