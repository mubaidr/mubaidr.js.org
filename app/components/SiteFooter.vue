<template>
  <footer
    class="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand & Description -->
        <div class="lg:col-span-2 space-y-6">
          <div class="flex items-center gap-3">
            <UIcon
              name="i-ph-code-bold"
              class="w-6 h-6 text-primary-600 dark:text-primary-400"
            />
            <span class="text-xl font-bold tracking-tight">mubaidr</span>
          </div>
          <p
            class="text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed"
          >
            Senior Software Engineer specializing in modern web technologies.
            Crafting scalable web applications and browser extensions for
            startups and founders.
          </p>
          <div class="flex items-center gap-2">
            <UButton
              to="https://github.com/mubaidr"
              external
              variant="ghost"
              color="neutral"
              icon="i-ph-github-logo"
              aria-label="GitHub"
            />
            <UButton
              to="https://linkedin.com/in/mubaidr"
              external
              variant="ghost"
              color="neutral"
              icon="i-ph-linkedin-logo"
              aria-label="LinkedIn"
            />
            <UButton
              to="https://twitter.com/mubaidr"
              external
              variant="ghost"
              color="neutral"
              icon="i-ph-twitter-logo"
              aria-label="Twitter"
            />
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
            <!-- <li>
              <ULink to="/projects"> Projects </ULink>
            </li> -->
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
            <!-- <li>
              <ULink to="/contact"> Get In Touch </ULink>
            </li> -->
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
