<script lang="ts" setup>
// Fetch data using composables
const { data: profileData } = await useProfileData()

const navLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
    <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <!-- Brand Column -->
        <div class="space-y-4">
          <UBadge variant="subtle" class="font-display font-semibold tracking-tight">
            mubaidr
          </UBadge>
          <p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Building exceptional digital experiences through thoughtful design and engineering.
          </p>
        </div>

        <!-- Navigation Links -->
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
            Navigation
          </h3>
          <nav class="flex flex-col gap-1">
            <UButton v-for="link in navLinks" :key="link.to" :to="link.to" variant="ghost" size="sm"
              class="justify-start font-normal text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary">
              {{ link.label }}
            </UButton>
          </nav>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
            Connect
          </h3>
          <div class="flex gap-2">
            <ULink v-for="social in profileData?.social" :key="social.name" :to="social.url" external
              :aria-label="social.name"
              class="p-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-all duration-200">
              <UIcon :name="social.icon" class="w-5 h-5" />
            </ULink>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="mt-12 pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <p class="text-center text-sm text-neutral-500 dark:text-neutral-400">
          © {{ currentYear }} {{ profileData?.name || 'Muhammad Ubaid Raza' }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
