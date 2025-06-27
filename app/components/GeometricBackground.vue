<script setup>
const constellationCanvas = useTemplateRef("constellationCanvas")
let animationFrame = null
let canvasContext = null
let lastCanvasSize = { width: 0, height: 0 }

// Color mode for theme-aware styling
const colorMode = useColorMode()

// Mouse tracking
const mousePos = ref({ x: 0, y: 0 })
const isMouseInside = ref(false)
let mousePercent = { x: 0, y: 0 }
let canvasRect = null

// Performance optimization: Cache theme colors
const cachedColors = computed(() => {
  const isDark = colorMode.value === "dark"

  if (isDark) {
    return {
      primary: { r: 147, g: 197, b: 253 },
      secondary: { r: 196, g: 181, b: 253 },
      accent: { r: 167, g: 243, b: 208 },
      tertiary: { r: 253, g: 230, b: 138 },
      lineOpacity: 0.4,
      particleOpacity: 0.8,
    }
  } else {
    return {
      primary: { r: 30, g: 64, b: 175 },
      secondary: { r: 91, g: 33, b: 182 },
      accent: { r: 21, g: 128, b: 61 },
      tertiary: { r: 180, g: 83, b: 9 },
      lineOpacity: 0.4,
      particleOpacity: 0.6,
    }
  }
})

// Generate random particles
const particles = ref([])

// Generate particles with random positions and animation properties
const generateParticles = () => {
  // Optimize particle count based on device capabilities
  const isMobile = window.innerWidth < 768
  const isLowEnd = navigator.hardwareConcurrency <= 4
  let particleCount = 45 // Default for desktop

  if (isMobile) {
    particleCount = isLowEnd ? 15 : 25 // Fewer particles on mobile
  } else if (isLowEnd) {
    particleCount = 15 // Reduced for low-end desktops
  }

  particles.value = []

  for (let i = 0; i < particleCount; i++) {
    const baseX = Math.random() * 100
    const baseY = Math.random() * 100
    particles.value.push({
      x: baseX,
      y: baseY,
      baseX: baseX, // Store original position for attraction calculation
      baseY: baseY,
      delay: Math.random() * 6, // Increased delay range
      duration: 2 + Math.random() * 5, // Varied duration range
      size: 0.8 + Math.random() * 2.5,
      intensity: 0.3 + Math.random() * 0.7, // Random intensity for varied brightness
    })
  }
}

// Update particle positions based on mouse attraction
const updateParticlePositions = () => {
  if (!isMouseInside.value) {
    // Reset particles to base positions when mouse is not inside
    particles.value.forEach((particle) => {
      particle.x += (particle.baseX - particle.x) * 0.05 // Smooth return to base
      particle.y += (particle.baseY - particle.y) * 0.05
    })
    return
  }

  // Use cached canvas rect to avoid expensive getBoundingClientRect calls
  if (!canvasRect) return

  particles.value.forEach((particle) => {
    const dx = mousePercent.x - particle.baseX
    const dy = mousePercent.y - particle.baseY
    const distanceSquared = dx * dx + dy * dy // Avoid sqrt when possible
    const maxDistanceSquared = 900 // 30^2

    if (distanceSquared < maxDistanceSquared) {
      // Only calculate sqrt when needed
      const distance = Math.sqrt(distanceSquared)
      const attractionStrength = Math.max(0, (30 - distance) / 30) * 8

      // Stretch towards mouse
      particle.x = particle.baseX + dx * attractionStrength * 0.15
      particle.y = particle.baseY + dy * attractionStrength * 0.15
    } else {
      // Return to base position
      particle.x += (particle.baseX - particle.x) * 0.05
      particle.y += (particle.baseY - particle.y) * 0.05
    }
  })
}

