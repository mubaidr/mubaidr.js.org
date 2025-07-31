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

// Fetch recent blog posts - limit to 2 most recent
const { data: recentPosts } = await useAsyncData("recent-posts", async () => {
  return queryCollection("blog").order("date", "DESC").limit(count).all()
})
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
      <div
        v-if="recentPosts && recentPosts.length > 0"
        class="grid gap-6 md:grid-cols-2"
      >
        <UCard
          v-for="(post, index) in recentPosts"
          :key="post.path || `post-${index}`"
          class="cursor-pointer h-full"
          @click="navigateTo(post.path || '/blog')"
        >
          <div class="space-y-4">
            <div class="space-y-3">
              <h3 class="font-semibold">
                {{ post.title || "Blog Post Title" }}
              </h3>
              <p class="text-neutral-600 dark:text-neutral-300">
                {{
                  post.description ||
                  "Blog post description that provides a brief overview of the content and main topics covered in the article."
                }}
              </p>
              <div
                class="flex items-center justify-between text-[10px] text-neutral-500 dark:text-neutral-400"
              >
                <span>
                  {{
                    post.date
                      ? new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "Recent"
                  }}
                </span>
                <UIcon name="i-ph-arrow-right" />
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
