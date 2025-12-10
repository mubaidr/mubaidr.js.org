<script setup lang="ts">
const colorMode = useColorMode()

// Theme-aware color palette
const palette = computed(() => {
  if (colorMode.value === "dark") {
    return {
      bg: "#0b0b0c",
      hex: "#ffffff08", // 3% white for hex lines
      accent: "#ffffff",
      glow: "#7dd3fc0f", // cyan glow
      secondaryGlow: "#c084fc12", // purple glow
    }
  } else {
    return {
      bg: "#ffffff",
      hex: "#00000006", // 2.5% black for hex lines
      accent: "#000000",
      glow: "#60a5fa14", // blue glow
      secondaryGlow: "#a78bfa12", // violet glow
    }
  }
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
    :class="showBg ? 'opacity-75' : 'opacity-0'"
    :style="{ backgroundColor: palette.bg }"
    aria-hidden="true"
  >
    <!-- Geometric pattern container -->
    <div
      class="absolute inset-0 w-full h-full overflow-hidden"
      :style="{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, var(--glow-a) 0%, transparent 70%),
          radial-gradient(circle at 90% 80%, var(--glow-b) 0%, transparent 70%)
        `,
        ['--glow-a' as any]: palette.glow,
        ['--glow-b' as any]: palette.secondaryGlow,
      }"
    ></div>

    <!-- Hexagonal grid pattern -->
    <div
      class="absolute inset-0 w-full h-full opacity-60"
      :style="{
        backgroundImage: `
          repeating-linear-gradient(30deg, var(--hex-color), var(--hex-color) 1px, transparent 1px, transparent 40px),
          repeating-linear-gradient(-30deg, var(--hex-color), var(--hex-color) 1px, transparent 1px, transparent 40px),
          repeating-linear-gradient(90deg, var(--hex-color), var(--hex-color) 1px, transparent 1px, transparent 69px)
        `,
        ['--hex-color' as any]: palette.hex,
      }"
    ></div>

    <!-- Floating geometric shapes -->
    <div class="absolute inset-0 w-full h-full">
      <!-- Triangle shape -->
      <div
        class="absolute top-1/4 left-1/4 w-32 h-28 animate-float-triangle"
        :style="{
          background: `linear-gradient(45deg, transparent, var(--shape-accent))`,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          ['--shape-accent' as any]: palette.accent,
          animationDuration: '25s',
        }"
      ></div>

      <!-- Circle shape -->
      <div
        class="absolute top-1/2 right-1/5 w-20 h-20 animate-pulse-scale"
        :style="{
          background: `radial-gradient(circle, var(--glow-a), transparent)`,
          borderRadius: '50%',
          ['--glow-a' as any]: palette.glow,
          animationDuration: '20s',
        }"
      ></div>

      <!-- Rounded square shape -->
      <div
        class="absolute bottom-1/3 left-1/3 w-24 h-24 animate-rotate-square"
        :style="{
          background: `linear-gradient(135deg, transparent, var(--shape-accent))`,
          borderRadius: '20%',
          ['--shape-accent' as any]: palette.accent,
          animationDuration: '30s',
        }"
      ></div>
    </div>

    <!-- Subtle pulse overlay for depth -->
    <div
      class="absolute inset-0 w-full h-full animate-pulse-glow"
      :style="{
        background: `radial-gradient(circle at center, var(--pulse-glow), transparent)`,
        ['--pulse-glow' as any]:
          colorMode.value === 'dark' ? '#ffffff05' : '#00000003',
        animationDuration: '15s',
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

@keyframes float-triangle {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translate3d(30px, -20px, 0) rotate(180deg);
    opacity: 0.7;
  }
}

@keyframes pulse-scale {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.4;
  }
}

@keyframes rotate-square {
  0% {
    transform: rotate(0deg);
    opacity: 0.3;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0.6;
  }
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

.animate-float-triangle {
  animation-name: float-triangle;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.animate-pulse-scale {
  animation-name: pulse-scale;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.animate-rotate-square {
  animation-name: rotate-square;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.animate-pulse-glow {
  animation-name: pulse-glow;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>
