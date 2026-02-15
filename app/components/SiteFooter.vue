<script lang="ts" setup>
// Fetch data using composables
const { data: profileData } = await useProfileData()
</script>

<template>
  <footer class="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Brand -->
        <div class="flex items-center gap-2">
          <UIcon name="i-ph-code-bold" class="text-primary-600 dark:text-primary-400" />
          <span class="font-medium">{{
            profileData?.name || "mubaidr"
          }}</span>
        </div>

        <!-- Social Links -->
        <div class="flex gap-3 text-neutral-500">
          <ULink v-for="social in profileData?.social" :key="social.name" :to="social.url" external
            :aria-label="social.name" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <UIcon :name="social.icon" />
          </ULink>
        </div>

        <!-- Copyright -->
        <p class="text-sm text-neutral-600 dark:text-neutral-400">
          © 2026
        </p>
      </div>
    </div>
  </footer>
</template>
