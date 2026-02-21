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

// Fetch featured blog posts using composable
const { data: featuredPostsData } = await useFeaturedBlogPosts(count)
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

      <!-- Show blog posts if available, otherwise show placeholder -->
      <div v-if="featuredPostsData && featuredPostsData.length > 0" class="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        <UCard
v-for="(post, index) in featuredPostsData" :key="post.path || `post-${index}`"
          class="group cursor-pointer h-full overflow-hidden" @click="navigateTo(post.path || '/blog')">
          <div class="space-y-6">
            <div v-if="post.socialImage?.src || post.image" class="aspect-video -mx-6 -mt-6 mb-4 overflow-hidden">
              <img
:src="post.socialImage?.src || post.image" :alt="post.socialImage?.alt || post.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" >
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
      </div>
    </div>
  </div>
</template>
