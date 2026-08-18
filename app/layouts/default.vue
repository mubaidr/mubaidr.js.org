<script setup lang="ts"></script>

<template>
  <div>
    <!-- Skip Link for Accessibility -->
    <a href="#main" class="skip-link" aria-label="Skip to main content">
      Skip to main content
    </a>

    <SiteHeader />

    <UMain id="main">
      <NuxtPage />
    </UMain>

    <!-- Site Footer -->
    <SiteFooter />
  </div>
</template>
