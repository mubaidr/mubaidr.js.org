<template>
  <footer
    class="bg-white/25 dark:bg-slate-900/25 border-t border-gray-200 dark:border-slate-700"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand & Description -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center"
            >
              <UIcon name="i-ph-code" class="w-5 h-5 text-white" />
            </div>
            <span class="text-xl font-bold text-gray-900 dark:text-white"
              >mubaidr</span
            >
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-md">
            Full-stack developer passionate about creating exceptional web
            experiences. Specializing in Vue.js, Nuxt.js, and modern web
            technologies.
          </p>
          <div class="flex items-center gap-4">
            <UButton
              to="https://github.com/mubaidr"
              external
              variant="ghost"
              size="sm"
              square
              aria-label="GitHub Profile"
            >
              <UIcon name="i-ph-github-logo" class="w-5 h-5" />
            </UButton>
            <UButton
              to="https://linkedin.com/in/mubaidr"
              external
              variant="ghost"
              size="sm"
              square
              aria-label="LinkedIn Profile"
            >
              <UIcon name="i-ph-linkedin-logo" class="w-5 h-5" />
            </UButton>
            <UButton
              to="https://twitter.com/mubaidr"
              external
              variant="ghost"
              size="sm"
              square
              aria-label="Twitter Profile"
            >
              <UIcon name="i-ph-twitter-logo" class="w-5 h-5" />
            </UButton>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/projects"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Projects
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/blog"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Blog
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Services
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/services"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Web Development
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Technical Consulting
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Code Review
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Get In Touch
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-200 dark:border-slate-700 mt-12 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-sm text-gray-600 dark:text-gray-400">
            © {{ new Date().getFullYear() }} Muhammad Ubaid Raza. All rights
            reserved.
          </p>
          <div class="flex items-center gap-6">
            <NuxtLink
              to="/privacy"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </NuxtLink>
            <NuxtLink
              to="/terms"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
