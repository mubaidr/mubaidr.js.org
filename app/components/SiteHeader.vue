<template>
  <header>
    <div class="fixed w-full z-40 top-0 left-0 bg-white/25 dark:bg-zinc-900/25 backdrop-blur-lg border-b border-neutral-100 dark:border-neutral-800">
      <nav class="flex justify-between items-center py-4 max-w-3xl mx-auto" role="navigation" aria-label="Main navigation">
        <!-- <NuxtLink
          to="/"
          class="font-semibold text-lg flex items-center gap-2 tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          aria-label="Go to homepage"
        >
          <span class="hidden sm:inline">mubaidr</span>
        </NuxtLink> -->

        <div></div>

        <!-- Navigation Links -->
        <div class="flex items-center gap-6">
          <nav class="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <NuxtLink
              to="/"
              class="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
            active-class="!font-bold"
              >
              Home
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
            active-class="!font-bold"
            >
              Blog
            </NuxtLink>
          </nav>

          <!-- Mobile menu button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="Toggle mobile menu"
          >
            <Icon name="ph:list" class="w-5 h-5" />
          </button>

          <ThemeSwitcher />
        </div>
      </nav>

      <!-- Mobile menu -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden border-t border-neutral-100 dark:border-neutral-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md"
      >
        <nav class="flex flex-col px-4 py-4 gap-4 max-w-6xl mx-auto" aria-label="Mobile navigation">
          <NuxtLink
            to="/"
            @click="mobileMenuOpen = false"
            class="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
            active-class="!text-primary"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/blog"
            @click="mobileMenuOpen = false"
            class="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
            active-class="!text-primary"
          >
            Blog
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
