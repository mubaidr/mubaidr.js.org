<script setup lang="ts">
// Navigation items configuration
const navigationItems = [
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
]
</script>

<template>
  <UHeader title="mubaidr" sticky mode="slideover">
    <template #title>
      <span class="font-mono text-sm font-medium tracking-tight">
        <span class="text-muted">~/</span>mubaidr
      </span>
    </template>

    <template #right>
      <nav
        aria-label="Main navigation"
        class="hidden items-center gap-1 md:flex"
      >
        <UButton
          v-for="item in navigationItems"
          :key="item.to"
          :to="item.to"
          variant="link"
          color="neutral"
          size="sm"
          class="font-mono"
        >
          {{ item.label }}
        </UButton>
      </nav>
    </template>

    <template #body>
      <nav aria-label="Mobile navigation" class="-mx-2.5 flex flex-col gap-2">
        <UButton
          v-for="item in navigationItems"
          :key="item.to"
          :to="item.to"
          variant="link"
          color="neutral"
          block
          class="font-mono"
        >
          {{ item.label }}
        </UButton>
      </nav>
    </template>
  </UHeader>
</template>
