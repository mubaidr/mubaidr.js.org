<script lang="ts" setup>
// Fetch data using composables
const { data: profileData } = await useProfileData()

// const navLinks = [
//   { label: "Blog", to: "/blog" },
//   { label: "Projects", to: "/projects" },
//   { label: "Contact", to: "/contact" },
// ]

// const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div>
        <div class="space-y-4">
          <p>
            {{ profileData!.heroHeadline }}
          </p>
          <p>Muhammad Ubaid R.</p>
          <div class="flex gap-2">
            <UButton
              v-for="social in profileData?.social"
              :key="social.name"
              :to="social.url"
              external
              :aria-label="social.name"
              :icon="social.icon"
              variant="link"
            >
            </UButton>
          </div>
        </div>
        <div class="font-semibold text-xl"></div>
      </div>
    </div>
  </footer>
</template>
