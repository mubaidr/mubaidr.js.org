<script setup lang="ts">
useSeoMeta({
  ogImage: "[og:image]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
})

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
  ],
})
</script>
<template>
  <div
    class="max-w-screen-lg mx-auto px-6 md:px-12 prose dark:prose-invert text-pretty"
  >
    <SiteHeader />

    <div class="my-6 md:my-12">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </div>

    <SiteFooter />

    <!-- Scroll to top -->
    <ScrollTopIcon />
  </div>
</template>
