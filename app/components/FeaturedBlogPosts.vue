<script lang="ts" setup>
const { count, title } = defineProps({
  count: {
    type: Number,
    default: 2,
  },
  title: {
    type: String,
    default: "Featured Blog Posts",
    required: false,
  },
})

// Fetch featured blog posts using composable with loading and error state
const { data: featuredPostsData, pending: isLoading, error, refresh } = await useFeaturedBlogPosts(count)

// Retry function for error recovery
const retryFetch = () => {
  refresh()
}
</script>

<template>
  <div v-if="featuredPostsData && featuredPostsData.length > 0">
    <div class="space-y-6">
      <!-- Featured Blog Posts -->
      <div class="text-center">
        <h2 class="mb-4">
          {{ title }}
        </h2>
        <p class="max-w-3xl mx-auto">
          Handpicked articles that highlight key insights, tutorials, and best
          practices in web development and technology.
        </p>
      </div>

      <!-- Loading Skeleton -->
      <div v-if="isLoading" class="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        <USkeleton v-for="i in count" :key="i" class="h-96 w-full" />
      </div>

      <!-- Error State -->
      <UAlert
v-else-if="error" color="error" variant="soft" icon="i-ph-warning-circle"
        title="Unable to Load Featured Posts" description="We couldn't load the featured blog posts. Please try again."
        class="max-w-2xl mx-auto">
        <template #actions>
          <UButton color="error" variant="solid" size="sm" icon="i-ph-arrow-clockwise" @click="retryFetch">
            Retry
          </UButton>
        </template>
      </UAlert>

      <!-- Show blog posts if available -->
      <div
v-else-if="featuredPostsData && featuredPostsData.length > 0"
        class="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        <NuxtLink
v-for="(post, index) in featuredPostsData" :key="post.path || `post-${index}`"
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
                  class="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs font-medium text-neutral-500">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-ph-calendar-blank-bold" />
                    <span>
                      {{
                        new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      }}
                    </span>
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
color="neutral" variant="soft" icon="i ph-article" title="No Featured Posts Available"
          description="Check back soon for featured blog posts." class="max-w-2xl mx-auto" />
      </div>
    </div>
  </div>
</template>
