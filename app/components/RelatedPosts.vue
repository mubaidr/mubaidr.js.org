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
          post.tags?.some((tag: string) => props.tags?.includes(tag)),
      )
      .sort((a, b) => {
        // Sort by number of matching tags, then by date
        const aMatches =
          a.tags?.filter((tag: string) => props.tags?.includes(tag)).length || 0
        const bMatches =
          b.tags?.filter((tag: string) => props.tags?.includes(tag)).length || 0
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
    <UBlogPosts>
      <UBlogPost
        v-for="post in relatedPosts"
        :key="post.path"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :to="post.path"
        :badge="post.tags?.[0]"
      />
    </UBlogPosts>
  </div>
</template>
