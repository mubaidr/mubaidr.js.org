<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === "dark")

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
}
</script>

<template>
  <ClientOnly>
    <UButton
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      variant="ghost"
      class="transition-transform duration-200 ease-in-out active:scale-95 hover:scale-105"
      color="neutral"
      @click="toggleTheme"
      :icon="isDark ? 'i-ph-moon' : 'i-ph-sun'"
    >
    </UButton>
    <template #fallback>
      <div class="h-6 w-6" />
    </template>
  </ClientOnly>
</template>
