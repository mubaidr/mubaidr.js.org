<script lang="ts" setup>
// Fetch profile data using composable
const { data: profileData } = await useProfileData()
</script>

<template>
  <div v-if="profileData?.availability" class="flex flex-wrap items-center justify-center gap-4">
    <!-- Timezone -->
    <div class="flex items-center gap-2">
      <UIcon
        name="i-ph-globe"
        size="1.25em"
        class="text-primary-500"
      />
      <UBadge variant="subtle" size="md">
        {{ profileData.availability.timezone }}
      </UBadge>
    </div>

    <!-- Response Time -->
    <div class="flex items-center gap-2">
      <UIcon
        name="i-ph-clock"
        size="1.25em"
        class="text-primary-500"
      />
      <UBadge variant="subtle" size="md">
        {{ profileData.availability.responseTime }} Response
      </UBadge>
    </div>
  </div>
</template>
