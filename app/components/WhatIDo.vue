<script setup lang="ts">
const { data: profileData } = await useProfileData()
</script>

<template>
  <UPageSection
    v-if="profileData"
    title="What I do"
    description="Where I spend most of my time"
    icon="ph:package"
  >
    <UPageGrid v-if="profileData.whatIDo?.length">
      <UPageFeature
        v-for="service in profileData.whatIDo"
        :key="service.field"
        :title="service.field"
        :description="service.description"
        :icon="service.icon"
      />
    </UPageGrid>
  </UPageSection>
</template>
