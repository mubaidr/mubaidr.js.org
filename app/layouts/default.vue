<template>
  <div
    class="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-200"
  >
    <!-- TODO: consisten app vs layout usage -->
    <!-- Site Header -->
    <SiteHeader />

    <!-- Main Content -->
    <main class="py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto">
      <slot />
    </main>

    <!-- Site Footer -->
    <SiteFooter />
  </div>
</template>

<script setup lang="ts"></script>
