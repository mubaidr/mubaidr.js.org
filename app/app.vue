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
    <SiteHeader />
    <main aria-label="Main content" class="p-24 md:p-36">
      <NuxtPage />
    </main>
    <!-- <ScrollTopIcon /> -->
    <SiteFooter />
    <NuxtRouteAnnouncer />
  </div>
</template>
