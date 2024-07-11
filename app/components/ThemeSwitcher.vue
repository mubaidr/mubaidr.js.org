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
    <UButton
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    >
      <Icon
        :name="isDark ? 'i-ph-moon' : 'i-ph-sun'"
        size="1.5em"
      ></Icon>
    </UButton>
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
