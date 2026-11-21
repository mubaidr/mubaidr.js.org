<script setup lang="ts">
const { data: profileData } = await useProfileData()
</script>

<template>
  <UPageSection
    v-if="profileData"
    title="About"
    description="Background and focus"
    icon="ph:info"
  >
    <div class="max-w-3xl mx-auto space-y-4 text-center text-lg text-muted">
      <p>{{ profileData.description }}</p>
      <p class="text-sm text-muted">
        Open to freelance contracts, part-time engagements, and advisory work.
      </p>
    </div>
  </UPageSection>
</template>
