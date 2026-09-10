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
    <div class="max-w-3xl mx-auto text-center text-lg text-muted">
      {{ profileData.description }}
    </div>
  </UPageSection>
</template>
