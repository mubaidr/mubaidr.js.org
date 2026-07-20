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
      {{ profileData.whatIDo }}
      <!-- <UPageFeature
        v-for="service in profileData.whatIDo"
        :key="service"
        :title="getTitle(service)"
        :description="getDescription(service)"
        :icon="getIcon(service)"
        orientation="vertical"
      /> -->
    </UPageGrid>
  </UPageSection>
</template>
