<template>
  <footer
    class="border-t border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-stone-900/75 backdrop-blur-lg"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand & Description -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 flex items-center justify-center">
              <UIcon name="i-ph-code" />
            </div>
            <span>mubaidr</span>
          </div>
          <p class="mb-6 max-w-md">
            Full-stack developer passionate about creating exceptional web
            experiences. Specializing in Vue.js, Nuxt.js, and modern web
            technologies.
          </p>
          <div class="flex items-center gap-4">
            <UButton
              to="https://github.com/mubaidr"
              external
              aria-label="GitHub Profile"
              class="hover:scale-110 transition-transform duration-300 ease-in-out"
              variant="ghost"
            >
              <UIcon name="i-ph-github-logo" />
            </UButton>
            <UButton
              to="https://linkedin.com/in/mubaidr"
              external
              aria-label="LinkedIn Profile"
              class="hover:scale-110 transition-transform duration-300 ease-in-out"
              variant="ghost"
            >
              <UIcon name="i-ph-linkedin-logo" />
            </UButton>
            <UButton
              to="https://twitter.com/mubaidr"
              external
              aria-label="Twitter Profile"
              class="hover:scale-110 transition-transform duration-300 ease-in-out"
              variant="ghost"
            >
              <UIcon name="i-ph-twitter-logo" />
            </UButton>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <ULink
                to="/"
                class="hover:text-primary transition-colors duration-300 ease-in-out"
              >
                Home
              </ULink>
            </li>
            <li>
              <ULink
                to="/about"
                class="hover:text-primary transition-colors duration-300 ease-in-out"
              >
                About
              </ULink>
            </li>
            <li>
              <ULink
                to="/projects"
                class="hover:text-primary transition-colors duration-300 ease-in-out"
              >
                Projects
              </ULink>
            </li>
            <li>
              <ULink
                to="/blog"
                class="hover:text-primary transition-colors duration-300 ease-in-out"
              >
                Blog
              </ULink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="mb-4">Services</h3>
          <ul class="space-y-3">
            <li>
              <ULink
                to="/services"
                class="hover:text-primary transition-colors duration-300 ease-in-out"
              >
                Web Development
              </ULink>
            </li>
            <li>
              <ULink
                to="/services"
                class="hover:text-primary transition-colors duration-300 ease-in-out"
              >
                Technical Consulting
              </ULink>
            </li>
            <li>
              <ULink
                to="/services"
                class="hover:text-primary transition-colors duration-300 ease-in-out"
              >
                Code Review
              </ULink>
            </li>
            <li>
              <ULink
                to="/contact"
                class="hover:text-primary transition-colors duration-300 ease-in-out"
              >
                Get In Touch
              </ULink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p>
            © {{ new Date().getFullYear() }} Muhammad Ubaid Raza. All rights
            reserved.
          </p>
          <div class="flex items-center gap-6">
            <ULink
              to="/contact?faqs=1"
              class="hover:text-primary transition-colors duration-300 ease-in-out"
            >
              FAQs
            </ULink>
            <ULink
              to="/privacy"
              class="hover:text-primary transition-colors duration-300 ease-in-out"
            >
              Privacy Policy
            </ULink>
            <ULink
              to="/terms"
              class="hover:text-primary transition-colors duration-300 ease-in-out"
            >
              Terms of Service
            </ULink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
