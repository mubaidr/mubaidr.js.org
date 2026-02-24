<script lang="ts" setup>
const { count, title } = defineProps({
  count: {
    type: Number,
    default: 2,
  },
  title: {
    type: String,
    default: "Recent Blog Posts",
    required: false,
  },
})

// Fetch recent blog posts using composable with loading state
const { data: recentPostsData, pending: isLoading } =
  await useRecentBlogPosts(count)
</script>

<template>
  <div>
    <div class="space-y-16">
      <!-- Recent Blog Posts - Show 2 Most Recent -->
      <div class="text-center space-y-6">
        <h2>
          {{ title }}
        </h2>

        <p class="max-w-3xl mx-auto">
          Latest thoughts on development, technology, and best practices
        </p>
      </div>

      <!-- Show blog posts if available, otherwise show placeholder -->
      <!-- Loading Skeleton -->
      <div v-if="isLoading" class="grid gap-8 md:grid-cols-2">
        <USkeleton v-for="i in count" :key="i" class="h-96 w-full" />
      </div>

      <div v-else-if="recentPostsData && recentPostsData.length > 0" class="grid gap-8 md:grid-cols-2">
        <UCard
v-for="(post, index) in recentPostsData" :key="post.path || `post-${index}`"
          class="group cursor-pointer h-full overflow-hidden" @click="navigateTo(post.path || '/blog')">
          <div class="space-y-6">
            <div v-if="post.socialImage?.src || post.image" class="aspect-video -mx-6 -mt-6 mb-4 overflow-hidden">
              <img
:src="post.socialImage?.src || post.image" :alt="post.socialImage?.alt || post.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy" >
            </div>
            <div class="space-y-3">
              <h3
                class="text-xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ post.title }}
              </h3>
              <p class="text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                {{ post.description }}
              </p>
              <div
                class="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs font-medium text-neutral-500 dark:text-neutral-500">
                <div class="flex items-center gap-2">
                  <UIcon name="i-ph-calendar-blank-bold" />
                  <span>{{ $formatDate(post.date) }}</span>
                </div>
                <div class="flex items-center gap-1 text-primary-600 dark:text-primary-400">
                  <span>Read More</span>
                  <UIcon name="i-ph-arrow-right-bold" />
                </div>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <div class="text-center">
        <UButton to="/blog" variant="outline" size="xl">
          <UIcon name="i-ph-article" />
          View All Posts
        </UButton>
      </div>
    </div>
  </div>
</template>
