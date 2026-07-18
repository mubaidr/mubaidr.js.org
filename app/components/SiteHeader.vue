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
  <div class="fixed inset-x-0 top-8 z-50 flex justify-center px-4">
    <UHeader
      title="mubaidr"
      :class="[
        'w-full max-w-xl rounded-full border border-default bg-default/50 backdrop-blur transition-shadow duration-300',
        scrolled && 'shadow-lg',
      ]"
      :ui="{
        root: 'sticky-0 static',
        container: 'px-4 sm:px-4',
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
        <ThemeSwitcher />

        <div class="hidden md:block">
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
        </div>
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
  </div>
</template>
