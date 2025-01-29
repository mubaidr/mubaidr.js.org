<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === "dark"
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
  },
})
</script>

<template>
  <button
    type="button"
    aria-label="Theme"
    @click="isDark = !isDark"
  >
    <div v-show="isDark">
      <Icon name="i-ph-moon"></Icon>
    </div>
    <div v-show="!isDark">
      <Icon name="i-ph-sun"></Icon>
    </div>
  </button>
</template>
