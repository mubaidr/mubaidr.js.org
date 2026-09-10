<script setup lang="ts">
const { data: profileData } = await useProfileData()
</script>

<template>
  <UPageSection
    v-if="profileData"
    title="What I do"
    description="Core areas of focus"
    icon="ph:package"
  >
    <UPageGrid
      v-if="profileData.whatIDo?.length"
      class="sm:grid-cols-2 lg:grid-cols-3"
    >
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
