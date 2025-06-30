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
    <!-- Recent Blog Posts - Show 2 Most Recent -->
    <section class="space-y-12">
      <div class="text-center space-y-6">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
        >
          <UIcon name="i-ph-article" class="w-4 h-4 text-primary" />
          <span class="text-sm font-medium text-primary">Latest Articles</span>
        </div>

        <h2
          class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
        >
          {{ title }}
        </h2>

        <p
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
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
          class="group card-interaction cursor-pointer h-full"
          variant="soft"
          @click="navigateTo(post.path || '/blog')"
        >
          <div class="space-y-4">
            <!-- Blog post image placeholder -->
            <div
              class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center"
            >
              <UIcon
                name="i-ph-article"
                class="w-8 h-8 text-gray-500 dark:text-gray-400"
              />
            </div>

            <div class="space-y-3">
              <h3
                class="text-xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2"
              >
                {{ post.title || "Blog Post Title" }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 line-clamp-3">
                {{
                  post.description ||
                  "Blog post description that provides a brief overview of the content and main topics covered in the article."
                }}
              </p>
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-500 dark:text-gray-400">
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
                <UIcon
                  name="i-ph-arrow-right"
                  class="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Placeholder when no blog posts -->
      <div v-else class="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <UCard class="h-full card-interaction" variant="soft">
          <div class="space-y-4">
            <div
              class="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center"
            >
              <UIcon name="i-ph-article" class="w-8 h-8 text-primary" />
            </div>
            <div class="space-y-3">
              <h3 class="text-xl font-semibold">
                Building Modern Web Applications
              </h3>
              <p class="text-gray-600 dark:text-gray-400 line-clamp-3">
                Exploring the latest trends and best practices in modern web
                development, from framework selection to deployment strategies.
              </p>
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-500 dark:text-gray-400"
                  >Coming Soon</span
                >
                <UIcon name="i-ph-clock" class="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </UCard>

        <UCard class="h-full card-interaction" variant="soft">
          <div class="space-y-4">
            <div
              class="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center"
            >
              <UIcon
                name="i-ph-code"
                class="w-8 h-8 text-blue-600 dark:text-blue-400"
              />
            </div>
            <div class="space-y-3">
              <h3 class="text-xl font-semibold">TypeScript Tips & Tricks</h3>
              <p class="text-gray-600 dark:text-gray-400 line-clamp-3">
                Advanced TypeScript techniques and patterns that can help you
                write more maintainable and type-safe code.
              </p>
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-500 dark:text-gray-400"
                  >Coming Soon</span
                >
                <UIcon name="i-ph-clock" class="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <div class="text-center">
        <UButton to="/blog" variant="outline" size="lg">
          <UIcon name="i-ph-article" />
          View All Posts
        </UButton>
      </div>
    </section>
  </div>
</template>