// Optimized canvas constellation drawing
const drawConstellation = () => {
  if (!constellationCanvas.value) return

  const canvas = constellationCanvas.value

  // Cache canvas context
  if (!canvasContext) {
    canvasContext = canvas.getContext("2d")
  }

  const rect = canvas.getBoundingClientRect()

  // Only resize canvas if dimensions changed
  if (
    lastCanvasSize.width !== rect.width ||
    lastCanvasSize.height !== rect.height
  ) {
    canvas.width = rect.width
    canvas.height = rect.height
    lastCanvasSize.width = rect.width
    lastCanvasSize.height = rect.height

    // Update cached canvas rect for mouse calculations
    canvasRect = rect
  }

  // Clear canvas
  canvasContext.clearRect(0, 0, canvas.width, canvas.height)

  // Use cached colors
  const colors = cachedColors.value

  // Pre-calculate particle coordinates - only once per frame
  const particleCoords = particles.value.map((particle) => ({
    x: (particle.x / 100) * canvas.width,
    y: (particle.y / 100) * canvas.height,
  }))

  // Pre-calculate mouse position for line highlighting
  const mouseX =
    isMouseInside.value && canvasRect
      ? mousePos.value.x - canvasRect.left
      : -1000
  const mouseY =
    isMouseInside.value && canvasRect
      ? mousePos.value.y - canvasRect.top
      : -1000

  // Draw constellation lines with optimized distance calculations
  canvasContext.lineWidth = 0.5
  const { r, g, b } = colors.primary
  const maxLineDistance = 240
  const maxLineDistanceSquared = maxLineDistance * maxLineDistance

  for (let i = 0; i < particleCoords.length; i++) {
    for (let j = i + 1; j < particleCoords.length; j++) {
      const particle = particleCoords[i]
      const otherParticle = particleCoords[j]

      const dx = particle.x - otherParticle.x
      const dy = particle.y - otherParticle.y
      const distanceSquared = dx * dx + dy * dy

      // Only calculate sqrt and draw if within range
      if (distanceSquared < maxLineDistanceSquared) {
        const distance = Math.sqrt(distanceSquared)

        // Base opacity
        let opacity =
          Math.max(0, (maxLineDistance - distance) / maxLineDistance) *
          colors.lineOpacity

        // Add highlight effect when mouse is close to line
        if (isMouseInside.value) {
          const lineDistanceToMouse = distanceToLineSegment(
            mouseX,
            mouseY,
            particle.x,
            particle.y,
            otherParticle.x,
            otherParticle.y,
          )

          if (lineDistanceToMouse < 50) {
            const highlightFactor = Math.max(0, (50 - lineDistanceToMouse) / 50)
            opacity = Math.min(0.25, opacity + highlightFactor * 0.125)
          }
        }

        canvasContext.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
        canvasContext.beginPath()
        canvasContext.moveTo(particle.x, particle.y)
        canvasContext.lineTo(otherParticle.x, otherParticle.y)
        canvasContext.stroke()
      }
    }
  }
}

// Helper function to calculate distance from point to line segment
const distanceToLineSegment = (px, py, x1, y1, x2, y2) => {
  const dx = x2 - x1
  const dy = y2 - y1
  const length = Math.sqrt(dx * dx + dy * dy)

  if (length === 0)
    return Math.sqrt((px - x1) * (px - x1) + (py - y1) * (py - y1))

  const t = Math.max(
    0,
    Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (length * length)),
  )
  const projectionX = x1 + t * dx
  const projectionY = y1 + t * dy

  return Math.sqrt(
    (px - projectionX) * (px - projectionX) +
      (py - projectionY) * (py - projectionY),
  )
}

const animate = () => {
  updateParticlePositions() // Update particle positions based on mouse
  drawConstellation()
  animationFrame = requestAnimationFrame(animate)
}

// Optimized mouse event handlers
const handleMouseMove = (event) => {
  mousePos.value = { x: event.clientX, y: event.clientY }
  isMouseInside.value = true

  // Update cached mouse percentage when canvas rect is available
  if (canvasRect) {
    mousePercent.x =
      ((event.clientX - canvasRect.left) / canvasRect.width) * 100
    mousePercent.y =
      ((event.clientY - canvasRect.top) / canvasRect.height) * 100
  }
}

const handleMouseEnter = () => {
  isMouseInside.value = true
}

const handleMouseLeave = () => {
  isMouseInside.value = false
}

// Handle visibility change to pause interactions when tab is not active
const handleVisibilityChange = () => {
  if (document.hidden) {
    isMouseInside.value = false
  }
}

// Throttled mouse move handler for better performance
let mouseThrottleTimeout = null
const throttledMouseMove = (event) => {
  if (mouseThrottleTimeout) return

  mouseThrottleTimeout = setTimeout(() => {
    handleMouseMove(event)
    mouseThrottleTimeout = null
  }, 16) // ~60fps throttling
}

