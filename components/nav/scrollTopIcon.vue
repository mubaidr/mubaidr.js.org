<script setup>
// Scroll handling
import { onUnmounted, ref, nextTick } from 'vue'
const isVisible = ref(false)
const handleScroll = () => {
  // Only run the code if we are on the client
  if (typeof window !== 'undefined') {
    const st = window.pageYOffset || document.documentElement.scrollTop
    isVisible.value = st > window.innerHeight / 2
  }
}
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', handleScroll)
  nextTick(() => handleScroll())
}
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <div
    :class="[
      'fixed flex flex-col items-center w-24 z-20 bottom-[48px] right-0 transform duration-150 p-6',
      isVisible ? '' : 'translate-x-full',
    ]"
  >
    <a
      href="#"
      aria-label="Scroll to Top"
      class="flex flex-col gap-2 items-center text-center rounded-full bg-primary-500 p-4"
    >
      <IconsArrowUp
        class="w-4 h-4"
        width="16"
        height="16"
      />
      <span class="text-xs">Scroll to Top</span>
    </a>
  </div>
</template>
