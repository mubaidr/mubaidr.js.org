<script setup lang="ts">
// Scroll handling
import { nextTick, onUnmounted, ref } from "vue"

const isVisible = ref(false)

const handleScroll = () => {
  // Only run the code if we are on the client
  if (typeof window !== "undefined") {
    const st = window.pageYOffset || document.documentElement.scrollTop
    isVisible.value = st > window.innerHeight / 3
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("scroll", handleScroll)
  nextTick(() => handleScroll())
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("scroll", handleScroll)
  }
})
</script>

<template>
  <div
    :class="[
      'fixed flex flex-col items-center w-24 z-20 bottom-[128px] right-0 transform duration-150 p-6',
      isVisible ? '' : 'translate-x-full',
    ]"
  >
    <button
      type="button"
      aria-label="Scroll to Top"
      class="flex flex-col gap-2 items-center text-center bg-primary-700 p-4 text-white rounded-full shadow-soft-lg"
      @click="scrollToTop"
    >
      <Icon name="i-ph-arrow-up"></Icon>
    </button>
  </div>
</template>
