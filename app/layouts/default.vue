<script setup lang="ts"></script>

<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Skip Link for Accessibility -->
    <a
href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-800 focus:ring-offset-2"
      aria-label="Skip to main content">
      Skip to main content
    </a>

    <!-- Site Header -->
    <SiteHeader />

    <!-- Main Content -->
    <main id="main" class="py-24 md:py-32 lg:py-42 px-4 md:px-8 max-w-6xl mx-auto z-10">
      <slot />
    </main>

    <!-- Site Footer -->
    <SiteFooter />
    <!-- <ScrollTopIcon /> -->
  </div>
</template>

<style></style>
