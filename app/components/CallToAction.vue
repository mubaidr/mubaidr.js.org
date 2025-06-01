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
    <!-- Call to Action -->
    <section
      class="text-center py-16 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20"
    >
      <div class="max-w-3xl mx-auto space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold">
          {{ title || "Let's Work Together" }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          {{
            profile?.availability?.description ||
            "I'm always interested in new opportunities and challenging projects. Let's discuss how we can bring your ideas to life."
          }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            :to="profile?.availability?.cta?.url || '/contact'"
            size="lg"
            variant="solid"
          >
            <UIcon name="i-ph-envelope" />
            {{ profile?.availability?.cta?.text || "Start a Project" }}
          </UButton>

          <UButton
            href="https://cal.com/mubaidr"
            external
            size="lg"
            variant="outline"
          >
            <UIcon name="i-ph-calendar" />
            Schedule a Call
          </UButton>
        </div>

        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{
            profile?.availability?.note || "Usually responds within 24 hours"
          }}
        </p>
      </div>
    </section>
  </div>
</template>
