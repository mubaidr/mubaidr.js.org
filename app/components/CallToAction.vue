<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
}>()

// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})
</script>

<template>
  <div>
    <UCard class="modern-card glass text-center ring-2 ring-primary">
      <div class="space-y-8 py-8">
        <!-- Main Heading -->
        <div class="space-y-4">
          <h2>
            {{ title || "Ready to Start Your Next Project?" }}
          </h2>
          <p class="max-w-2xl mx-auto">
            {{
              description ||
              profile?.availability?.description ||
              "Let's discuss your project requirements and create something exceptional together."
            }}
          </p>
        </div>

        <!-- Value Points -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div class="flex items-center gap-3 justify-center">
            <div class="w-10 h-10 flex items-center justify-center">
              <UIcon name="i-ph-clock" size="3em" class="text-info" />
            </div>
            <div class="text-left">
              <div class="text-base font-semibold">
                {{ profile?.availability?.responseTime || "8h" }} Response
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                Quick turnaround
              </div>
            </div>
          </div>

          <div class="flex items-center gap-3 justify-center">
            <div class="w-10 h-10 flex items-center justify-center">
              <UIcon name="i-ph-shield-check" size="3em" class="text-info" />
            </div>
            <div class="text-left">
              <div class="text-base font-semibold">100% Satisfaction</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                Guaranteed results
              </div>
            </div>
          </div>

          <div class="flex items-center gap-3 justify-center">
            <div class="w-10 h-10 flex items-center justify-center">
              <UIcon name="i-ph-chat-circle" size="3em" class="text-info" />
            </div>
            <div class="text-left">
              <div class="text-base font-semibold">Free Consultation</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                No commitment
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            :to="profile?.availability?.cta?.url || '/contact'"
            size="xl"
          >
            <UIcon name="i-ph-rocket-launch" />
            {{ profile?.availability?.cta?.text || "Start Your Project" }}
          </UButton>
          <!--
              <UButton
                href="https://cal.com/mubaidr"
                external
                size="xl"
                variant="soft"

              >
                <UIcon name="i-ph-calendar-check" />
                Book Free Consultation
              </UButton> -->
        </div>

        <!-- Availability Note -->
        <div v-if="profile?.availability?.status === 'available'">
          <UBadge variant="soft">
            Only {{ profile?.availability?.slotsAvailable || 3 }} project slots
            available for
            {{ profile?.availability?.startDate || "August 2025" }}
          </UBadge>
        </div>
      </div>
    </UCard>
  </div>
</template>
