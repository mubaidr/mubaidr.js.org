<script setup lang="ts">
interface BlogPost {
  path: string
  title: string
  series?: string
  seriesOrder?: number
}

interface Props {
  series: string
  currentOrder: number
}

const props = defineProps<Props>()

const { data: seriesPosts } = await useAsyncData(
  `series-${props.series}`,
  async () => {
    const posts = await queryCollection("blog")
      .where("series", "=", props.series)
      .all()

    // Sort manually since seriesOrder might not be in the schema
    return posts.sort(
      (a: BlogPost, b: BlogPost) => (a.seriesOrder || 0) - (b.seriesOrder || 0),
    )
  },
)

const currentIndex = computed(() => {
  return (
    seriesPosts.value?.findIndex(
      (p: BlogPost) => p.seriesOrder === props.currentOrder,
    ) ?? -1
  )
})

const previousPost = computed(() => {
  if (currentIndex.value > 0 && seriesPosts.value) {
    return seriesPosts.value[currentIndex.value - 1]
  }
  return null
})

const nextPost = computed(() => {
  if (seriesPosts.value && currentIndex.value < seriesPosts.value.length - 1) {
    return seriesPosts.value[currentIndex.value + 1]
  }
  return null
})
</script>

<template>
  <div
    v-if="seriesPosts && seriesPosts.length > 1"
    class="border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-8 bg-gray-50 dark:bg-gray-900/50"
  >
    <div class="flex items-center gap-3 mb-4">
      <UIcon name="i-ph-books" class="w-6 h-6 text-primary-500" />
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {{ series }} Series
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Part {{ currentOrder }} of {{ seriesPosts.length }}
        </p>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-3">
      <NuxtLink
        v-if="previousPost"
        :to="previousPost.path"
        class="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 text-left"
      >
        <UIcon name="i-ph-arrow-left" />
        <div class="flex flex-col">
          <span
            class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide"
            >Previous</span
          >
          <span
            class="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-1"
            >{{ previousPost.title }}</span
          >
        </div>
      </NuxtLink>

      <NuxtLink
        v-if="nextPost"
        :to="nextPost.path"
        class="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 text-right sm:ml-auto"
      >
        <div class="flex flex-col">
          <span
            class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide"
            >Next</span
          >
          <span
            class="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-1"
            >{{ nextPost.title }}</span
          >
        </div>
        <UIcon name="i-ph-arrow-right" />
      </NuxtLink>
    </div>
  </div>
</template>