// Handle resize to update cached canvas rect
const handleResize = () => {
  if (constellationCanvas.value) {
    canvasRect = constellationCanvas.value.getBoundingClientRect()
  }
}

onMounted(() => {
  generateParticles()

  // Start animation after a brief delay to ensure DOM is ready
  setTimeout(() => {
    animate()
  }, 100)

  // Add global mouse event listeners for document-wide interaction
  document.addEventListener("mousemove", throttledMouseMove)
  document.addEventListener("mouseenter", handleMouseEnter)
  document.addEventListener("mouseleave", handleMouseLeave)
  document.addEventListener("visibilitychange", handleVisibilityChange)
  window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }

  // Clear any pending throttle timeouts
  if (mouseThrottleTimeout) {
    clearTimeout(mouseThrottleTimeout)
  }

  // Clean up all event listeners
  document.removeEventListener("mousemove", throttledMouseMove)
  document.removeEventListener("mouseenter", handleMouseEnter)
  document.removeEventListener("mouseleave", handleMouseLeave)
  document.removeEventListener("visibilitychange", handleVisibilityChange)
  window.removeEventListener("resize", handleResize)
})
</script>

<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <!-- Constellation Canvas -->
    <canvas
      ref="constellationCanvas"
      class="absolute inset-0 w-full h-full transition-opacity duration-300"
      :class="colorMode === 'dark' ? 'opacity-60' : 'opacity-70'"
    ></canvas>

    <!-- Shimmering Particles -->
    <div
      v-for="(particle, index) in particles"
      :key="index"
      class="particle"
      :class="[
        `particle-${index + 1}`,
        colorMode === 'dark' ? 'particle-dark' : 'particle-light',
      ]"
      :style="{
        left: particle.x + '%',
        top: particle.y + '%',
        animationDelay: particle.delay + 's',
        animationDuration: particle.duration + 's',
        '--particle-intensity': particle.intensity,
      }"
    ></div>
  </div>
</template>

<style scoped>
/* Base particle styles */
.particle {
  @apply absolute rounded-full pointer-events-none transition-all duration-300;
  width: 3px;
  height: 3px;
  animation: shimmer infinite ease-in-out;
  transform: translate(-50%, -50%);
  opacity: calc(var(--particle-intensity, 0.6));
}

/* Dark theme particles */
.particle-dark {
  background: radial-gradient(
    circle,
    rgba(147, 197, 253, 0.9) 0%,
    rgba(147, 197, 253, 0.5) 50%,
    transparent 100%
  );
  box-shadow: 0 0 8px rgba(147, 197, 253, 0.7);
}

/* Light theme particles */
.particle-light {
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.8) 0%,
    rgba(59, 130, 246, 0.3) 50%,
    transparent 100%
  );
  box-shadow: 0 0 6px rgba(59, 130, 246, 0.4);
}

/* Violet particles - Dark theme */
.particle-dark:nth-child(3n + 1) {
  background: radial-gradient(
    circle,
    rgba(196, 181, 253, 0.9) 0%,
    rgba(196, 181, 253, 0.5) 50%,
    transparent 100%
  );
  box-shadow: 0 0 8px rgba(196, 181, 253, 0.7);
}

/* Violet particles - Light theme */
.particle-light:nth-child(3n + 1) {
  background: radial-gradient(
    circle,
    rgba(139, 92, 246, 0.8) 0%,
    rgba(139, 92, 246, 0.3) 50%,
    transparent 100%
  );
  box-shadow: 0 0 6px rgba(139, 92, 246, 0.4);
}

/* Green particles - Dark theme */
.particle-dark:nth-child(5n + 1) {
  background: radial-gradient(
    circle,
    rgba(167, 243, 208, 0.9) 0%,
    rgba(167, 243, 208, 0.5) 50%,
    transparent 100%
  );
  box-shadow: 0 0 8px rgba(167, 243, 208, 0.7);
}

/* Green particles - Light theme */
.particle-light:nth-child(5n + 1) {
  background: radial-gradient(
    circle,
    rgba(34, 197, 94, 0.8) 0%,
    rgba(34, 197, 94, 0.3) 50%,
    transparent 100%
  );
  box-shadow: 0 0 6px rgba(34, 197, 94, 0.4);
}

/* Amber/Yellow particles - Dark theme */
.particle-dark:nth-child(7n + 1) {
  background: radial-gradient(
    circle,
    rgba(253, 230, 138, 0.9) 0%,
    rgba(253, 230, 138, 0.5) 50%,
    transparent 100%
  );
  box-shadow: 0 0 8px rgba(253, 230, 138, 0.7);
}

