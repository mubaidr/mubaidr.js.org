<template>
  <footer class="border-t border-neutral-200/50 dark:border-neutral-700/50">
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand & Description -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center"
            >
              <UIcon name="i-ph-code" class="w-5 h-5 text-white" />
            </div>
            <span class="text-xl font-bold">mubaidr</span>
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
          <h3 class="text-sm font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <ULink
                to="/"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Home
              </ULink>
            </li>
            <li>
              <ULink
                to="/about"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                About
              </ULink>
            </li>
            <li>
              <ULink
                to="/projects"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Projects
              </ULink>
            </li>
            <li>
              <ULink
                to="/blog"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Blog
              </ULink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-sm font-semibold mb-4">Services</h3>
          <ul class="space-y-3">
            <li>
              <ULink
                to="/services"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Web Development
              </ULink>
            </li>
            <li>
              <ULink
                to="/services"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Technical Consulting
              </ULink>
            </li>
            <li>
              <ULink
                to="/services"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Code Review
              </ULink>
            </li>
            <li>
              <ULink
                to="/contact"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Get In Touch
              </ULink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="border-t border-neutral-200/50 dark:border-neutral-700/50 mt-12 pt-8"
      >
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-sm text-gray-600 dark:text-gray-400">
            © {{ new Date().getFullYear() }} Muhammad Ubaid Raza. All rights
            reserved.
          </p>
          <div class="flex items-center gap-6">
            <ULink
              to="/contact?faqs=1"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              FAQs
            </ULink>
            <ULink
              to="/privacy"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </ULink>
            <ULink
              to="/terms"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </ULink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
