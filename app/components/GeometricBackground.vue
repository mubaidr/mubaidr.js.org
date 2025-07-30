<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue"
const colorMode = useColorMode()
const visible = ref(false)
const parallax = ref({ x: 0, y: 0 })

// Theme-aware color palette
const palette = computed(() => {
  if (colorMode.value === "dark") {
    return {
      accent1: "#93c5fd", // blue
      accent2: "#c4b5fd", // purple
      accent3: "#a7f3d0", // green
      glass: "rgba(24,25,38,0.7)",
      gradient: "linear-gradient(135deg, #93c5fd 0%, #c4b5fd 100%)",
    }
  } else {
    return {
      accent1: "#3b82f6",
      accent2: "#8b5cf6",
      accent3: "#22c55e",
      glass: "rgba(248,250,252,0.7)",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    }
  }
})

// Animate parallax on mouse move
const handleMouseMove = (e: MouseEvent) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2
  const y = (e.clientY / window.innerHeight - 0.5) * 2
  parallax.value = { x, y }
}

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 500)
  window.addEventListener("mousemove", handleMouseMove)
})
onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove)
})
</script>

<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden -z-50">
    <!-- Animated SVG geometric shapes -->
    <svg
      class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out"
      :class="{ 'opacity-0': !visible, 'opacity-100': visible }"
      :style="{ filter: 'blur(0.5px)' }"
      viewBox="0 0 1920 1080"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <!-- Layered polygons with animated parallax -->
      <polygon
        :points="`
          ${200 + parallax.x * 40},${200 + parallax.y * 40}
          ${600 + parallax.x * 30},${180 + parallax.y * 60}
          ${500 + parallax.x * 60},${500 + parallax.y * 30}
          ${180 + parallax.x * 30},${400 + parallax.y * 50}
        `"
        :fill="palette.accent1"
        fill-opacity="0.18"
      />
      <polygon
        :points="`
          ${1200 - parallax.x * 60},${300 - parallax.y * 40}
          ${1700 - parallax.x * 40},${350 - parallax.y * 60}
          ${1600 - parallax.x * 30},${700 - parallax.y * 30}
          ${1300 - parallax.x * 50},${600 - parallax.y * 50}
        `"
        :fill="palette.accent2"
        fill-opacity="0.13"
      />
      <circle
        :cx="900 + parallax.x * 80"
        :cy="800 + parallax.y * 60"
        r="180"
        :fill="palette.accent3"
        fill-opacity="0.10"
      />
      <!-- Glassmorphism overlay -->
      <rect
        x="0"
        y="0"
        width="1920"
        height="1080"
        :fill="palette.glass"
        style="backdrop-filter: blur(24px)"
      />
      <!-- Animated gradient overlay -->
      <defs>
        <linearGradient id="bg-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop
            :offset="'0%'"
            :stop-color="palette.accent1"
            stop-opacity="0.33"
          />
          <stop
            :offset="'100%'"
            :stop-color="palette.accent2"
            stop-opacity="0.33"
          />
        </linearGradient>
      </defs>
      <!-- <rect x="0" y="0" width="1920" height="1080" fill="url(#bg-gradient)" /> -->
    </svg>
  </div>
</template>
