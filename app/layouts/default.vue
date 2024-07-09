<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col h-screen justify-between max-w-screen-xl mx-auto px-6 md:px-16"
  >
    <div>
      <SiteHeader />
    </div>

    <div class="mb-auto">
      <slot />
    </div>

    <div>
      <SiteFooter />
    </div>
  </div>
</template>

<style></style>
