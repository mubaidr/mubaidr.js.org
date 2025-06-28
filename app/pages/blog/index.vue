<script setup lang="ts">
// Define page metadata
definePageMeta({
  title: "Blog",
  description: "Read our latest blog posts and insights",
})

const itemsPerPage = 3

// Pagination configuration
const { data: blogData } = await useAsyncData("blog-posts", async () => {
  const [posts, count] = await Promise.all([
    queryCollection("blog").order("date", "DESC").all(),
    queryCollection("blog").count(),
  ])

  return { posts: posts || [], count }
})

// Format date helper
const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Extract excerpt from content
const getExcerpt = (content: any, maxLength = 150) => {
  if (!content) return ""

  // Handle different content structures
  let textContent = ""
  if (typeof content === "string") {
    textContent = content
  } else if (content.children && Array.isArray(content.children)) {
    // Extract text from nested content structure
    const extractText = (node: any): string => {
      if (typeof node === "string") return node
      if (node.value) return node.value
      if (node.children && Array.isArray(node.children)) {
        return node.children.map(extractText).join(" ")
      }
      return ""
    }
    textContent = content.children.map(extractText).join(" ")
  }

  // Remove HTML tags and trim
  textContent = textContent.replace(/<[^>]*>/g, "").trim()

  return textContent.length > maxLength
    ? textContent.slice(0, maxLength) + "..."
    : textContent
}
</script>

<template>
  <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-32 py-16">
        <!-- Page Header -->
        <div class="text-center space-y-6">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
          >
            <UIcon name="i-ph-newspaper" class="w-4 h-4 text-primary" />
            <span class="text-sm font-medium text-primary">My Blog</span>
          </div>

          <h1
            class="text-3xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
          >
            Insights & Articles
          </h1>

          <p
            class="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Insights, tutorials, and thoughts on web development, technology,
            and more.
          </p>
        </div>

        <FeaturedBlogPosts title="Featured Posts" />

        <!-- Loading State -->
        <div v-if="!blogData" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <USkeleton v-for="i in itemsPerPage" :key="i" class="h-96 w-full" />
        </div>

        <!-- Blog Posts Grid -->
        <section v-else-if="blogData.posts.length > 0" class="space-y-12">
          <div class="text-center space-y-6">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <UIcon name="i-ph-article" class="w-4 h-4 text-primary" />
              <span class="text-sm font-medium text-primary">All Posts</span>
            </div>
            <h2
              class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
            >
              Explore My Latest Articles
            </h2>
          </div>

          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="post in blogData.posts"
              :key="post.id"
              class="group relative"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-500 opacity-0 group-hover:opacity-100"
              ></div>
              <UCard
                as="div"
                variant="soft"
                class="relative h-full border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-500 transform group-hover:-translate-y-1 overflow-hidden"
              >
                <ULink
                  :to="post.path"
                  class="focus:outline-none"
                  :aria-label="post.title"
                >
                  <div class="space-y-4">
                    <!-- Featured Image -->
                    <div
                      class="aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                    >
                      <img
                        v-if="post.image"
                        :src="post.image"
                        :alt="post.title"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div
                        v-else
                        class="flex items-center justify-center h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700"
                      >
                        <UIcon
                          name="i-ph-article-duotone"
                          class="w-12 h-12 text-gray-400 dark:text-gray-500"
                        />
                      </div>
                    </div>

                    <div class="px-1">
                      <!-- Title and Category -->
                      <div class="flex items-center justify-between mb-2">
                        <h3
                          class="text-lg font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2"
                        >
                          {{ post.title }}
                        </h3>
                        <UBadge
                          v-if="post.tags && post.tags.length > 0"
                          :label="post.tags[0]"
                          variant="soft"
                          size="sm"
                        />
                      </div>

                      <!-- Excerpt -->
                      <p
                        class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4"
                      >
                        {{ post.description || getExcerpt(post.body) }}
                      </p>

                      <!-- Meta -->
                      <div
                        class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700"
                      >
                        <span v-if="post.date">
                          {{ formatDate(post.date) }}
                        </span>
                        <div class="flex items-center gap-1">
                          <span>Read More</span>
                          <UIcon
                            name="i-ph-arrow-right"
                            class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </ULink>
              </UCard>
            </article>
          </div>
        </section>

        <!-- Empty State -->
        <div v-else class="text-center py-16">
          <div
            class="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-full mb-6"
          >
            <UIcon name="i-ph-newspaper" class="w-12 h-12 text-gray-400" />
          </div>
          <h3 class="text-2xl font-bold mb-2">No blog posts found</h3>
          <p class="text-gray-600 dark:text-gray-400">
            Check back soon for new content!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
