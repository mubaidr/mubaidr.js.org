<template>
  <header
:class="[
    'fixed left-1/2 top-4 md:top-6 transform -translate-x-1/2 z-50 w-auto max-w-4xl rounded-full backdrop-blur-md transition-shadow duration-300',
    scrolled
      ? 'shadow-md border border-neutral-200 dark:border-neutral-800'
      : '',
  ]" class="p-0">
    <div class="relative">
      <div class="flex justify-center items-center px-4 py-1.5">
        <nav
class="flex justify-center items-center gap-6 w-full text-sm font-medium" role="navigation"
          aria-label="Main navigation">
          <!-- Logo/Brand -->
          <ULink
to="/"
            class="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Go to homepage">
            <UIcon name="i-ph-code-bold" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span class="hidden sm:inline font-bold tracking-tight">mubaidr</span>
          </ULink>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-1">
            <ULink
v-for="item in navigationItems" :key="item.path" :to="item.path"
              class="px-3 py-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              active-class="text-primary-600 dark:text-primary-400">
              {{ item.label }}
            </ULink>
          </div>

          <!-- Action Buttons & Mobile Menu -->
          <div class="flex items-center gap-2">
            <ThemeSwitcher />

            <!-- Mobile menu button -->
            <UButton
class="lg:hidden" variant="ghost" color="neutral" :icon="mobileMenuOpen ? 'i-ph-x' : 'i-ph-list'"
              :aria-expanded="mobileMenuOpen" aria-label="Toggle mobile menu" @click="toggleMobileMenu" />
          </div>
        </nav>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div
v-show="mobileMenuOpen" id="mobile-menu"
      class="lg:hidden h-auto min-h-screen absolute left-0 top-full w-screen max-w-none overflow-hidden -mx-[calc(50vw-50%)]"
      @click.stop>
      <div class="m-4" @click="toggleMobileMenu">
        <div
          class="backdrop-blur bg-white/95 dark:bg-neutral-900/95 rounded-lg border border-neutral-200/60 dark:border-neutral-800/80 overflow-hidden shadow-2xl">
          <nav class="flex flex-col py-6 px-4" aria-label="Mobile navigation">
            <!-- Navigation Links with Enhanced Touch Targets -->
            <ULink
v-for="item in navigationItems" :key="item.path" :to="item.path"
              class="flex items-center gap-4 px-4 py-4 min-h-11 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all duration-300 ease-in-out"
              @click="closeMobileMenu">
              <UIcon :name="item.icon" />
              <span>{{ item.label }}</span>
            </ULink>

            <br >

            <!-- Mobile CTA with Enhanced Styling -->
            <ULink
to="/contact"
              class="flex items-center justify-center gap-3 px-6 py-4 min-h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300"
              @click="closeMobileMenu">
              <UIcon name="i-ph-envelope" />
              <span>Let's Talk</span>
            </ULink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Mobile menu state
const mobileMenuOpen = ref(false)

// Navigation items configuration
const navigationItems = [
  // { path: "/about", label: "About", icon: "i-ph-user" },
  { path: "/consulting", label: "Consulting", icon: "i-ph-lightbulb" },
  { path: "/projects", label: "Portfolio", icon: "i-ph-folder-open" },
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

// Close mobile menu when route changes
const route = useRoute()
watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false
  },
)

// Mobile menu controls
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value

  // Prevent body scroll when menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = ""
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ""
}

// Keyboard shortcuts and accessibility
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    // Escape to close mobile menu
    if (e.key === "Escape" && mobileMenuOpen.value) {
      closeMobileMenu()
    }

    // Focus management for accessibility
    if (e.key === "Tab" && mobileMenuOpen.value) {
      // Trap focus within mobile menu when open
      const mobileMenu = document.getElementById("mobile-menu")
      if (mobileMenu) {
        const focusableElements = mobileMenu.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])',
        )

        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement
          const lastElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }
  }

  document.addEventListener("keydown", handleKeydown)

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown)
    // Clean up body overflow on unmount
    document.body.style.overflow = ""
  })
})
</script>
