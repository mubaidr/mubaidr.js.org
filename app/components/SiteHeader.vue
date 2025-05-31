<template>
  <header
    class="fixed w-full z-40 top-0 left-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border-b border-neutral-100/50 dark:border-neutral-800/50"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <nav
        class="flex justify-between items-center py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <!-- Logo/Brand -->
        <NuxtLink
          to="/"
          class="font-bold text-xl flex items-center gap-3 tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          aria-label="Go to homepage"
        >
          <div
            class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center"
          >
            <UIcon name="i-ph-code" class="w-5 h-5 text-white" />
          </div>
          <span class="hidden sm:inline">mubaidr</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <NuxtLink
            to="/"
            class="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 rounded-lg transition-all duration-200"
            active-class="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-900/20"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 rounded-lg transition-all duration-200"
            active-class="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-900/20"
          >
            About
          </NuxtLink>

          <NuxtLink
            to="/projects"
            class="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 rounded-lg transition-all duration-200"
            active-class="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-900/20"
          >
            Projects
          </NuxtLink>

          <NuxtLink
            to="/blog"
            class="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 rounded-lg transition-all duration-200"
            active-class="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-900/20"
          >
            Blog
          </NuxtLink>

          <NuxtLink
            to="/services"
            class="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 rounded-lg transition-all duration-200"
            active-class="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-900/20"
          >
            Services
          </NuxtLink>
        </div>

        <!-- Action Buttons & Mobile Menu -->
        <div class="flex items-center gap-3">
          <!-- Search Button -->
          <!-- <UButton
            @click="openSearch"
            variant="ghost"
            size="sm"
            class="hidden md:flex"
            aria-label="Search"
          >
            <UIcon name="i-ph-magnifying-glass" class="w-4 h-4" />
            <span class="hidden xl:inline ml-2">Search</span>
            <UKbd class="hidden xl:inline ml-2">⌘K</UKbd>
          </UButton> -->

          <!-- Contact CTA -->
          <UButton
            to="/contact"
            variant="soft"
            size="sm"
            class="hidden lg:flex"
          >
            <UIcon name="i-ph-envelope" class="w-4 h-4" />
            <span class="ml-2">Let's Talk</span>
          </UButton>

          <!-- Theme Switcher -->
          <ThemeSwitcher />

          <!-- Mobile menu button -->
          <UButton
            @click="mobileMenuOpen = !mobileMenuOpen"
            variant="ghost"
            size="sm"
            class="lg:hidden"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle mobile menu"
          >
            <UIcon
              :name="mobileMenuOpen ? 'i-ph-x' : 'i-ph-list'"
              class="w-5 h-5"
            />
          </UButton>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 transform -translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2"
      >
        <div
          v-show="mobileMenuOpen"
          class="lg:hidden border-t border-neutral-100/50 dark:border-neutral-800/50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md"
        >
          <nav class="flex flex-col py-4 gap-1" aria-label="Mobile navigation">
            <!-- Search in Mobile -->
            <button
              @click="openSearch"
              class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
            >
              <UIcon name="i-ph-magnifying-glass" class="w-5 h-5" />
              Search
            </button>

            <!-- Navigation Links -->
            <NuxtLink
              to="/"
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
              active-class="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-900/20"
            >
              <UIcon name="i-ph-house" class="w-5 h-5" />
              Home
            </NuxtLink>

            <NuxtLink
              to="/about"
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
              active-class="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-900/20"
            >
              <UIcon name="i-ph-user" class="w-5 h-5" />
              About
            </NuxtLink>

            <NuxtLink
              to="/projects"
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
              active-class="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-900/20"
            >
              <UIcon name="i-ph-folder-open" class="w-5 h-5" />
              Projects
            </NuxtLink>

            <NuxtLink
              to="/blog"
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
              active-class="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-900/20"
            >
              <UIcon name="i-ph-article" class="w-5 h-5" />
              Blog
            </NuxtLink>

            <NuxtLink
              to="/services"
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
              active-class="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-900/20"
            >
              <UIcon name="i-ph-briefcase" class="w-5 h-5" />
              Services
            </NuxtLink>

            <!-- Mobile CTA -->
            <div
              class="border-t border-neutral-100/50 dark:border-neutral-800/50 mt-2 pt-2"
            >
              <NuxtLink
                to="/contact"
                @click="closeMobileMenu"
                class="flex items-center justify-center gap-2 mx-4 py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium text-sm rounded-lg transition-colors duration-200"
              >
                <UIcon name="i-ph-envelope" class="w-4 h-4" />
                Let's Talk
              </NuxtLink>
            </div>
          </nav>
        </div>
      </Transition>
    </div>

    <!-- Search Modal - Enhanced with Mobile Glass Morphism -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="searchModalOpen"
          class="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm p-3 sm:p-4 pt-[8vh] sm:pt-[10vh]"
          @click.self="closeSearch"
        >
          <div
            class="w-full max-w-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200/50 dark:border-zinc-700/50 overflow-hidden transform transition-all duration-200"
            @click.stop
          >
            <!-- Search Header with Enhanced Glass Effect -->
            <div
              class="flex items-center gap-3 p-3 sm:p-4 border-b border-gray-200/30 dark:border-zinc-700/30 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md"
            >
              <UIcon
                name="i-ph-magnifying-glass"
                class="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0"
              />
              <input
                ref="searchInput"
                v-model="searchQuery"
                type="text"
                placeholder="Search blog posts, projects..."
                class="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base"
                @keydown.escape="closeSearch"
              />
              <div class="flex items-center gap-2 flex-shrink-0">
                <span
                  class="text-xs text-gray-400 dark:text-gray-500 px-2 py-1 bg-gray-100/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded border border-gray-200/50 dark:border-zinc-700/50"
                  >Esc</span
                >
              </div>
            </div>

            <!-- Search Content with Mobile-Optimized Glass Effect -->
            <div
              class="max-h-[60vh] sm:max-h-96 overflow-y-auto bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg"
            >
              <div v-if="searchQuery.length > 0" class="p-3 sm:p-4">
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Search results for "{{ searchQuery }}"
                </p>
                <!-- Search results would be populated here -->
                <div
                  class="text-center py-8 sm:py-12 text-gray-500 dark:text-gray-400"
                >
                  <UIcon
                    name="i-ph-magnifying-glass"
                    class="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50"
                  />
                  <p class="text-base sm:text-lg font-medium mb-2">
                    Search functionality coming soon
                  </p>
                  <p class="text-sm">
                    We're working on adding comprehensive search capabilities.
                  </p>
                </div>
              </div>

              <div v-else class="p-3 sm:p-4">
                <div
                  class="text-center py-6 sm:py-8 text-gray-500 dark:text-gray-400 mb-4 sm:mb-6"
                >
                  <UIcon
                    name="i-ph-magnifying-glass"
                    class="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50"
                  />
                  <p class="text-base sm:text-lg font-medium mb-2">
                    Start typing to search
                  </p>
                  <p class="text-sm">
                    Search through blog posts, projects, and more.
                  </p>
                </div>

                <!-- Quick Links with Mobile-First Design -->
                <div
                  class="border-t border-gray-200/40 dark:border-zinc-700/40 pt-3 sm:pt-4"
                >
                  <p
                    class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                  >
                    Quick Links
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <NuxtLink
                      to="/projects"
                      @click="closeSearch"
                      class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100/80 dark:hover:bg-zinc-800/80 backdrop-blur-sm transition-all group border border-transparent hover:border-gray-200/50 dark:hover:border-zinc-700/50"
                    >
                      <UIcon
                        name="i-ph-folder-open"
                        class="w-4 h-4 text-gray-500 group-hover:text-primary-500 transition-colors"
                      />
                      <span class="text-sm font-medium">Projects</span>
                    </NuxtLink>
                    <NuxtLink
                      to="/blog"
                      @click="closeSearch"
                      class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100/80 dark:hover:bg-zinc-800/80 backdrop-blur-sm transition-all group border border-transparent hover:border-gray-200/50 dark:hover:border-zinc-700/50"
                    >
                      <UIcon
                        name="i-ph-article"
                        class="w-4 h-4 text-gray-500 group-hover:text-primary-500 transition-colors"
                      />
                      <span class="text-sm font-medium">Blog</span>
                    </NuxtLink>
                    <NuxtLink
                      to="/about"
                      @click="closeSearch"
                      class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100/80 dark:hover:bg-zinc-800/80 backdrop-blur-sm transition-all group border border-transparent hover:border-gray-200/50 dark:hover:border-zinc-700/50"
                    >
                      <UIcon
                        name="i-ph-user"
                        class="w-4 h-4 text-gray-500 group-hover:text-primary-500 transition-colors"
                      />
                      <span class="text-sm font-medium">About</span>
                    </NuxtLink>
                    <NuxtLink
                      to="/contact"
                      @click="closeSearch"
                      class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100/80 dark:hover:bg-zinc-800/80 backdrop-blur-sm transition-all group border border-transparent hover:border-gray-200/50 dark:hover:border-zinc-700/50"
                    >
                      <UIcon
                        name="i-ph-envelope"
                        class="w-4 h-4 text-gray-500 group-hover:text-primary-500 transition-colors"
                      />
                      <span class="text-sm font-medium">Contact</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
const searchModalOpen = ref(false)
const searchQuery = ref("")
const searchInput = ref<HTMLInputElement>()

// Close mobile menu when route changes
const route = useRoute()
watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false
  },
)

// Close mobile menu
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Search functionality
const openSearch = () => {
  searchModalOpen.value = true
  nextTick(() => {
    searchInput.value?.focus()
  })
}

const closeSearch = () => {
  searchModalOpen.value = false
  searchQuery.value = ""
}

// Keyboard shortcuts
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    // Cmd/Ctrl + K for search
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault()
      openSearch()
    }

    // Escape to close search modal
    if (e.key === "Escape" && searchModalOpen.value) {
      closeSearch()
    }

    // Escape to close mobile menu
    if (e.key === "Escape" && mobileMenuOpen.value) {
      mobileMenuOpen.value = false
    }
  }

  document.addEventListener("keydown", handleKeydown)

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown)
  })
})

// Close mobile menu when clicking outside
onMounted(() => {
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest("header") && mobileMenuOpen.value) {
      mobileMenuOpen.value = false
    }
  }

  document.addEventListener("click", handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside)
  })
})
</script>
