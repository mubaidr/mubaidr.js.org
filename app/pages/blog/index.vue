<script setup lang="ts">
// Define page metadata
definePageMeta({
  title: 'Blog',
  description: 'Read our latest blog posts and insights'
})

// Pagination configuration
const route = useRoute()
const router = useRouter()

const currentPage = computed(() => {
  const page = parseInt(route.query.page as string) || 1
  return page > 0 ? page : 1
})

const itemsPerPage = 6

// Get blog posts with pagination using Nuxt Content's built-in pagination
const { data: blogData } = await useAsyncData(`blog-page-${currentPage.value}`, async () => {
  const [posts, count] = await Promise.all([
    queryCollection('blog')
      .order('date' as any, 'DESC')
      .limit(itemsPerPage)
      .skip((currentPage.value - 1) * itemsPerPage)
      .all(),
    queryCollection('blog').count()
  ])

  return { posts: posts || [], count }
})

const posts = computed(() => (blogData.value?.posts || []) as any[])
const totalPosts = computed(() => blogData.value?.count || 0)
const totalPages = computed(() => Math.ceil(totalPosts.value / itemsPerPage))

// Handle pagination
const handlePageChange = (page: number) => {
  if (page === 1) {
    router.push('/blog')
  } else {
    router.push(`/blog?page=${page}`)
  }
}

// Format date helper
const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Extract excerpt from content
const getExcerpt = (content: any, maxLength = 150) => {
  if (!content) return ''

  // Handle different content structures
  let textContent = ''
  if (typeof content === 'string') {
    textContent = content
  } else if (content.children && Array.isArray(content.children)) {
    // Extract text from nested content structure
    const extractText = (node: any): string => {
      if (typeof node === 'string') return node
      if (node.value) return node.value
      if (node.children && Array.isArray(node.children)) {
        return node.children.map(extractText).join(' ')
      }
      return ''
    }
    textContent = content.children.map(extractText).join(' ')
  }

  // Remove HTML tags and trim
  textContent = textContent.replace(/<[^>]*>/g, '').trim()

  return textContent.length > maxLength
    ? textContent.slice(0, maxLength) + '...'
    : textContent
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Blog
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        Insights, tutorials, and thoughts on web development, technology, and more.
      </p>
    </div>

    <!-- Loading State -->
    <div v-if="!blogData" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <USkeleton v-for="i in itemsPerPage" :key="i" class="h-80 w-full" />
    </div>

    <!-- Blog Posts Grid -->
    <div v-else-if="posts.length > 0" class="space-y-8">
      <div class="grid gap-8 md:grid-cols-2">
        <article v-for="post in posts" :key="post.id" class="group cursor-pointer">
          <UCard class="h-full transition-all duration-200 group-hover:scale-[1.02] overflow-hidden">
            <div class="p-6 flex flex-col h-full">
              <!-- Featured Image (if available) -->
              <div v-if="post.image" class="aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
                <img :src="post.image" :alt="post.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
              </div>

              <!-- Post Content -->
              <!-- Title -->
              <h2
                class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ post.title }}
              </h2>

              <!-- Description/Excerpt -->
              <p class="text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-3">
                {{ post.description || getExcerpt(post.body) }}
              </p>

              <!-- Meta Information -->
              <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-auto">
                <div class="flex items-center space-x-4">
                  <!-- Author -->
                  <!-- <span v-if="post.author">
                    by {{ post.author }}
                  </span> -->

                  <!-- Date -->
                  <span v-if="post.date">
                    {{ formatDate(post.date) }}
                  </span>
                </div>

                <!-- Read More Link -->
                <UButton :to="post.path" variant="ghost" size="sm" trailing-icon="i-heroicons-arrow-right">
                  Read More
                </UButton>
              </div>

              <!-- Tags (if available) -->
              <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2 mt-3">
                <UBadge v-for="tag in post.tags.slice(0, 3)" :key="tag" variant="soft" size="sm">
                  {{ tag }}
                </UBadge>
                <UBadge v-if="post.tags.length > 3" variant="soft" size="sm" color="neutral">
                  +{{ post.tags.length - 3 }}
                </UBadge>
              </div>
              <!-- Click overlay for navigation -->
              <NuxtLink :to="post.path" aria-label="Read full post" />
            </div>
          </UCard>
        </article>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center mt-12">
        <UPagination v-model="currentPage" :page-count="itemsPerPage" :total="totalPosts" :max="7"
          @update:model-value="handlePageChange" show-last show-first />
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-16">
      <div class="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
        <UIcon name="i-heroicons-document-text" class="w-12 h-12 text-gray-400" />
      </div>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        No blog posts found
      </h3>
      <p class="text-gray-600 dark:text-gray-400">
        Check back soon for new content!
      </p>
    </div>

    <!-- Posts Summary -->
    <div v-if="posts.length > 0" class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
      Showing {{ ((currentPage - 1) * itemsPerPage) + 1 }} to {{ Math.min(currentPage * itemsPerPage, totalPosts) }}
      of {{ totalPosts }} posts
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
