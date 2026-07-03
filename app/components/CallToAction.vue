<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
}>()

// Fetch profile data using composable
const { data: profileData } = await useProfileData()

const available = computed(
  () => profileData.value?.availability?.status === "available",
)
</script>

<template>
  <section class="py-32">
    <!-- Subtle gradient background -->
    <UPageCard highlight spotlight>
      <div class="p-8 md:p-16">
        <div class="space-y-8 justify-center text-center">
          <!-- Heading -->
          <h2
            class="font-display text-3xl md:text-4xl font-semibold tracking-tight"
          >
            {{ title || "Let's Build Something Exceptional" }}
          </h2>

          <!-- Description -->
          <p>
            {{ description || profileData?.availability?.description }}
          </p>

          <UButton :to="profileData?.availability?.cta?.url" size="xl">
            <UIcon name="i-ph-code" class="mr-2" />
            <span>
              {{
                profileData?.availability?.cta?.text || "Start a Conversation"
              }}
            </span>
          </UButton>
        </div>

        <!-- Availability Indicator -->
        <!-- <div v-if="available" class="pt-4">
        <span
          class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-primary-50 text-primary-700 dark:bg-primary-950/50 dark:text-primary-300"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"
            />
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"
            />
          </span>
          Available for new projects
        </span>
      </div> -->
      </div>
    </UPageCard>
  </section>
</template>
