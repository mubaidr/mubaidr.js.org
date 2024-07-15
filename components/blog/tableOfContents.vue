<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },
})

// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link]
      if (link.children) {
        // recursively flatten children links
        let flattened = flattenLinks(link.children)
        _link = [link, ...flattened]
      }
      return _link
    })
    .flat(1)
  return _links
}

import { ref } from 'vue'
const isVisible = ref(true)
const toggleToc = () => {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <nav class="w-full">
    <header
      :class="[
        'flex flex-row justify-between items-center cursor-pointer mb-2',
      ]"
      @click="toggleToc"
      aria-label="Expand the table of contents."
    >
      <span class="blog-aside-title mb-0">Table of Contents</span>
      <IconsChevronDown
        :class="['w-6 h-6 transform', isVisible ? '' : 'rotate-180']"
        width="24"
        height="24"
      />
    </header>

    <ul
      v-if="links"
      :class="[isVisible ? 'block' : 'hidden']"
      class="list-inside list-disc"
    >
      <!-- render each link with depth class -->
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        class="list-item"
      >
        <NuxtLink
          :href="`#${link.id}`"
          class="underline underline-offset-2"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
