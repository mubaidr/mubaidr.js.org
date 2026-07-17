<script setup lang="ts">
const { data: profileData } = await useProfileData()
</script>

<template>
  <UPageSection
    v-if="profileData"
    title="What I do"
    description="Where I spend most of my time"
  >
    <div class="text-center text-xl">
      <div v-if="profileData.whatIDo?.length" class="space-y-3">
        <p v-for="service in profileData.whatIDo" :key="service">
          {{ service }}
        </p>
      </div>
    </div>
  </UPageSection>
</template>
