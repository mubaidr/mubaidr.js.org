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
          <article v-for="post in blogData.posts" :key="post.id">
            <div />
            <UCard as="div" class="h-full overflow-hidden">
              <ULink
                :to="post.path"
                class="focus:outline-none"
                :aria-label="post.title"
              >
                <div class="space-y-4">
                  <!-- Featured Image -->
                  <div class="aspect-[16/9] overflow-hidden">
                    <img
                      v-if="post.image"
                      :src="post.image"
                      :alt="post.title"
                      class="w-full h-full object-cover"
                    />
                    <div v-else class="flex items-center justify-center h-full">
                      <UIcon name="i-ph-article-duotone" />
                    </div>
                  </div>

                  <div class="px-1">
                    <!-- Title and Category -->
                    <div class="flex items-center justify-between mb-2">
                      <h3>
                        {{ post.title }}
                      </h3>
                    </div>

                    <!-- Excerpt -->
                    <p class="mb-4">
                      {{ post.description || getExcerpt(post.body) }}
                    </p>

                    <p>
                      <UBadge
                        v-if="post.tags && post.tags.length > 0"
                        :label="post.tags[0]"
                        variant="soft"
                      />
                    </p>

                    <!-- Meta -->
                    <div class="flex items-center justify-between pt-2">
                      <span v-if="post.date">
                        {{ formatDate(post.date) }}
                      </span>
                      <div class="flex items-center gap-1">
                        <span>Read More</span>
                        <UIcon name="i-ph-arrow-right" />
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
        <!-- <div class="mx-auto w-24 h-24 flex items-center justify-center mb-6">
          <UIcon name="i-ph-newspaper" class="w-12 h-12" />
        </div> -->
        <h3 class="mb-2">No blog posts found</h3>
        <p>Check back soon for new content!</p>
      </div>
    </div>
  </div>
</template>
