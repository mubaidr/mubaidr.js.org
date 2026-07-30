<script setup lang="ts">
// Navigation items configuration
const navigationItems = [
  { to: "/blog", label: "Blog", icon: "i-ph-article" },
  { to: "/contact", label: "Contact", icon: "i-ph-article" },
]

// Header shadow on scroll
const scrolled = ref(false)
const handleScroll = () => {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <div class="fixed inset-x-0 top-12 z-50 flex justify-center px-12 md:px-0">
    <UHeader
      title="mubaidr"
      :class="[
        'w-full max-w-xl rounded-full border backdrop-blur transition-shadow duration-300',
        scrolled && 'shadow',
        'border-primary/25',
      ]"
      :ui="{
        root: 'sticky-0 static',
        container: 'px-4!',
      }"
      mode="drawer"
    >
      <template #title>
        <span class="text-base font-normal">
          <span class="text-muted">&lt;</span>mubaidr<span class="text-muted"
            >/&gt;</span
          >
        </span>
      </template>

      <template #right>
        <nav aria-label="Main navigation" class="hidden md:block">
          <UButton
            v-for="item in navigationItems"
            :key="item.to"
            :to="item.to"
            variant="link"
            color="neutral"
          >
            {{ item.label }}
          </UButton>
        </nav>
        <UColorModeSelect
          variant="ghost"
          color="neutral"
          size="sm"
          :ui="{
            base: 'items-center h-10 py-4',
            value: 'hidden',
            itemLabel: 'hidden',
            label: 'hidden',
          }"
        >
        </UColorModeSelect>
      </template>

      <template #body>
        <nav aria-label="Mobile navigation" class="flex flex-col gap-2 -mx-2.5">
          <UButton
            v-for="item in navigationItems"
            :key="item.to"
            :to="item.to"
            variant="link"
            color="neutral"
            block
          >
            {{ item.label }}
          </UButton>
        </nav>
      </template>
    </UHeader>
  </div>
</template>
