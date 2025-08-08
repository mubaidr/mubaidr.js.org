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
      @click="toggleTheme"
    >
      <UIcon v-if="isDark" name="i-ph-moon" />
      <UIcon v-if="!isDark" name="i-ph-sun" />
    </UButton>
    <template #fallback>
      <div class="h-6 w-6" />
    </template>
  </ClientOnly>
</template>
