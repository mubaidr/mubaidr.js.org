<template>
  <header
    class="fixed w-full z-40 top-0 left-0 backdrop-blur-lg border-b border-neutral-200/50 dark:border-neutral-700/50"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <nav
        class="flex justify-between items-center py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <!-- Logo/Brand -->
        <ULink
          to="/"
          class="font-bold text-xl flex items-center gap-3 tracking-tight"
          aria-label="Go to homepage"
        >
          <div
            class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center rounded-lg"
          >
            <UIcon name="i-ph-code" class="w-5 h-5 text-white" />
          </div>
          <span class="hidden sm:inline">mubaidr</span>
        </ULink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-6 text-sm font-medium">
          <ULink
            to="/"
            class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Home
          </ULink>
          <ULink
            to="/about"
            class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            About
          </ULink>
          <ULink
            to="/services"
            class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Services
          </ULink>
          <ULink
            to="/projects"
            class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Projects
          </ULink>
          <ULink
            to="/blog"
            class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Blog
          </ULink>
        </div>

        <!-- Action Buttons & Mobile Menu -->
        <div class="flex items-center gap-3">
          <!-- Enhanced Contact CTA -->
          <UButton
            to="/contact"
            variant="solid"
            size="sm"
            class="hidden lg:flex bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300"
          >
            <UIcon name="i-ph-rocket-launch" class="w-4 h-4" />
            <span class="ml-2">Start Project</span>
          </UButton>

          <!-- Theme Switcher -->
          <ThemeSwitcher />

          <!-- Mobile menu button -->
          <UButton
            @click="toggleMobileMenu"
            variant="ghost"
            size="sm"
            class="lg:hidden p-2"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle mobile menu"
            aria-controls="mobile-menu"
          >
            <UIcon
              :name="mobileMenuOpen ? 'i-ph-x' : 'i-ph-list'"
              class="w-6 h-6 transition-transform duration-200"
              :class="{ 'rotate-90': mobileMenuOpen }"
            />
          </UButton>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform translate-y-[-10px]"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform translate-y-[-10px]"
      >
        <div
          v-show="mobileMenuOpen"
          id="mobile-menu"
          class="lg:hidden border border-neutral-200/50 dark:border-neutral-700/50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-lg mx-4 mb-4 shadow-lg"
          @click.stop
        >
          <nav class="flex flex-col py-6 px-4" aria-label="Mobile navigation">
            <!-- Navigation Links with Enhanced Touch Targets -->
            <ULink
              v-for="(item, index) in navigationItems"
              :key="item.path"
              :to="item.path"
              @click="closeMobileMenu"
              class="flex items-center gap-4 px-4 py-4 rounded-lg text-base font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 active:bg-primary-100 dark:active:bg-primary-900/30 transition-all duration-200 min-h-[44px]"
              :class="{ 'animate-fade-in-up': mobileMenuOpen }"
              :style="{ 'animation-delay': `${index * 50}ms` }"
            >
              <UIcon
                :name="item.icon"
                class="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0"
              />
              <span class="text-gray-900 dark:text-gray-100">{{
                item.label
              }}</span>
            </ULink>

            <!-- Divider -->
            <div
              class="border-t border-neutral-200/50 dark:border-neutral-700/50 my-4"
            ></div>

            <!-- Mobile CTA with Enhanced Styling -->
            <ULink
              to="/contact"
              @click="closeMobileMenu"
              class="flex items-center justify-center gap-3 px-6 py-4 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white rounded-lg font-semibold transition-all duration-200 min-h-[48px] shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <UIcon name="i-ph-envelope" class="w-5 h-5" />
              <span>Let's Talk</span>
            </ULink>
          </nav>
        </div>
      </Transition>
    </div>

    <!-- Mobile Menu Backdrop -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
        style="z-index: -1"
        @click="closeMobileMenu"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      ></div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
// Mobile menu state
const mobileMenuOpen = ref(false)

// Navigation items configuration
const navigationItems = [
  { path: "/", label: "Home", icon: "i-ph-house" },
  { path: "/about", label: "About", icon: "i-ph-user" },
  { path: "/services", label: "Services", icon: "i-ph-briefcase" },
  { path: "/projects", label: "Projects", icon: "i-ph-folder-open" },
  { path: "/blog", label: "Blog", icon: "i-ph-article" },
]

// Touch gesture handling for swipe to close
let touchStartY = 0
let touchStartX = 0

const handleTouchStart = (e: TouchEvent) => {
  if (e.touches[0]) {
    touchStartY = e.touches[0].clientY
    touchStartX = e.touches[0].clientX
  }
}

const handleTouchMove = (e: TouchEvent) => {
  // Prevent background scrolling when menu is open
  if (mobileMenuOpen.value) {
    e.preventDefault()
  }
}

const handleTouchEnd = (e: TouchEvent) => {
  if (e.changedTouches[0]) {
    const touchEndY = e.changedTouches[0].clientY
    const touchEndX = e.changedTouches[0].clientX
    const deltaY = touchStartY - touchEndY
    const deltaX = Math.abs(touchStartX - touchEndX)

    // Swipe up to close (with minimum distance and not too much horizontal movement)
    if (deltaY > 50 && deltaX < 100) {
      closeMobileMenu()
    }
  }
}

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

// Clean up on component unmount
onBeforeUnmount(() => {
  document.body.style.overflow = ""
})
</script>

<style scoped>
/* Animation for staggered menu items */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.3s ease-out forwards;
  opacity: 0;
}

/* Improve touch targets on mobile */
@media (max-width: 1023px) {
  .mobile-touch-target {
    min-height: 44px;
    min-width: 44px;
  }
}

/* Focus styles for accessibility */
a:focus-visible,
button:focus-visible {
  /* outline: 2px solid theme("colors.primary.500"); */
  outline-offset: 2px;
  border-radius: 4px;
}
</style>
