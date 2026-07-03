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

// Fetch recent blog posts using composable
const { data: recentPostsData } = await useRecentBlogPosts(count)
</script>

<template>
  <div>
    <div class="space-y-16">
      <!-- Section Header -->
      <div class="text-center space-y-6">
        <h2>
          {{ title }}
        </h2>

        <p>Latest thoughts on development, technology, and best practices</p>
      </div>

      <!-- Show blog posts if available -->
      <div
        v-if="recentPostsData && recentPostsData.length > 0"
        class="grid gap-8 md:grid-cols-2"
      >
        <NuxtLink
          v-for="(post, index) in recentPostsData"
          :key="post.path || `post-${index}`"
          :to="post.path || '/blog'"
          class="h-full"
        >
          <UCard
            class="group h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="space-y-6">
              <div
                v-if="post.socialImage?.src || post.image"
                class="aspect-video -mx-6 -mt-6 mb-4 overflow-hidden"
              >
                <img
                  :src="post.socialImage?.src || post.image"
                  :alt="post.socialImage?.alt || post.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="space-y-3">
                <h3
                  class="text-xl font-bold group-hover:text-primary transition-colors duration-200"
                >
                  {{ post.title }}
                </h3>
                <p class="line-clamp-3 leading-relaxed">
                  {{ post.description }}
                </p>
                <div
                  class="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs font-medium text-neutral-500 dark:text-neutral-500"
                >
                  <div class="flex items-center gap-2">
                    <UIcon name="i-ph-calendar-blank-bold" />
                    <span>{{ $formatDate(post.date) }}</span>
                  </div>
                  <div class="flex items-center gap-1 text-primary">
                    <span
                      class="group-hover:translate-x-1 transition-transform duration-200"
                      >Read More</span
                    >
                    <UIcon name="i-ph-arrow-right-bold" />
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </NuxtLink>
      </div>

      <div
        v-if="recentPostsData && recentPostsData.length > 0"
        class="text-center"
      >
        <UButton to="/blog" variant="outline" size="xl">
          <UIcon name="i-ph-article" />
          View All Posts
        </UButton>
      </div>
    </div>
  </div>
</template>
