<script lang="ts" setup>
const { count } = defineProps({
  count: {
    type: Number,
    default: 3,
  },
})

const { data: recentPostsData } = await useRecentBlogPosts(count)
</script>

<template>
  <UPageSection
    v-if="recentPostsData"
    title="From the Blog"
    description="Technical writing on architecture, tooling, and engineering practices"
    icon="ph:note-blank"
  >
    <UBlogPosts v-if="recentPostsData.length > 0">
      <UBlogPost
        v-for="(post, index) in recentPostsData"
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
