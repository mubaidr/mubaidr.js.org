<script setup lang="ts">
// Define page metadata
definePageMeta({
  title: "Blog",
  description: "Read our latest blog posts and insights",
})

const itemsPerPage = 3

// Fetch blog posts using composable
const { data: blogPosts } = await useBlogPosts()

const blogData = computed(() => ({
  posts: blogPosts.value || [],
  count: blogPosts.value?.length || 0,
}))

// Extract excerpt from content
const getExcerpt = (content: unknown, maxLength = 150) => {
  if (!content) return ""

  // Handle different content structures
  let textContent = ""
  if (typeof content === "string") {
    textContent = content
  } else if (
    typeof content === "object" &&
    content !== null &&
    "children" in content &&
    Array.isArray((content as { children: unknown[] }).children)
  ) {
    // Extract text from nested content structure
    const extractText = (node: unknown): string => {
      if (typeof node === "string") return node
      if (
        typeof node === "object" &&
        node !== null &&
        "value" in node &&
        typeof (node as { value: unknown }).value === "string"
      ) {
        return (node as { value: string }).value
      }
      if (
        typeof node === "object" &&
        node !== null &&
        "children" in node &&
        Array.isArray((node as { children: unknown[] }).children)
      ) {
        return (node as { children: unknown[] }).children
          .map(extractText)
          .join(" ")
      }
      return ""
    }
    textContent = (content as { children: unknown[] }).children
      .map(extractText)
      .join(" ")
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
    <div class="space-y-32">
      <!-- Page Header -->
      <div class="text-center space-y-6">
        <h1>Insights & Articles</h1>

        <p class="max-w-4xl mx-auto">
          Insights, tutorials, and thoughts on web development, technology, and
          more.
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
          <h2>Explore My Latest Articles</h2>
          <p>
            Stay updated with the latest trends and insights in web development.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink v-for="post in blogData.posts" :key="post.path" :to="post.path" class="h-full">
            <UCard class="group h-full overflow-hidden">
              <div class="space-y-6">
                <!-- Featured Image -->
                <div class="aspect-video -mx-6 -mt-6 overflow-hidden">
                  <img
v-if="post.socialImage?.src || post.image" :src="post.socialImage?.src || post.image"
                    :alt="post.socialImage?.alt || post.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy">
                  <div v-else class="flex items-center justify-center h-full bg-neutral-100 dark:bg-neutral-800">
                    <UIcon name="i-ph-article-bold" class="w-12 h-12 text-neutral-400" />
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <h3
                      class="text-xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {{ post.title }}
                    </h3>
                    <p class="text-neutral-600 dark:text-neutral-400 line-clamp-3 text-sm leading-relaxed">
                      {{ post.description || getExcerpt(post.body) }}
                    </p>
                  </div>

                  <div class="flex flex-wrap gap-2">
                    <UBadge
v-for="tag in post.tags?.slice(0, 2)" :key="tag" :label="tag" variant="subtle"
                      color="neutral" size="xs" />
                  </div>

                  <!-- Meta -->
                  <div
                    class="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs font-medium text-neutral-500">
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
      </section>

      <!-- Empty State -->
      <div v-else class="text-center py-16">
        <!-- <div class="mx-auto w-24 h-24 flex items-center justify-center mb-6">
          <UIcon name="i-ph-newspaper" class="w-12 h-12" />
        </div> -->
        <h3 class="mb-2">No blog posts found</h3>
        <p>Check back soon for new content!</p>
      </div>
    </div>
  </div>
</template>
