<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection("blog").path(route.path).first()
})

if (page.value?.ogImage) {
  defineOgImage(page.value.ogImage)
}

defineOgImageComponent("NuxtSeo")

if (!page.value) {
  navigateTo("/404")
}

const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
</script>

<template>
  <div v-if="page">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-16 py-16">
        <!-- Post Header -->
        <header class="text-center space-y-6">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
          >
            <UIcon name="i-ph-newspaper" class="w-4 h-4 text-primary" />
            <span class="text-sm font-medium text-primary">Blog Post</span>
          </div>

          <h1
            class="text-3xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
          >
            {{ page.title }}
          </h1>

          <div
            class="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-400"
          >
            <div class="flex items-center gap-2">
              <UIcon name="i-ph-user-circle" class="w-5 h-5" />
              <span>{{ page.author }}</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-ph-calendar" class="w-5 h-5" />
              <span>{{ formatDate(page.date) }}</span>
            </div>
          </div>

          <div v-if="page.tags" class="flex justify-center flex-wrap gap-2">
            <UBadge
              v-for="tag in page.tags"
              :key="tag"
              :label="tag"
              variant="soft"
              size="sm"
            />
          </div>
        </header>

        <!-- Featured Image -->
        <div
          v-if="page.image"
          class="aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            :src="page.image"
            :alt="page.title"
            class="w-full h-full object-cover"
          >
        </div>

        <!-- Post Content -->
        <article
          class="prose prose-lg dark:prose-invert max-w-none mx-auto prose-headings:font-bold prose-a:text-primary hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md"
        >
          <ContentRenderer :value="page" />
        </article>

        <!-- Back to Blog Link -->
        <div
          class="text-center pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <UButton
            to="/blog"
            variant="outline"
            size="lg"
            class="group border-2 border-gray-300 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <UIcon
              name="i-ph-arrow-left"
              class="mr-2 group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span>Back to Blog</span>
          </UButton>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-24">
    <h1 class="text-4xl font-bold">Post Not Found</h1>
    <p class="text-gray-600 dark:text-gray-400 mt-4">
      The requested blog post could not be found.
    </p>
    <UButton to="/blog" class="mt-8">Back to Blog</UButton>
  </div>
</template>
