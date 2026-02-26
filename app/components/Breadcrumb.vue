<script lang="ts" setup>
interface BreadcrumbItem {
  label: string
  path: string
}

interface Props {
  items: BreadcrumbItem[]
}

const props = defineProps<Props>()

// Generate Schema.org BreadcrumbList
const breadcrumbList = computed(() => ({
  '@type': 'BreadcrumbList',
  itemListElement: props.items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: item.path,
  })),
}))

// Register BreadcrumbList JSON-LD
useSchemaOrg(breadcrumbList)

// Define component name for multi-word requirement
defineOptions({
  name: 'BreadcrumbNav'
})
</script>

<template>
  <nav aria-label="Breadcrumb" class="mb-8">
    <ol class="flex items-center flex-wrap gap-2 text-sm">
      <li v-for="(item, index) in items" :key="item.path" class="flex items-center">
        <span v-if="index > 0" class="text-neutral-400 dark:text-neutral-500 mx-2" aria-hidden="true">
          /
        </span>
        <NuxtLink
v-if="index < items.length - 1" :to="item.path"
          class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-neutral-900 dark:text-neutral-100 font-medium" aria-current="page">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>
