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
      :icon="isDark ? 'i-ph-moon' : 'i-ph-sun'"
      variant="ghost"
      color="neutral"
      size="xs"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="toggleTheme"
    />
    <template #fallback>
      <div class="h-8 w-8"></div>
    </template>
  </ClientOnly>
</template>
