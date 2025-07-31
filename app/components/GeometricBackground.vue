<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue"
const colorMode = useColorMode()

// Theme-aware color palette
const palette = computed(() => {
  if (colorMode.value === "dark") {
    return {
      accent: "#ffffff",
    }
  } else {
    return {
      accent: "#000000",
    }
  }
})
</script>

<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden -z-50">
    <!-- Dotted SVG pattern background -->
    <svg
      class="absolute inset-0 w-full h-full"
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      aria-hidden="true"
      style="z-index: 0"
    >
      <defs>
        <pattern
          id="dots"
          x="0"
          y="0"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="4"
            cy="4"
            r="2"
            :fill="palette.accent"
            fill-opacity="0.05"
          />
        </pattern>
      </defs>
      <rect x="0" y="0" width="1920" height="1080" fill="url(#dots)" />
    </svg>
  </div>
</template>