/* Amber particles - Light theme */
.particle-light:nth-child(7n + 1) {
  background: radial-gradient(
    circle,
    rgba(245, 158, 11, 0.8) 0%,
    rgba(245, 158, 11, 0.3) 50%,
    transparent 100%
  );
  box-shadow: 0 0 6px rgba(245, 158, 11, 0.4);
}

/* Additional color variations for more diversity */
.particle-dark:nth-child(9n + 1) {
  background: radial-gradient(
    circle,
    rgba(251, 146, 60, 0.9) 0%,
    rgba(251, 146, 60, 0.5) 50%,
    transparent 100%
  );
  box-shadow: 0 0 8px rgba(251, 146, 60, 0.7);
}

.particle-light:nth-child(9n + 1) {
  background: radial-gradient(
    circle,
    rgba(234, 88, 12, 0.8) 0%,
    rgba(234, 88, 12, 0.3) 50%,
    transparent 100%
  );
  box-shadow: 0 0 6px rgba(234, 88, 12, 0.4);
}

.particle-dark:nth-child(11n + 1) {
  background: radial-gradient(
    circle,
    rgba(244, 114, 182, 0.9) 0%,
    rgba(244, 114, 182, 0.5) 50%,
    transparent 100%
  );
  box-shadow: 0 0 8px rgba(244, 114, 182, 0.7);
}

.particle-light:nth-child(11n + 1) {
  background: radial-gradient(
    circle,
    rgba(219, 39, 119, 0.8) 0%,
    rgba(219, 39, 119, 0.3) 50%,
    transparent 100%
  );
  box-shadow: 0 0 6px rgba(219, 39, 119, 0.4);
}

/* Size variations */
.particle:nth-child(4n + 1) {
  width: 4px;
  height: 4px;
}

.particle:nth-child(6n + 1) {
  width: 2px;
  height: 2px;
}

.particle:nth-child(8n + 1) {
  width: 5px;
  height: 5px;
}

.particle:nth-child(10n + 1) {
  width: 1.5px;
  height: 1.5px;
}

/* Enhanced animation keyframes */
@keyframes shimmer {
  0% {
    opacity: calc(var(--particle-intensity, 0.6) * 0.4);
    transform: translate(-50%, -50%) scale(0.8);
  }
  50% {
    opacity: calc(var(--particle-intensity, 0.6) * 1.2);
    transform: translate(-50%, -50%) scale(1.3);
  }
  100% {
    opacity: calc(var(--particle-intensity, 0.6) * 0.4);
    transform: translate(-50%, -50%) scale(0.8);
  }
}

/* All particles use only shimmer animation with varied timing */
.particle:nth-child(2n) {
  animation: shimmer 3s ease-in-out infinite;
}

.particle:nth-child(3n) {
  animation: shimmer 4s ease-in-out infinite;
}

.particle:nth-child(4n + 1) {
  animation: shimmer 3.5s ease-in-out infinite;
}

.particle:nth-child(5n + 1) {
  animation: shimmer 4.5s ease-in-out infinite;
}

.particle:nth-child(6n + 1) {
  animation: shimmer 2.5s ease-in-out infinite;
}

.particle:nth-child(7n + 1) {
  animation: shimmer 5s ease-in-out infinite;
}

.particle:nth-child(8n + 1) {
  animation: shimmer 3.2s ease-in-out infinite;
}

.particle:nth-child(9n + 1) {
  animation: shimmer 4.2s ease-in-out infinite;
}

.particle:nth-child(11n + 1) {
  animation: shimmer 3.8s ease-in-out infinite;
}

/* Default for any particles not covered above */
.particle {
  animation: shimmer 3.8s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .particle {
    width: 2px;
    height: 2px;
  }

  .particle:nth-child(4n + 1) {
    width: 3px;
    height: 3px;
  }
}

/* Tablet adjustments */
@media (max-width: 1024px) and (min-width: 769px) {
  .particle:nth-child(8n + 1) {
    width: 4px;
    height: 4px;
  }
}

/* Enhanced theme transitions */
.particle-light {
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    opacity 0.3s ease;
}

.particle-dark {
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    opacity 0.3s ease;
}

/* Performance optimizations */
.particle {
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
