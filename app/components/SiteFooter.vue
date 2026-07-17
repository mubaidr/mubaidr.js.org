<script lang="ts" setup>
const { data: profileData } = await useProfileData()
const currentYear = new Date().getFullYear()
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        &copy; {{ currentYear }} Muhammad Ubaid R.
      </p>
    </template>

    <!-- <p>{{ profileData!.heroHeadline }}</p> -->

    <template #right>
      <div class="flex gap-2 items-center justify-center">
        <UButton
          v-for="social in profileData?.social"
          :key="social.name"
          :to="social.url"
          external
          :aria-label="social.name"
          :icon="social.icon"
          variant="link"
          color="neutral"
        />
      </div>
    </template>
  </UFooter>
</template>
