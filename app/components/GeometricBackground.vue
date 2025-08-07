<script setup lang="ts">
const colorMode = useColorMode()

// Theme-aware color palette
const palette = computed(() => {
  if (colorMode.value === "dark") {
    return {
      bg: "#0b0b0c",
      grid: "#ffffff10", // 6% white for grid lines
      accent: "#ffffff",
      noise: "#ffffff06", // subtle white noise
    }
  } else {
    return {
      bg: "#ffffff",
      grid: "#0000000d", // ~5% black for grid lines
      accent: "#000000",
      noise: "#00000008", // subtle black noise
    }
  }
})

// Precompute noise data URI once to avoid complex template literals in template
const noiseDataUri = computed(() => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'>
      <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter>
      <rect width='128' height='128' filter='url(%23n)' opacity='0.75' />
    </svg>
  `.trim()
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
})

// Fade-in effect
const showBg = ref(false)

onMounted(() => {
  setTimeout(() => {
    showBg.value = true
  }, 100)
})
</script>

<template>
  <div
    class="fixed inset-0 pointer-events-none overflow-hidden -z-50 min-h-screen w-full h-full transition-opacity duration-700"
    :class="showBg ? 'opacity-66' : 'opacity-0'"
    :style="{ backgroundColor: palette.bg }"
    aria-hidden="true"
  >
    <!-- Grid background using layered gradients -->
    <div
      class="absolute inset-0 w-full h-full"
      :style="{
        backgroundImage: `
          linear-gradient(var(--grid-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid-color) 1px, transparent 1px),
          radial-gradient(1200px 800px at 20% 10%, var(--glow-a), transparent 60%),
          radial-gradient(1000px 700px at 80% 30%, var(--glow-b), transparent 65%)
        `,
        backgroundSize: '48px 48px, 48px 48px, 100% 100%, 100% 100%',
        backgroundPosition: '0 0, 0 0, center, center',
        // Provide CSS variables for theme-aware colors
        ['--grid-color' as any]: palette.grid,
        ['--glow-a' as any]:
          colorMode.value === 'dark' ? '#7dd3fc0f' : '#60a5fa14',
        ['--glow-b' as any]:
          colorMode.value === 'dark' ? '#c084fc12' : '#a78bfa12',
      }"
    ></div>

    <!-- Subtle animated shimmer to avoid static feel -->
    <div
      class="absolute inset-0 w-full h-full animate-[bgPan_18s_linear_infinite] opacity-40"
      :style="{
        backgroundImage:
          'radial-gradient(1200px 800px at 70% 80%, var(--glow-c), transparent 65%)',
        backgroundSize: '120% 120%',
        ['--glow-c' as any]:
          colorMode.value === 'dark' ? '#22d3ee0f' : '#06b6d40f',
      }"
    ></div>

    <!-- Noise overlay -->
    <div
      class="absolute inset-0 w-full h-full mix-blend-overlay"
      :style="{
        backgroundImage: noiseDataUri,
        opacity: colorMode.value === 'dark' ? 0.25 : 0.75,
      }"
    ></div>
  </div>
</template>

<style scoped>
@keyframes bgPan {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(-2%, -2%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
