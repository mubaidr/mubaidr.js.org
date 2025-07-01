<script setup>
const gridCanvas = useTemplateRef("gridCanvas")
let animationFrame = null
let canvasContext = null
const lastCanvasSize = { width: 0, height: 0 }

// Color mode for theme-aware styling
const colorMode = useColorMode()

// Mouse tracking
const mousePos = ref({ x: 0, y: 0 })
const isMouseInside = ref(false)
const mousePercent = { x: 50, y: 50 }
let canvasRect = null

// Grid configuration
const gridConfig = {
  size: 25, // Grid cell size
  lineWidth: 0.5, // Line width for grid lines
  maxDistance: 150, // Maximum distance for mouse interaction
  baseOpacity: 0.05, // Base opacity for grid lines
  highlightOpacity: 0.25, // Highlight opacity when mouse is near
}

// Performance optimization: Cache theme colors
const cachedColors = computed(() => {
  const isDark = colorMode.value === "dark"

  if (isDark) {
    return {
      primary: { r: 147, g: 197, b: 253 },
      secondary: { r: 196, g: 181, b: 253 },
      accent: { r: 167, g: 243, b: 208 },
      baseOpacity: 0.05,
      highlightOpacity: 0.25,
    }
  } else {
    return {
      primary: { r: 59, g: 130, b: 246 },
      secondary: { r: 139, g: 92, b: 246 },
      accent: { r: 34, g: 197, b: 94 },
      baseOpacity: 0.05,
      highlightOpacity: 0.25,
    }
  }
})

// Optimized grid drawing with mouse interaction
const drawGrid = () => {
  if (!gridCanvas.value) return

  const canvas = gridCanvas.value

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

  const colors = cachedColors.value
  const { size, lineWidth, maxDistance } = gridConfig

  // Calculate grid lines
  const cols = Math.ceil(canvas.width / size) + 1
  const rows = Math.ceil(canvas.height / size) + 1

  // Mouse position for highlighting
  const mouseX =
    isMouseInside.value && canvasRect
      ? mousePos.value.x - canvasRect.left
      : -1000
  const mouseY =
    isMouseInside.value && canvasRect
      ? mousePos.value.y - canvasRect.top
      : -1000

  canvasContext.lineWidth = lineWidth

  // Draw vertical lines
  for (let i = 0; i <= cols; i++) {
    const x = i * size

    // Calculate distance from mouse to line
    const distanceToMouse = Math.abs(x - mouseX)
    let opacity = colors.baseOpacity

    if (isMouseInside.value && distanceToMouse < maxDistance) {
      const factor = 1 - distanceToMouse / maxDistance
      opacity =
        colors.baseOpacity +
        (colors.highlightOpacity - colors.baseOpacity) * factor
    }

    const { r, g, b } = colors.primary
    canvasContext.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
    canvasContext.beginPath()
    canvasContext.moveTo(x, 0)
    canvasContext.lineTo(x, canvas.height)
    canvasContext.stroke()
  }

  // Draw horizontal lines
  for (let i = 0; i <= rows; i++) {
    const y = i * size

    // Calculate distance from mouse to line
    const distanceToMouse = Math.abs(y - mouseY)
    let opacity = colors.baseOpacity

    if (isMouseInside.value && distanceToMouse < maxDistance) {
      const factor = 1 - distanceToMouse / maxDistance
      opacity =
        colors.baseOpacity +
        (colors.highlightOpacity - colors.baseOpacity) * factor
    }

    const { r, g, b } = colors.primary
    canvasContext.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
    canvasContext.beginPath()
    canvasContext.moveTo(0, y)
    canvasContext.lineTo(canvas.width, y)
    canvasContext.stroke()
  }
}

const animate = () => {
  drawGrid()
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
  if (gridCanvas.value) {
    canvasRect = gridCanvas.value.getBoundingClientRect()
  }
}

onMounted(() => {
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
    <!-- Grid Canvas -->
    <canvas
      ref="gridCanvas"
      class="absolute inset-0 w-full h-full transition-opacity duration-300"
      :class="colorMode === 'dark' ? 'opacity-50' : 'opacity-60'"
    />
  </div>
</template>

<style scoped>
/* Grid background performance optimizations */
canvas {
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Enhanced theme transitions */
canvas {
  transition: opacity 0.3s ease;
}

/* Responsive adjustments for grid size */
@media (max-width: 768px) {
  /* Mobile optimizations are handled in JavaScript */
}

/* Tablet adjustments */
@media (max-width: 1024px) and (min-width: 769px) {
  /* Tablet optimizations are handled in JavaScript */
}
</style>
