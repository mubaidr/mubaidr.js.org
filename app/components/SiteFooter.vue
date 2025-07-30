<template>
  <footer class="glass shadow-2xl border-t-0">
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
              class="interactive"
              variant="ghost"
            >
              <UIcon name="i-ph-github-logo" />
            </UButton>
            <UButton
              to="https://linkedin.com/in/mubaidr"
              external
              aria-label="LinkedIn Profile"
              class="interactive"
              variant="ghost"
            >
              <UIcon name="i-ph-linkedin-logo" />
            </UButton>
            <UButton
              to="https://twitter.com/mubaidr"
              external
              aria-label="Twitter Profile"
              class="interactive"
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
              <ULink to="/" class="interactive"> Home </ULink>
            </li>
            <li>
              <ULink to="/about" class="interactive"> About </ULink>
            </li>
            <li>
              <ULink to="/projects" class="interactive"> Projects </ULink>
            </li>
            <li>
              <ULink to="/blog" class="interactive"> Blog </ULink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="mb-4">Services</h3>
          <ul class="space-y-3">
            <li>
              <ULink to="/services" class="interactive">
                Web Development
              </ULink>
            </li>
            <li>
              <ULink to="/services" class="interactive">
                Technical Consulting
              </ULink>
            </li>
            <li>
              <ULink to="/services" class="interactive"> Code Review </ULink>
            </li>
            <li>
              <ULink to="/contact" class="interactive"> Get In Touch </ULink>
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
            <ULink to="/contact?faqs=1" class="interactive"> FAQs </ULink>
            <ULink to="/privacy" class="interactive"> Privacy Policy </ULink>
            <ULink to="/terms" class="interactive"> Terms of Service </ULink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
