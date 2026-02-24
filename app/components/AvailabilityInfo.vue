<script lang="ts" setup>
// Fetch profile data using composable
const { data: profileData } = await useProfileData()
</script>

<template>
  <div v-if="profileData?.availability" class="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral">
    <!-- Timezone -->
    <div class="flex items-center gap-2">
      <UIcon name="i-ph-globe" />
      {{ profileData.availability.timezone }}
    </div>

    <!-- Response Time -->
    <div class="flex items-center gap-2">
      <UIcon name="i-ph-clock" />
      {{ profileData.availability.responseTime }} Response
    </div>
  </div>
</template>
