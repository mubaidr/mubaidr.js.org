<script lang="ts" setup>
// Fetch limited services data for preview using composable with loading state
const { data: servicesData, pending: isLoading } = await useServicesPreview(3)
</script>

<template>
  <div>
    <div class="space-y-16">
      <!-- Services Preview Section -->
      <div class="text-center space-y-6">
        <h2>How I Can Help You</h2>

        <p class="max-w-3xl mx-auto">
          From full-stack development to technical consulting, I deliver
          solutions that drive business growth.
        </p>
      </div>

      <!-- Loading Skeleton -->
      <div v-if="isLoading" class="grid gap-8 lg:grid-cols-3">
        <USkeleton v-for="i in 3" :key="i" class="h-80 w-full" />
      </div>

      <!-- Service Categories -->
      <div v-else class="grid gap-8 lg:grid-cols-3">
        <UCard
          v-for="service in servicesData"
          :key="service.title"
          class="text-center h-full"
        >
          <div class="space-y-6">
            <!-- Icon & Title -->
            <div class="space-y-4">
              <div
                class="w-16 h-16 flex items-center justify-center mx-auto rounded-xl bg-linear-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-950/20 ring-1 ring-primary/20"
              >
                <UIcon
                  :name="service.icon"
                  size="2em"
                  class="text-primary-600 dark:text-primary-400 drop-shadow-[0_0_4px_rgba(99,102,241,0.4)]"
                />
              </div>
              <div class="space-y-3">
                <h3 class="font-bold font-mono">
                  <UIcon
                    name="i-ph-braces"
                    class="w-4 h-4 inline-block mr-1 text-primary-500/60"
                  />
                  {{ service.title }}
                  <UIcon
                    name="i-ph-braces"
                    class="w-4 h-4 inline-block ml-1 text-primary-500/60"
                  />
                </h3>
                <p class="text-neutral-600 dark:text-neutral-400">
                  {{ service.description }}
                </p>
              </div>
            </div>

            <!-- Key Highlight -->
            <UBadge
              size="lg"
              variant="subtle"
              color="neutral"
              class="font-mono"
            >
              <UIcon name="i-ph-code" class="w-3 h-3 mr-1" />
              {{ service.suitable }}
            </UBadge>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
