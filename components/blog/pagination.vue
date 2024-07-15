<script setup>
import { computed } from 'vue'
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  nextPage: {
    type: Boolean,
    required: true,
  },
  baseUrl: {
    type: String,
    required: true,
  },
  pageUrl: {
    type: String,
    required: true,
  },
})

const getPageUrl = (pageNo) => {
  return `${props.pageUrl}${pageNo}/`
}
// Calculate the page range to show
const pageRange = [
  Math.max(1, props.currentPage - 1),
  props.currentPage,
  Math.min(props.totalPages, props.currentPage + 1),
]

const prevLink = computed(() => {
  return props.currentPage === 2
    ? props.baseUrl
    : `${props.pageUrl}${props.currentPage - 1}/`
})
</script>

<template>
  <div class="flex gap-4">
    <!-- Chevron -->
    <nuxt-link
      v-show="currentPage > 1"
      :to="prevLink"
    >
      <IconsChevronDown
        class="transform rotate-90 h-6 w-6"
        width="24"
        height="24"
      />
    </nuxt-link>

    <!-- First Page -->
    <nuxt-link
      :class="['pagination-item', currentPage === 1 ? 'active' : '']"
      :to="baseUrl"
    >
      1
    </nuxt-link>
    <!-- ... -->

    <span
      v-show="currentPage > 2"
      class="pagination-extra"
    >
      ...
    </span>

    <template
      v-for="page in pageRange"
      :key="page"
    >
      <nuxt-link
        v-show="page !== 1 && page !== totalPages"
        :class="['pagination-item', currentPage === page ? 'active' : '']"
        :to="getPageUrl(page)"
      >
        {{ page }}
      </nuxt-link>
    </template>

    <!-- ... -->
    <span
      v-show="currentPage < totalPages - 1"
      class="pagination-extra"
    >
      ...
    </span>

    <!-- Last Page -->
    <nuxt-link
      v-show="totalPages > 1"
      :class="['pagination-item', currentPage === totalPages ? 'active' : '']"
      :to="getPageUrl(totalPages)"
    >
      {{ totalPages }}
    </nuxt-link>

    <!-- Chevron -->
    <nuxt-link
      v-show="currentPage < totalPages"
      class="pagination-item pagination-icon"
      :to="getPageUrl(currentPage + 1)"
    >
      <IconsChevronDown
        class="transform -rotate-90 h-6 w-6"
        width="24"
        height="24"
      />
    </nuxt-link>
  </div>
</template>
