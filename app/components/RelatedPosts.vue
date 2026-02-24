<script lang="ts" setup>
interface BlogPost {
  path: string
  title: string
  description: string
  date: string
  tags?: string[]
  readingTime?: string
}

const props = defineProps<{
  currentPath: string
  tags?: string[]
  limit?: number
}>()

const limit = props.limit || 3

// Fetch related posts based on tags
const { data: relatedPosts } = await useAsyncData(
  `related-posts-${props.currentPath}`,
  async () => {
    if (!props.tags || props.tags.length === 0) {
      // If no tags, return recent posts
      const allPosts = await queryCollection("blog").order("date", "DESC").all()
      return allPosts
        .filter((post) => post.path !== props.currentPath)
        .slice(0, limit) as BlogPost[]
    }

    // Fetch posts with matching tags
    const allPosts = await queryCollection("blog").all()

    const related = allPosts
      .filter(
        (post) =>
          post.path !== props.currentPath &&
          post.tags?.some((tag) => props.tags?.includes(tag)),
      )
      .sort((a, b) => {
        // Sort by number of matching tags, then by date
        const aMatches =
          a.tags?.filter((tag) => props.tags?.includes(tag)).length || 0
        const bMatches =
          b.tags?.filter((tag) => props.tags?.includes(tag)).length || 0
        if (bMatches !== aMatches) return bMatches - aMatches
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
      .slice(0, limit)

    return related as BlogPost[]
  },
  {
    watch: [() => props.currentPath, () => props.tags],
  },
)
</script>

<template>
  <div
    v-if="relatedPosts && relatedPosts.length > 0"
    class="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800"
  >
    <h2 class="text-2xl font-bold mb-8 text-center">Continue Reading</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="post in relatedPosts"
        :key="post.path"
        :to="post.path"
        class="group block p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <h3
          class="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors line-clamp-2"
        >
          {{ post.title }}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {{ post.description }}
        </p>
        <div
          class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500"
        >
          <span>{{ $formatDate(post.date) }}</span>
          <span v-if="post.readingTime">{{ post.readingTime }}</span>
        </div>
        <div v-if="post.tags" class="mt-4 flex flex-wrap gap-2">
          <UBadge
            v-for="tag in post.tags.slice(0, 3)"
            :key="tag"
            :label="tag"
            size="xs"
            variant="soft"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
