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
            <!-- Blog post image placeholder -->
            <div class="flex items-center justify-center">
              <UIcon name="i-ph-article" class="w-8 h-8" />
            </div>

            <div class="space-y-3">
              <h3>
                {{ post.title || "Blog Post Title" }}
              </h3>
              <p>
                {{
                  post.description ||
                  "Blog post description that provides a brief overview of the content and main topics covered in the article."
                }}
              </p>
              <div class="flex items-center justify-between">
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
                <UIcon name="i-ph-arrow-right" class="w-4 h-4" />
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Placeholder when no blog posts -->
      <div v-else class="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <UCard class="h-full">
          <div class="space-y-4">
            <div class="flex items-center justify-center">
              <UIcon name="i-ph-article" class="w-8 h-8" />
            </div>
            <div class="space-y-3">
              <h3>Building Modern Web Applications</h3>
              <p>
                Exploring the latest trends and best practices in modern web
                development, from framework selection to deployment strategies.
              </p>
              <div class="flex items-center justify-between">
                <span>Coming Soon</span>
                <UIcon name="i-ph-clock" class="w-4 h-4" />
              </div>
            </div>
          </div>
        </UCard>

        <UCard class="h-full">
          <div class="space-y-4">
            <div class="flex items-center justify-center">
              <UIcon name="i-ph-code" class="w-8 h-8" />
            </div>
            <div class="space-y-3">
              <h3>TypeScript Tips & Tricks</h3>
              <p>
                Advanced TypeScript techniques and patterns that can help you
                write more maintainable and type-safe code.
              </p>
              <div class="flex items-center justify-between">
                <span>Coming Soon</span>
                <UIcon name="i-ph-clock" class="w-4 h-4" />
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <div class="text-center">
        <UButton to="/blog">
          <UIcon name="i-ph-article" />
          View All Posts
        </UButton>
      </div>
    </section>
  </div>
</template>
