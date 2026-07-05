<script setup lang="ts">
// Navigation items configuration
const navigationItems = [
  // { path: "/consulting", label: "Consulting", icon: "i-ph-lightbulb" },
  // { path: "/projects", label: "Portfolio", icon: "i-ph-folder-open" },
  { path: "/blog", label: "Blog", icon: "i-ph-article" },
]

// Header shadow on scroll
const scrolled = ref(false)
const handleScroll = () => {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
  document.body.style.overflow = ""
})
</script>

<template>
  <header
    :class="[
      'fixed left-1/2 top-8 transform -translate-x-1/2 z-50 w-auto max-w-4xl backdrop-blur-md transition-all duration-300 bg-white/75 dark:bg-neutral-900/75 border border-primary/25',
      scrolled ? 'shadow' : 'shadow-none',
    ]"
  >
    <div class="relative">
      <div class="flex justify-center items-center px-2 py-1.5 min-w-sm">
        <nav
          class="flex justify-between items-center gap-2 lg:gap-6 w-full text-sm font-medium"
          role="navigation"
          aria-label="Main navigation"
        >
          <!-- Logo/Brand -->
          <UButton
            to="/"
            aria-label="Go to homepage"
            variant="link"
            color="neutral"
          >
            <span>
              <span class="text-muted">&lt;</span>mubaidr<span
                class="text-muted"
                >/&gt;</span
              >
            </span>
          </UButton>

          <!-- Action Buttons & Mobile Menu -->
          <div class="flex items-center gap-2">
            <ThemeSwitcher />

            <!-- Desktop Navigation -->
            <UButton
              v-for="item in navigationItems"
              :key="item.path"
              :to="item.path"
              variant="link"
              color="neutral"
            >
              {{ item.label }}
            </UButton>

            <!-- Contact CTA -->
            <UButton
              to="/contact"
              variant="outline"
              color="primary"
              label="Contact"
            />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
