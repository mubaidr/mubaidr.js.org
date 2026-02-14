<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
}>()

// Fetch profile data using composable
const { data: profileData } = await useProfileData()
</script>

<template>
  <div>
    <UCard class="text-center">
      <div class="space-y-8 py-12">
        <!-- Main Heading -->
        <div class="space-y-4">
          <h2 class="text-3xl md:text-4xl font-bold">
            {{ title || "Ready to Start Your Next Project?" }}
          </h2>
          <p
            class="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 text-lg"
          >
            {{ description || profileData?.availability?.description }}
          </p>
        </div>

        <!-- Value Points -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto py-4"
        >
          <div class="flex items-center gap-4 justify-center">
            <UIcon
              name="i-ph-clock-bold"
              size="2.5em"
              class="text-primary-500"
            />
            <div class="text-left">
              <div class="text-sm font-bold">
                {{ profileData?.availability?.responseTime }} Response
              </div>
              <div class="text-xs text-neutral-500">Quick turnaround</div>
            </div>
          </div>

          <div class="flex items-center gap-4 justify-center">
            <UIcon
              name="i-ph-chat-circle-bold"
              size="2.5em"
              class="text-primary-500"
            />
            <div class="text-left">
              <div class="text-sm font-bold">Free Consultation</div>
              <div class="text-xs text-neutral-500">No commitment</div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <UButton
            :to="profileData?.availability?.cta?.url"
            size="xl"
            icon="i-ph-rocket-launch"
            class="px-8"
          >
            {{ profileData?.availability?.cta?.text }}
          </UButton>
          <UButton
            to="/services"
            variant="outline"
            size="xl"
            icon="i-ph-list"
            class="px-8"
          >
            View Services
          </UButton>
        </div>

        <!-- Availability Note -->
        <div v-if="profileData?.availability?.status === 'available'">
          <UBadge variant="outline" size="xl">
            Only {{ profileData?.availability?.slotsAvailable }} project slots
            available for
            {{ profileData?.availability?.startDate }}
          </UBadge>
        </div>
      </div>
    </UCard>
  </div>
</template>
