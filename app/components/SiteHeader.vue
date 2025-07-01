<template>
  <header class="fixed w-full z-40 top-0 left-0">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <nav
        class="flex justify-between items-center py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <!-- Logo/Brand -->
        <ULink
          to="/"
          class="flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <div class="w-8 h-8 flex items-center justify-center">
            <UIcon name="i-ph-code" />
          </div>
          <span class="hidden sm:inline">mubaidr</span>
        </ULink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-6">
          <ULink to="/"> Home </ULink>
          <ULink to="/about"> About </ULink>
          <ULink to="/services"> Services </ULink>
          <ULink to="/projects"> Projects </ULink>
          <ULink to="/blog"> Blog </ULink>
        </div>

        <!-- Action Buttons & Mobile Menu -->
        <div class="flex items-center gap-3">
          <!-- Enhanced Contact CTA -->
          <UButton to="/contact" class="hidden lg:flex">
            <UIcon name="i-ph-rocket-launch" />
            <span class="ml-2">Start Project</span>
          </UButton>

          <!-- Theme Switcher -->
          <ThemeSwitcher />

          <!-- Mobile menu button -->
          <UButton
            class="lg:hidden p-2"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle mobile menu"
            aria-controls="mobile-menu"
            @click="toggleMobileMenu"
          >
            <UIcon
              :name="mobileMenuOpen ? 'i-ph-x' : 'i-ph-list'"
              class="w-6 h-6"
            />
          </UButton>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div
        v-show="mobileMenuOpen"
        id="mobile-menu"
        class="lg:hidden mx-4 mb-4"
        @click.stop
      >
        <nav class="flex flex-col py-6 px-4" aria-label="Mobile navigation">
          <!-- Navigation Links with Enhanced Touch Targets -->
          <ULink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-4 px-4 py-4 min-h-[44px]"
            @click="closeMobileMenu"
          >
            <UIcon :name="item.icon" class="w-5 h-5 flex-shrink-0" />
            <span>{{ item.label }}</span>
          </ULink>

          <!-- Divider -->
          <div class="my-4" />

          <!-- Mobile CTA with Enhanced Styling -->
          <ULink
            to="/contact"
            class="flex items-center justify-center gap-3 px-6 py-4 min-h-[48px]"
            @click="closeMobileMenu"
          >
            <UIcon name="i-ph-envelope" class="w-5 h-5" />
            <span>Let's Talk</span>
          </ULink>
        </nav>
      </div>
    </div>

    <!-- Mobile Menu Backdrop -->
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 lg:hidden"
      style="z-index: -1"
      @click="closeMobileMenu"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    />
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
