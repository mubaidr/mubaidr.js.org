<script setup lang="ts">
// Define page metadata
definePageMeta({
  title: "Blog",
  description: "Read our latest blog posts and insights",
})

// Pagination state
const route = useRoute()
const router = useRouter()
const page = ref(Number(route.query.page) || 1)
const perPage = 6

// Fetch paginated blog posts
const { data: blogPosts } = usePaginatedBlogPosts(page, perPage)
const { data: totalPosts } = await useBlogPostCount()

const blogData = computed(() => ({
  posts: blogPosts.value || [],
  count: blogPosts.value?.length || 0,
}))

const totalPages = computed(() => Math.ceil((totalPosts.value || 0) / perPage))

// Sync page with URL query param
watch(page, () => {
  router.replace({
    query: {
      ...route.query,
      page: page.value > 1 ? String(page.value) : undefined,
    },
  })
})

watch(
  () => route.query.page,
  (val) => {
    page.value = Number(val) || 1
  },
)

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
  <UPage>
    <UPageHeader
      title="Insights & Articles"
      description="Insights, tutorials, and thoughts on web development, technology,
              and more"
    ></UPageHeader>

    <FeaturedBlogPosts />
    <USeparator />
    <UPageSection title="Latest Posts">
      <UBlogPosts>
        <UBlogPost
          v-for="post in blogData.posts"
          :key="post.path"
          :title="post.title"
          :description="post.description || getExcerpt(post.body)"
          :date="post.date"
          :image="post.socialImage?.src || post.image"
          :to="post.path"
          :badge="post.tags?.[0]"
        />
      </UBlogPosts>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center mt-8">
        <UPagination
          v-model:page="page"
          :total="totalPosts || 0"
          :items-per-page="perPage"
          show-edges
        />
      </div>
    </UPageSection>
  </UPage>
</template>
