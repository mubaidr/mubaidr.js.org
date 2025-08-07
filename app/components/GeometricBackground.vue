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

// Theme-aware min/max opacity for dots
const minDotOpacity = computed(() => (colorMode.value === "dark" ? 0.01 : 0.02))
const maxDotOpacity = computed(() => (colorMode.value === "dark" ? 0.05 : 0.09))

// Helper to map distance to opacity
function getDotOpacity(distance: number) {
  // Linear interpolation: center = min, edge = max
  return (
    minDotOpacity.value +
    (maxDotOpacity.value - minDotOpacity.value) * (distance / maxRadius)
  )
}

// Generate static dot positions and opacity for all rings
const staticDots = computed(() => {
  const dots = []
  for (let ring = 1; ring <= ringCount; ring++) {
    const radius = ring * ringSpacing
    const count = dotsPerRing(ring)
    for (let i = 0; i < count; i++) {
      const angle = (2 * Math.PI * i) / count
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      if (x >= 0 && x <= svgWidth && y >= 0 && y <= svgHeight) {
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
        dots.push({
          x,
          y,
          r: 1.7 - 0.012 * ring,
          opacity: getDotOpacity(distance),
          distance,
        })
      }
    }
  }
  dots.push({
    x: centerX,
    y: centerY,
    r: 2,
    opacity: minDotOpacity.value,
    distance: 0,
  })
  return dots
})

// Animated dots state
const animatedDots = ref([])

// Animation parameters
const amplitude = 4 // px max movement
const opacityAmp = 0.015 // max opacity change
const minSpeed = 0.12,
  maxSpeed = 0.32 // radians/sec

function animateDots(time) {
  const t = time / 1000 // seconds
  if (!animatedDots.value.length) return
  for (let i = 0; i < animatedDots.value.length; i++) {
    const dot = animatedDots.value[i]
    // Animate position with sine/cosine
    dot.x = dot.baseX + amplitude * Math.sin(t * dot.speed + dot.phase)
    dot.y = dot.baseY + amplitude * Math.cos(t * dot.speed + dot.phase)
    // Animate opacity with sine
    dot.opacity =
      dot.baseOpacity +
      opacityAmp * Math.sin(t * dot.speed * 0.7 + dot.phase * 1.3)
    // Clamp opacity
    dot.opacity = Math.max(
      minDotOpacity.value,
      Math.min(maxDotOpacity.value, dot.opacity),
    )
  }
  requestAnimationFrame(animateDots)
}

onMounted(() => {
  setTimeout(() => {
    showBg.value = true
  }, 1500)

  // Initialize animated dots
  const base = staticDots.value
  animatedDots.value = base.map((dot) => ({
    baseX: dot.x,
    baseY: dot.y,
    baseOpacity: dot.opacity,
    x: dot.x,
    y: dot.y,
    r: dot.r,
    opacity: dot.opacity,
    speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
    phase: Math.random() * Math.PI * 2,
  }))
  requestAnimationFrame(animateDots)
})
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
          v-for="(dot, i) in animatedDots"
          :key="i"
          :cx="dot.x"
          :cy="dot.y"
          :r="dot.r"
          :fill="palette.accent"
          :fill-opacity="dot.opacity"
        />
      </g>
    </svg>
  </div>
</template>
