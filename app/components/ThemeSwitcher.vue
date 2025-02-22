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
    class="cursor-pointer h-8"
  >
    <div v-show="isDark">
      <Icon
        name="i-ph-moon"
        class="text-black dark:text-white"
      ></Icon>
    </div>
    <div v-show="!isDark">
      <Icon
        name="i-ph-sun"
        class="text-black dark:text-white"
      ></Icon>
    </div>
  </button>
</template>
