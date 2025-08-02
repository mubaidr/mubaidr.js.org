<template>
  <header
    :class="[
      'fixed left-1/2 top-4 transform -translate-x-1/2 z-50 w-auto max-w-3xl bg-white/80 dark:bg-neutral-900/80 hover:shadow-xl rounded-2xl backdrop-blur-lg transition-all duration-300 border-b border-neutral-200/60 dark:border-neutral-800/80',
      scrolled ? 'shadow-md shadow-black/20 scale-105' : '',
    ]"
    style="padding: 0"
  >
    <div class="relative">
      <div class="flex justify-center items-center px-6 py-2">
        <nav
          class="flex justify-center items-center gap-8 w-full text-sm"
          role="navigation"
          aria-label="Main navigation"
        >
          <!-- Logo/Brand -->
          <ULink
            to="/"
            class="flex items-center gap-2 justify-center"
            aria-label="Go to homepage"
          >
            <div class="w-8 h-8 flex items-center justify-center">
              <UIcon name="i-ph-code" />
            </div>
            <span class="hidden sm:inline">mubaidr</span>
          </ULink>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-3 justify-center">
            <ULink
              to="/about"
              class="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              About
            </ULink>
            <ULink
              to="/services"
              class="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              Services
            </ULink>
            <!-- <ULink
            to="/projects"
            class="hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            Projects
          </ULink> -->
            <ULink
              to="/blog"
              class="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              Blog
            </ULink>
          </div>

          <!-- Action Buttons & Mobile Menu -->
          <div class="flex items-center gap-3 justify-center">
            <!-- Enhanced Contact CTA -->
            <!-- <UButton
            to="/contact"
            class="hidden lg:flex hover:shadow transition-shadow duration-300 ease-in-out"
          >
            <UIcon name="i-ph-rocket-launch" />
            <span>Start Project</span>
          </UButton> -->

            <!-- Theme Switcher -->
            <ThemeSwitcher />

            <!-- Mobile menu button -->
            <UButton
              class="lg:hidden p-2 shadow hover:shadow-lg transition-shadow duration-300 ease-in-out"
              :aria-expanded="mobileMenuOpen"
              aria-label="Toggle mobile menu"
              aria-controls="mobile-menu"
              @click="toggleMobileMenu"
            >
              <UIcon :name="mobileMenuOpen ? 'i-ph-x' : 'i-ph-list'" />
            </UButton>
          </div>
        </nav>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div
      v-show="mobileMenuOpen"
      id="mobile-menu"
      class="lg:hidden h-auto min-h-screen absolute left-0 top-full w-screen max-w-none overflow-hidden"
      style="margin-left: calc(-50vw + 50%); margin-right: calc(-50vw + 50%)"
      @click.stop
    >
      <div class="m-4" @click="toggleMobileMenu">
        <div
          class="backdrop-blur bg-white/95 dark:bg-neutral-900/95 rounded-lg border border-neutral-200/60 dark:border-neutral-800/80 overflow-hidden shadow-2xl"
        >
          <nav class="flex flex-col py-6 px-4" aria-label="Mobile navigation">
            <!-- Navigation Links with Enhanced Touch Targets -->
            <ULink
              v-for="item in navigationItems"
              :key="item.path"
              :to="item.path"
              class="flex items-center gap-4 px-4 py-4 min-h-[44px] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all duration-300 ease-in-out"
              @click="closeMobileMenu"
            >
              <UIcon :name="item.icon" />
              <span>{{ item.label }}</span>
            </ULink>

            <br />

            <!-- Mobile CTA with Enhanced Styling -->
            <ULink
              to="/contact"
              class="flex items-center justify-center gap-3 px-6 py-4 min-h-[48px] bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300"
              @click="closeMobileMenu"
            >
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
  { path: "/about", label: "About", icon: "i-ph-user" },
  { path: "/services", label: "Services", icon: "i-ph-briefcase" },
  { path: "/projects", label: "Projects", icon: "i-ph-folder-open" },
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
</script>
