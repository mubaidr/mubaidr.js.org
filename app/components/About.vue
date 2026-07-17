<script setup lang="ts">
const { data: profileData } = await useProfileData()
</script>

<template>
  <UPageSection
    v-if="profileData"
    title="About"
    description="Background and focus"
  >
    <div class="text-center text-xl">
      {{ profileData.description }}
    </div>
  </UPageSection>
</template>
