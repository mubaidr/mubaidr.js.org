<script lang="ts" setup>
defineProps<{
  // Define any props if needed
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
    <!-- Enhanced Call to Action -->
    <section
      class="text-center py-16 bg-gradient-to-br from-primary-50 via-blue-50 to-purple-50 dark:from-primary-900/20 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full animate-pulse"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-16 h-16 bg-blue-500 rounded-full animate-pulse delay-1000"
        ></div>
        <div
          class="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-500 rounded-full animate-pulse delay-2000"
        ></div>
      </div>

      <div class="max-w-4xl mx-auto space-y-8 relative z-10">
        <!-- Dynamic Urgency Badge -->
        <div v-if="profile?.availability" class="flex justify-center">
          <UBadge
            :label="
              profile.availability.status === 'available'
                ? `Limited Availability - ${profile.availability.startDate || 'Now'}`
                : 'Currently Unavailable'
            "
            variant="solid"
            size="lg"
            :class="
              profile.availability.status === 'available'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 animate-pulse'
                : 'bg-gradient-to-r from-gray-500 to-gray-600'
            "
          />
        </div>

        <h2
          class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-purple-600 dark:from-white dark:via-primary-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          {{ title || "Ready to Transform Your Ideas Into Reality?" }}
        </h2>

        <p
          class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          {{
            profile?.availability?.description ||
            "Join 50+ satisfied clients who've accelerated their business growth with custom web solutions. Let's discuss your project today!"
          }}
        </p>

        <!-- Value Propositions -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div class="flex items-center gap-3 justify-center md:justify-start">
            <div
              class="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center"
            >
              <UIcon name="i-ph-rocket-launch" class="w-5 h-5 text-green-600" />
            </div>
            <div class="text-left">
              <div class="font-semibold text-gray-900 dark:text-gray-100">
                Fast Delivery
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                2-12 weeks timeline
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3 justify-center md:justify-start">
            <div
              class="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center"
            >
              <UIcon name="i-ph-shield-check" class="w-5 h-5 text-blue-600" />
            </div>
            <div class="text-left">
              <div class="font-semibold text-gray-900 dark:text-gray-100">
                Risk-Free
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                100% satisfaction guarantee
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3 justify-center md:justify-start">
            <div
              class="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center"
            >
              <UIcon name="i-ph-handshake" class="w-5 h-5 text-purple-600" />
            </div>
            <div class="text-left">
              <div class="font-semibold text-gray-900 dark:text-gray-100">
                Transparent
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                No hidden costs
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            :to="profile?.availability?.cta?.url || '/contact'"
            size="xl"
            variant="solid"
            class="glass-button relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
          >
            <UIcon name="i-ph-rocket-launch" />
            {{ profile?.availability?.cta?.text || "Start Your Project Now" }}
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            ></div>
          </UButton>

          <UButton
            href="https://cal.com/mubaidr"
            external
            size="xl"
            variant="outline"
            class="border-2 hover:border-primary-400 transition-all duration-300 hover:shadow-lg"
          >
            <UIcon name="i-ph-calendar-check" />
            Book Free 30-Min Consultation
          </UButton>
        </div>

        <!-- Social Proof & Urgency -->
        <div
          class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto"
        >
          <div
            class="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4"
          >
            <div class="flex items-center gap-1">
              <UIcon name="i-ph-users" class="w-4 h-4 text-primary" />
              <span>50+ Projects Completed</span>
            </div>
            <div class="flex items-center gap-1">
              <UIcon name="i-ph-star-fill" class="w-4 h-4 text-yellow-400" />
              <span>5.0 Average Rating</span>
            </div>
            <div class="flex items-center gap-1">
              <UIcon name="i-ph-clock" class="w-4 h-4 text-green-500" />
              <span
                >{{ profile?.availability?.responseTime || "24h" }} Response
                Time</span
              >
            </div>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{
              profile?.availability?.status === "available"
                ? `Join the queue - Only ${profile?.availability?.slotsAvailable || 3} project slots available for ${profile?.availability?.startDate || "February 2025"}`
                : profile?.availability?.note ||
                  "Currently not accepting new projects"
            }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Enhanced Glass Button Animation */
.glass-button {
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
    rgba(255, 255, 255, 0.6),
    transparent
  );
  transition: left 0.6s ease;
  z-index: 1;
  pointer-events: none;
}

.glass-button:hover::before {
  left: 100%;
}

.glass-button:hover {
  transform: translateY(-2px) scale(1.05);
  transition: transform 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Ensure button content is above the effects */
.glass-button :deep(*) {
  position: relative;
  z-index: 2;
}
</style>
