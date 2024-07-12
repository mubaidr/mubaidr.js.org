<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>
<template>
  <ClientOnly>
    <Button
      aria-label="Theme"
      @click="isDark = !isDark"
    >
      <Icon :name="isDark ? 'i-ph-moon' : 'i-ph-sun'"></Icon>
    </Button>
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
