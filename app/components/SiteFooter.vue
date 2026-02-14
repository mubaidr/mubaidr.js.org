<script lang="ts" setup>
// Fetch data using composables
const { data: profileData } = await useProfileData()
</script>

<template>
  <footer
    class="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <!-- Brand & Description -->
        <div class="lg:col-span-2 space-y-6">
          <div class="flex items-center gap-3">
            <UIcon
              name="i-ph-code-bold"
              class="w-6 h-6 text-primary-600 dark:text-primary-400"
            />
            <span class="text-xl font-bold tracking-tight">{{
              profileData?.name || "mubaidr"
            }}</span>
          </div>
          <p
            class="text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed"
          >
            {{
              profileData?.description ||
              "Senior Software Engineer specializing in modern web technologies. Crafting scalable web applications and browser extensions for startups and founders."
            }}
          </p>
          <!-- Social Icons -->
          <div class="flex items-center gap-2">
            <UButton
              v-for="social in profileData?.social"
              :key="social.name"
              :to="social.url"
              external
              variant="ghost"
              color="neutral"
              :icon="social.icon"
              :aria-label="social.name"
            />
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-6">
          <div>
            <span class="text-xl font-bold tracking-tight">Quick Links</span>
          </div>
          <div class="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <ULink to="/"> Home </ULink>
            <ULink to="/about"> About </ULink>
            <ULink to="/blog"> Blog </ULink>
            <ULink to="/projects"> Projects </ULink>
            <ULink to="/contact?faqs=1"> FAQs </ULink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
