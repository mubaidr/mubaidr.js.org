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
      'fixed flex flex-col items-center w-24 z-21 bottom-[56px] right-0 transform duration-250 p-8',
      isVisible ? '' : 'translate-x-full',
    ]"
  >
    <UButton aria-label="Scroll to Top" @click="scrollToTop" variant="subtle">
      <Icon name="i-ph-arrow-up"></Icon>
    </UButton>
  </div>
</template>
