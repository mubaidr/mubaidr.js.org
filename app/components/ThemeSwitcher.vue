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
      @click="toggleTheme"
    >
      <UIcon v-if="isDark" name="i-ph-moon" />
      <UIcon v-if="!isDark" name="i-ph-sun" />
    </UButton>
    <template #fallback>
      <div class="h-8 w-8" />
    </template>
  </ClientOnly>
</template>
