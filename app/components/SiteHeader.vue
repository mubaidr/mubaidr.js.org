<template>
  <header
    :class="[
      'fixed left-1/2 top-4 md:top-6 transform -translate-x-1/2 z-50 w-auto max-w-4xl rounded-full backdrop-blur-md transition-shadow duration-300 bg-white/75 dark:bg-neutral-900/75 border border-accented',
      scrolled ? 'shadow-lg' : '',
    ]"
  >
    <div class="relative">
      <div class="flex justify-center items-center px-4 py-1.5">
        <nav
          class="flex justify-center items-center gap-4 lg:gap-6 w-full text-sm font-medium"
          role="navigation"
          aria-label="Main navigation"
        >
          <!-- Logo/Brand -->
          <ULink
            to="/"
            class="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 font-mono"
            aria-label="Go to homepage"
          >
            <span
              class="font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
            >
              <span class="text-primary-600 dark:text-primary-400">&lt;</span
              >mubaidr<span class="text-primary-600 dark:text-primary-400"
                >/&gt;</span
              >
            </span>
          </ULink>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-1">
            <ULink
              v-for="item in navigationItems"
              :key="item.path"
              :to="item.path"
              class="px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              active-class="text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/20"
            >
              {{ item.label }}
            </ULink>
          </div>

          <!-- Action Buttons & Mobile Menu -->
          <div class="flex items-center gap-1">
            <!-- Contact CTA -->
            <UButton
              to="/contact"
              variant="solid"
              color="primary"
              size="sm"
              class="hidden md:inline-flex rounded-full px-4"
              label="Contact"
            />

            <ThemeSwitcher />

            <!-- Mobile menu button -->
            <UButton
              class="lg:hidden"
              variant="ghost"
              color="neutral"
              :icon="mobileMenuOpen ? 'i-ph-x' : 'i-ph-list'"
              :aria-expanded="mobileMenuOpen"
              aria-label="Toggle mobile menu"
              @click="toggleMobileMenu"
            />
          </div>
        </nav>
      </div>
    </div>
    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
      mode="out-in"
    >
      <div
        v-show="mobileMenuOpen"
        id="mobile-menu"
        class="lg:hidden z-50 h-auto min-h-screen absolute left-0 top-full w-screen max-w-none overflow-hidden -mx-[calc(50vw-50%)]"
        @click.stop
      >
        <div class="m-4" @click="toggleMobileMenu">
          <div
            class="backdrop-blur-md bg-white/90 dark:bg-neutral-900/90 rounded-2xl border border-neutral-200/60 dark:border-neutral-800/80 overflow-hidden shadow-2xl"
          >
            <nav
              class="flex flex-col py-4 px-4 gap-1"
              aria-label="Mobile navigation"
            >
              <!-- Navigation Links with Enhanced Touch Targets -->
              <ULink
                v-for="item in navigationItems"
                :key="item.path"
                :to="item.path"
                class="flex items-center gap-4 px-4 py-3 min-h-12 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-all duration-200"
                active-class="text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/20"
                @click="closeMobileMenu"
              >
                <UIcon :name="item.icon" class="w-5 h-5" />
                <span>{{ item.label }}</span>
              </ULink>
              <!-- Mobile Contact CTA -->
              <div
                class="pt-2 mt-2 border-t border-neutral-200/60 dark:border-neutral-800/60"
              >
                <UButton
                  to="/contact"
                  variant="solid"
                  color="primary"
                  size="md"
                  class="w-full rounded-xl justify-center"
                  label="Contact Me"
                />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </Transition>
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
