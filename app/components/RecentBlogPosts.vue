<script lang="ts" setup>
const { count, title } = defineProps({
  count: {
    type: Number,
    default: 3,
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
      <div>
        <h2>
          {{ title }}
        </h2>

        <p>Latest thoughts on development, technology, and best practices</p>
      </div>

      <!-- Show blog posts if available -->
      <div
        v-if="recentPostsData && recentPostsData.length > 0"
        class="grid gap-8 md:grid-cols-3"
      >
        <NuxtLink
          v-for="(post, index) in recentPostsData"
          :key="post.path || `post-${index}`"
          :to="post.path || '/blog'"
          class="h-full"
        >
          <UCard class="h-full overflow-hidden">
            <div class="space-y-6">
              <div
                v-if="post.socialImage?.src || post.image"
                class="aspect-video -mx-6 -mt-6 mb-4 overflow-hidden"
              >
                <img
                  :src="post.socialImage?.src || post.image"
                  :alt="post.socialImage?.alt || post.title"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div class="space-y-3">
                <span class="font-semibold line-clamp-2">
                  {{ post.title }}
                </span>
                <p class="line-clamp-3">
                  {{ post.description }}
                </p>
                <div
                  class="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800 text-sm"
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
    </div>
  </div>
</template>
