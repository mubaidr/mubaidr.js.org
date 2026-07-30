<script lang="ts" setup>
const { count } = defineProps({
  count: {
    type: Number,
    default: 2,
  },
})

// Fetch featured blog posts using composable
const { data: featuredPostsData } = await useFeaturedBlogPosts(count)
</script>

<template>
  <UPageSection title="Featured Posts">
    <UBlogPosts v-if="featuredPostsData && featuredPostsData.length > 0">
      <UBlogPost
        v-for="(post, index) in featuredPostsData"
        :key="post.path || `post-${index}`"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :image="post.socialImage?.src || post.image"
        :to="post.path || '/blog'"
        :badge="post.tags?.[0]"
      />
    </UBlogPosts>
  </UPageSection>
</template>
