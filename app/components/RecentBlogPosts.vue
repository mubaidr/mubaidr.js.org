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

// Fetch recent blog posts using composable with loading and error state
const { data: recentPostsData, pending: isLoading, error, refresh } =
  await useRecentBlogPosts(count)

// Retry function for error recovery
const retryFetch = () => {
  refresh()
}
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

      <!-- Error State -->
      <UAlert
v-if="error" color="error" variant="soft" icon="i-ph-warning-circle" title="Unable to Load Posts"
        description="We couldn't load the recent blog posts. Please try again." class="max-w-2xl mx-auto">
        <template #actions>
          <UButton color="error" variant="solid" size="sm" icon="i-ph-arrow-clockwise" @click="retryFetch">
            Retry
          </UButton>
        </template>
      </UAlert>

      <!-- Loading Skeleton -->
      <div v-else-if="isLoading" class="grid gap-8 md:grid-cols-2">
        <USkeleton v-for="i in count" :key="i" class="h-96 w-full" />
      </div>

      <!-- Show blog posts if available -->
      <div v-else-if="recentPostsData && recentPostsData.length > 0" class="grid gap-8 md:grid-cols-2">
        <NuxtLink
v-for="(post, index) in recentPostsData" :key="post.path || `post-${index}`"
          :to="post.path || '/blog'" class="h-full">
          <UCard class="group h-full overflow-hidden">
            <div class="space-y-6">
              <div v-if="post.socialImage?.src || post.image" class="aspect-video -mx-6 -mt-6 mb-4 overflow-hidden">
                <img
:src="post.socialImage?.src || post.image" :alt="post.socialImage?.alt || post.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy">
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
        </NuxtLink>
      </div>

      <!-- Empty State -->
      <div v-else-if="!isLoading && !error" class="text-center py-12">
        <UAlert
color="neutral" variant="soft" icon="i ph-article" title="No Posts Available"
          description="Check back soon for new blog posts." class="max-w-2xl mx-auto" />
      </div>

      <div v-if="recentPostsData && recentPostsData.length > 0" class="text-center">
        <UButton to="/blog" variant="outline" size="xl">
          <UIcon name="i-ph-article" />
          View All Posts
        </UButton>
      </div>
    </div>
  </div>
</template>
