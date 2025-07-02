<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand & Description -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 flex items-center justify-center">
              <UIcon name="i-ph-code" class="w-5 h-5" />
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
            >
              <UIcon name="i-ph-github-logo" class="w-5 h-5" />
            </UButton>
            <UButton
              to="https://linkedin.com/in/mubaidr"
              external
              aria-label="LinkedIn Profile"
            >
              <UIcon name="i-ph-linkedin-logo" class="w-5 h-5" />
            </UButton>
            <UButton
              to="https://twitter.com/mubaidr"
              external
              aria-label="Twitter Profile"
            >
              <UIcon name="i-ph-twitter-logo" class="w-5 h-5" />
            </UButton>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <ULink to="/"> Home </ULink>
            </li>
            <li>
              <ULink to="/about"> About </ULink>
            </li>
            <li>
              <ULink to="/projects"> Projects </ULink>
            </li>
            <li>
              <ULink to="/blog"> Blog </ULink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="mb-4">Services</h3>
          <ul class="space-y-3">
            <li>
              <ULink to="/services"> Web Development </ULink>
            </li>
            <li>
              <ULink to="/services"> Technical Consulting </ULink>
            </li>
            <li>
              <ULink to="/services"> Code Review </ULink>
            </li>
            <li>
              <ULink to="/contact"> Get In Touch </ULink>
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
            <ULink to="/contact?faqs=1"> FAQs </ULink>
            <ULink to="/privacy"> Privacy Policy </ULink>
            <ULink to="/terms"> Terms of Service </ULink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
