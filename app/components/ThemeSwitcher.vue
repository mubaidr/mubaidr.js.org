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
      variant="ghost"
      color="neutral"
      size="xs"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="toggleTheme"
    >
      <UIcon name="i-ph-moon" v-if="isDark"></UIcon>
      <UIcon name="i-ph-sun" v-if="!isDark"></UIcon>
    </UButton>
    <template #fallback>
      <div class="h-8 w-8"></div>
    </template>
  </ClientOnly>
</template>
