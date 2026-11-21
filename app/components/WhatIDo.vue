<script setup lang="ts">
const { data: profileData } = await useProfileData()
</script>

<template>
  <UPageSection
    v-if="profileData"
    title="What I build"
    description="Core areas where I add value"
  >
    <UPageGrid v-if="profileData.whatIDo?.length">
      <UPageFeature
        v-for="service in profileData.whatIDo"
        :key="service.field"
        :title="service.field"
        :description="service.description"
        :icon="service.icon"
        class="animate-fade-in-up"
      />
    </UPageGrid>
  </UPageSection>
</template>
