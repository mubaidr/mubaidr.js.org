<script lang="ts" setup>
// Fetch data using composables
const { data: profileData } = await useProfileData()

const navLinks = [
  { label: "Blog", to: "/blog" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800"
  >
    <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <!-- Brand Column -->
        <div class="space-y-4">
          <h6 class="mb-2">mubaidr</h6>
          <p class="text-sm text-neutral-500 leading-relaxed">
            Building exceptional digital experiences through thoughtful design
            and engineering.
          </p>
        </div>

        <!-- Navigation Links -->
        <div>
          <h6 class="mb-2 ml-2">Navigation</h6>
          <nav class="flex flex-col gap-1">
            <UButton
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              variant="link"
              size="sm"
            >
              {{ link.label }}
            </UButton>
          </nav>
        </div>

        <!-- Connect -->
        <div>
          <h6 class="mb-2 ml-2">Connect</h6>
          <div class="flex gap-2">
            <ULink
              v-for="social in profileData?.social"
              :key="social.name"
              :to="social.url"
              external
              :aria-label="social.name"
              class="p-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 text-neutral-500 hover:text-primary dark:hover:text-primary transition-all duration-200"
            >
              <UIcon :name="social.icon" class="w-5 h-5" />
            </ULink>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div
        class="mt-12 pt-8 border-t border-neutral-100 dark:border-neutral-800"
      >
        <p class="text-center text-sm text-neutral-500">
          © {{ currentYear }} All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
