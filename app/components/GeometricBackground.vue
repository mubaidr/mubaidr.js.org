<script setup lang="ts">
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

// Fade-in effect after 1 second
const showBg = ref(false)

onMounted(() => {
  setTimeout(() => {
    showBg.value = true
  }, 1000)
})

// Parameters for circular dot placement
const svgWidth = 1920
const svgHeight = 1080
const centerX = svgWidth / 2
const centerY = svgHeight / 2
const ringSpacing = 48 // px between rings (smaller for denser coverage)
const maxRadius = Math.sqrt(centerX * centerX + centerY * centerY)
const ringCount = Math.ceil(maxRadius / ringSpacing) // enough rings to fill corners
const dotsPerRing = (ring: number) =>
  Math.max(10, Math.round((2 * Math.PI * ring * ringSpacing) / 28))

// Generate dot positions for all rings
const circularDots = computed(() => {
  const dots = []
  for (let ring = 1; ring <= ringCount; ring++) {
    const radius = ring * ringSpacing
    const count = dotsPerRing(ring)
    for (let i = 0; i < count; i++) {
      const angle = (2 * Math.PI * i) / count
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      // Only add dots within the SVG bounds
      if (x >= 0 && x <= svgWidth && y >= 0 && y <= svgHeight) {
        dots.push({ x, y, r: 1.7 - 0.012 * ring })
      }
    }
  }
  // Add center dot
  dots.push({ x: centerX, y: centerY, r: 2 })
  return dots
})

// Theme-aware opacity for dots
const dotOpacity = computed(() => (colorMode.value === "dark" ? 0.05 : 0.09))
</script>

<template>
  <div
    class="fixed inset-0 sm:inset-0 pointer-events-none overflow-hidden -z-50 min-h-screen w-full h-full transition-opacity duration-1000"
    :class="showBg ? 'opacity-100' : 'opacity-0'"
  >
    <!-- Circular/radial dot background -->
    <svg
      class="absolute inset-0 w-full h-full max-w-full max-h-full"
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style="z-index: 0"
    >
      <g>
        <circle
          v-for="(dot, i) in circularDots"
          :key="i"
          :cx="dot.x"
          :cy="dot.y"
          :r="dot.r"
          :fill="palette.accent"
          :fill-opacity="dotOpacity"
        />
      </g>
    </svg>
  </div>
</template>
