<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
  meta: [
    {
      name: "google-site-verification",
      content: "HCL7-zzyR002AD-QxBUEhq9uwSKx2KWCsamU0ANbBW8",
    },
    {
      name: "msvalidate.01",
      content: "8E520DCC754D9DE129C9B0DAC9334070",
    },
  ],
})
</script>
<template>
  <div class="min-h-screen">
    <div class="max-w-screen-md mx-auto px-3 md:px-6">
      <!-- <SiteHeader /> -->
      <main id="main-content" aria-label="Main content" class="my-6 md:my-12">
        <NuxtRouteAnnouncer />
        <NuxtPage />
      </main>
      <!-- <ScrollTopIcon /> -->
    </div>
    <SiteFooter />
  </div>
</template>
