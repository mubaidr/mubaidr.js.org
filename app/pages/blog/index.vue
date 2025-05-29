<script setup lang="ts">

definePageMeta({
  title: 'Blog',
  description: 'Technical articles, tutorials, and insights from Muhammad Ubaid Raza on web development, DevOps, and software engineering.'
})

// Pagination settings
const route = useRoute()
const router = useRouter()
const currentPage = computed(() => parseInt(route.query.page as string) || 1)
const postsPerPage = 6

// Calculate skip for pagination
const skip = computed(() => (currentPage.value - 1) * postsPerPage)

// Get all blog posts for initial data and counting
const { data: allPosts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').all()
)

// Sort posts by date (newest first)
const sortedPosts = computed(() => {
  if (!allPosts.value || !Array.isArray(allPosts.value)) return []
  return (allPosts.value as any[]).sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime()
    const dateB = new Date(b.date || 0).getTime()
    return dateB - dateA
  })
})

const totalPosts = computed(() => sortedPosts.value?.length || 0)
const totalPages = computed(() => Math.ceil(totalPosts.value / postsPerPage))

// Reactive posts for current page
const posts = computed(() => {
  if (!sortedPosts.value || !Array.isArray(sortedPosts.value)) return []
  const start = skip.value
  const end = start + postsPerPage
  return sortedPosts.value.slice(start, end)
})

// Handle pagination navigation
const goToPage = (page: number) => {
  if (page === 1) {
    router.push('/blog')
  } else {
    router.push(`/blog?page=${page}`)
  }
}

// Format date helper
const formatDate = (dateString: string) => {
  if (!dateString) return 'No date available'

  try {
    const date = new Date(dateString)

    // Check if date is valid
    if (isNaN(date.getTime())) {
      console.warn('Invalid date string:', dateString)
      return 'Invalid date'
    }

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (error) {
    console.error('Error formatting date:', error, dateString)
    return 'Invalid date'
  }
}

// SEO
useHead({
  title: 'Blog - Muhammad Ubaid Raza',
  meta: [
    {
      name: 'description',
      content: 'Technical articles, tutorials, and insights from Muhammad Ubaid Raza on web development, DevOps, and software engineering.'
    }
  ]
})
</script>

<template>
  <div class="max-w-3xl mx-auto prose prose-zinc dark:prose-invert">
    <!-- Header -->
    <header class="mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Blog
      </h1>
      <p class="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
        Technical articles, tutorials, and insights on web development, DevOps, and software engineering.
      </p>
    </header>

    <!-- Blog Posts Grid -->
    <div v-if="posts && posts.length > 0" class="space-y-8 mb-12">
      <article
        v-for="post in posts"
        :key="post._path"
        class="group border border-zinc-200 dark:border-zinc-700 rounded-lg p-6 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors duration-200"
      >
        <div class="flex flex-col space-y-4">
          <!-- Date -->
          <time
            :datetime="post.date"
            class="text-sm text-zinc-500 dark:text-zinc-400 font-medium"
          >
            {{ formatDate(post.date) }}
          </time>

          <!-- Title and Description -->
          <div class="space-y-3">
            <h2 class="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
              <NuxtLink :to="post._path" class="hover:underline">
                {{ post.headline || post.title }}
              </NuxtLink>
            </h2>

            <p class="text-zinc-600 dark:text-zinc-300 line-clamp-3">
              {{ post.abstract || post.description }}
            </p>
          </div>

          <!-- Author and Read More -->
          <div class="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <div class="flex items-center space-x-2">
              <span class="text-sm text-zinc-500 dark:text-zinc-400">by</span>
              <span class="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {{ post.author }}
              </span>
            </div>

            <NuxtLink
              :to="post._path"
              class="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              Read more
              <Icon name="ph:arrow-right" class="ml-1 w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
      <div class="max-w-md mx-auto">
        <Icon name="ph:article" class="w-16 h-16 text-zinc-400 dark:text-zinc-500 mx-auto mb-4" />
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          No blog posts found
        </h3>
        <p class="text-zinc-600 dark:text-zinc-400">
          Check back soon for new articles and insights.
        </p>
      </div>
    </div>

    <!-- Pagination -->
    <nav v-if="totalPages > 1" class="flex justify-center items-center gap-2" aria-label="Blog pagination">
      <!-- Previous Button -->
      <button
        :disabled="currentPage <= 1"
        @click="goToPage(currentPage - 1)"
        class="px-3 py-2 text-sm font-medium text-zinc-500 bg-white border border-zinc-300 rounded-md hover:bg-zinc-50 hover:text-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-800 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-200"
      >
        <Icon name="ph:arrow-left" class="w-4 h-4" />
      </button>

      <!-- Page Numbers -->
      <div class="flex gap-1">
        <button
          v-for="page in Array.from({ length: totalPages }, (_, i) => i + 1)"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
            page === currentPage
              ? 'bg-blue-600 text-white border border-blue-600 dark:bg-blue-500 dark:border-blue-500'
              : 'text-zinc-700 bg-white border border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:bg-zinc-800 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-zinc-100'
          ]"
        >
          {{ page }}
        </button>
      </div>

      <!-- Next Button -->
      <button
        :disabled="currentPage >= totalPages"
        @click="goToPage(currentPage + 1)"
        class="px-3 py-2 text-sm font-medium text-zinc-500 bg-white border border-zinc-300 rounded-md hover:bg-zinc-50 hover:text-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-800 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-200"
      >
        <Icon name="ph:arrow-right" class="w-4 h-4" />
      </button>
    </nav>
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
