<script setup lang="ts">
// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").select("footer").first()
})
</script>

<template>
  <footer
    aria-label="Site footer"
    class="prose dark:prose-invert mt-24 max-w-5xl mx-auto"
    v-if="profile"
  >
    <div>
      <div class="space-y-8 py-4 px-4 md:px-8">
        <!-- <div class="flex items-center">
        <div class="flex gap-4 mt-2">
          <NuxtLink
            :external="true"
            aria-label="Email"
            to="mailto:mubaidr@gmail.com"
          >
            <Icon name="i-ph-envelope" role="img" aria-label="Email logo" />
          </NuxtLink>
          <NuxtLink
            :external="true"
            aria-label="GitHub profile"
            to="https://github.com/mubaidr"
          >
            <Icon name="i-ph-github-logo" role="img" aria-label="GitHub logo" />
          </NuxtLink>
          <NuxtLink
            :external="true"
            aria-label="LinkedIn profile"
            to="https://www.linkedin.com/in/mubaidr"
          >
            <Icon
              name="i-ph-linkedin-logo"
              role="img"
              aria-label="LinkedIn logo"
            />
          </NuxtLink>
        </div>
      </div> -->
        <div class="text-xs flex justify-between">
          <div class="flex items-center">
            <Icon name="i-ph-copyright" role="img" aria-label="Copyright" />
            <span class="ml-1">2025 All rights reserved</span>
          </div>
          <div>Last updated: {{ profile.footer.lastUpdated }}</div>
        </div>
      </div>
    </div>
  </footer>
</template>
