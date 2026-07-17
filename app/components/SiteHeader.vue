<script setup lang="ts">
// Navigation items configuration
const navigationItems = [{ to: "/blog", label: "Blog", icon: "i-ph-article" }]

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
  <UHeader
    title="mubaidr"
    :class="scrolled && 'shadow-md transition-shadow duration-300'"
  >
    <template #title>
      <span>
        <span class="text-muted">&lt;</span>mubaidr<span class="text-muted"
          >/&gt;</span
        >
      </span>
    </template>

    <template #right>
      <ThemeSwitcher />
      <UButton
        v-for="item in navigationItems"
        :key="item.to"
        :to="item.to"
        variant="link"
        color="neutral"
      >
        {{ item.label }}
      </UButton>

      <UButton
        to="/contact"
        variant="outline"
        color="primary"
        label="Contact"
      />
    </template>

    <template #body>
      <div class="flex flex-col gap-2 -mx-2.5">
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
        <UButton
          to="/contact"
          variant="outline"
          color="primary"
          label="Contact"
          block
        />
      </div>
    </template>
  </UHeader>
</template>
