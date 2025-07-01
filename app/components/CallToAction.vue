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
  <section class="py-16">
    <UCard
      variant="solid"
      class="text-center bg-neutral-700 dark:bg-neutral-200 card-interaction"
    >
      <div class="space-y-8 py-8">
        <!-- Availability Badge -->
        <div v-if="profile?.availability" class="flex justify-center">
          <UBadge
            :label="
              profile.availability.status === 'available'
                ? `Available for New Projects`
                : 'Currently Unavailable'
            "
            :color="
              profile.availability.status === 'available'
                ? 'success'
                : 'neutral'
            "
            variant="soft"
            size="lg"
          />
        </div>

        <!-- Main Heading -->
        <div class="space-y-4">
          <h2 class="text-3xl md:text-4xl font-bold">
            {{ title || "Ready to Start Your Next Project?" }}
          </h2>
          <p class="text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
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
            <div
              class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
            >
              <UIcon name="i-ph-clock" class="w-5 h-5" />
            </div>
            <div class="text-left">
              <div class="font-semibold">
                {{ profile?.availability?.responseTime || "8h" }} Response
              </div>
              <div class="text-sm opacity-80">Quick turnaround</div>
            </div>
          </div>

          <div class="flex items-center gap-3 justify-center">
            <div
              class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
            >
              <UIcon name="i-ph-shield-check" class="w-5 h-5" />
            </div>
            <div class="text-left">
              <div class="font-semibold">100% Satisfaction</div>
              <div class="text-sm opacity-80">Guaranteed results</div>
            </div>
          </div>

          <div class="flex items-center gap-3 justify-center">
            <div
              class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
            >
              <UIcon name="i-ph-chat-circle" class="w-5 h-5" />
            </div>
            <div class="text-left">
              <div class="font-semibold">Free Consultation</div>
              <div class="text-sm opacity-80">No commitment</div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            :to="profile?.availability?.cta?.url || '/contact'"
            size="xl"
            variant="solid"
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
                class="bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
              >
                <UIcon name="i-ph-calendar-check" />
                Book Free Consultation
              </UButton> -->
        </div>

        <!-- Availability Note -->
        <div v-if="profile?.availability?.status === 'available'">
          <UBadge variant="soft" color="info">
            Only {{ profile?.availability?.slotsAvailable || 3 }} project slots
            available for
            {{ profile?.availability?.startDate || "August 2025" }}
          </UBadge>
        </div>
      </div>
    </UCard>
  </section>
</template>
