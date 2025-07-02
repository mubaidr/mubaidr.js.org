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
    <div class="space-y-16 py-16">
      <!-- Post Header -->
      <header class="text-center space-y-6">
        <div class="inline-flex items-center gap-2 px-4 py-2">
          <UIcon name="i-ph-newspaper" class="w-4 h-4" />
          <span>Blog Post</span>
        </div>

        <h1>
          {{ page.title }}
        </h1>

        <div class="flex items-center justify-center gap-6">
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
      <div v-if="page.image" class="aspect-[16/9] overflow-hidden">
        <img
          :src="page.image"
          :alt="page.title"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Post Content -->
      <article class="prose prose-lg max-w-none mx-auto">
        <ContentRenderer :value="page" />
      </article>

      <!-- Back to Blog Link -->
      <div class="text-center pt-8">
        <UButton to="/blog" variant="outline" size="lg">
          <UIcon name="i-ph-arrow-left" class="mr-2" />
          <span>Back to Blog</span>
        </UButton>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-24">
    <h1>Post Not Found</h1>
    <p class="mt-4">The requested blog post could not be found.</p>
    <UButton to="/blog" class="mt-8">Back to Blog</UButton>
  </div>
</template>
