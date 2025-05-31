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
  <div class="relative overflow-hidden">
    <!-- Glass Background Shapes -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <!-- Large glass diamond - top right -->
      <div
        class="glass-shape glass-diamond absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/8 to-purple-600/8 backdrop-blur-md border border-white/5 rotate-45 transform"
      ></div>

      <!-- Medium glass triangle - left side -->
      <div
        class="glass-shape glass-triangle absolute top-1/3 left-20 w-64 h-64 bg-gradient-to-tr from-emerald-400/6 to-cyan-500/6 backdrop-blur-md border border-white/5 rotate-45 transform"
      ></div>

      <!-- Small glass rectangle - bottom center -->
      <!-- <div class="glass-shape glass-rect absolute bottom-32 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-r from-pink-400/7 to-orange-400/7 backdrop-blur-md border border-white/5 rounded-2xl"></div> -->

      <!-- Glass hexagon - top left -->
      <div
        class="glass-shape glass-hexagon absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-bl from-violet-400/6 to-indigo-500/6 backdrop-blur-md border border-white/5"
        style="
          clip-path: polygon(
            30% 0%,
            70% 0%,
            100% 50%,
            70% 100%,
            30% 100%,
            0% 50%
          );
        "
      ></div>

      <!-- Angular glass shapes -->
      <div
        class="glass-shape glass-parallelogram absolute top-1/2 right-1/4 w-24 h-12 bg-gradient-to-r from-teal-400/8 to-blue-500/8 backdrop-blur-md border border-white/5 transform skew-x-12"
      ></div>
      <div
        class="glass-shape glass-trapezoid absolute bottom-1/3 left-1/3 w-20 h-16 bg-gradient-to-r from-rose-400/7 to-pink-500/7 backdrop-blur-md border border-white/5"
        style="clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"
      ></div>
    </div>

    <!-- Main content with higher z-index -->
    <div class="relative z-10">
      <SiteHeader />
      <main
        aria-label="Main content"
        class="min-h-screen px-4 md:px-8 pt-32 md:pt-48 max-w-5xl mx-auto"
      >
        <NuxtPage />
      </main>
      <!-- <ScrollTopIcon /> -->
      <SiteFooter />
      <NuxtRouteAnnouncer />
    </div>
  </div>
</template>
