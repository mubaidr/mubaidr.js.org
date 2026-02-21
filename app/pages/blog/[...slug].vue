<script lang="ts" setup>
const route = useRoute()
const site = useSiteConfig()

const { data: blogPostData } = await useBlogPost(route.path)

if (!blogPostData.value) {
  navigateTo("/404")
}

// SEO: page meta, canonical, OG/Twitter, and BlogPosting schema
if (blogPostData.value) {
  const url = new URL(route.fullPath, site.url).toString()
  const title = blogPostData.value.title || site.name
  const description = blogPostData.value.description || site.description
  const image = blogPostData.value.image || blogPostData.value.socialImage?.src
  const publishedTime = blogPostData.value.date
  const modifiedTime = blogPostData.value.dateUpdated || blogPostData.value.date
  const authorName = blogPostData.value.author || site.name

  // Resolve author URL with fallback chain: frontmatter -> authors collection -> /about
  let authorUrl: string | undefined = blogPostData.value.authorUrl
  if (authorUrl && !authorUrl.startsWith("http")) {
    authorUrl = new URL(authorUrl, site.url).toString()
  }

  if (!authorUrl && authorName) {
    const authors = await queryCollection("authors").all()
    const author = authors.find(
      (a) => a.alternateName === authorName || a.name === authorName,
    )
    if (author?.url) {
      authorUrl = author.url
    }
  }

  if (!authorUrl) {
    authorUrl = `${site.url}/about`
  }

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: "article",
    ogUrl: url,
    ogImage: image ? [{ url: image }] : undefined,
    twitterCard: image ? "summary_large_image" : "summary",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    articlePublishedTime: publishedTime,
    articleModifiedTime: modifiedTime,
  })

  useHead({
    link: [{ rel: "canonical", href: url }],
  })

  defineOgImage(blogPostData.value.ogImage)
  defineOgImageComponent("NuxtSeo")

  // Register BlogPosting JSON-LD via Nuxt SEO
  useSchemaOrg({
    "@type": "BlogPosting",
    headline: title,
    description,
    image: image ? [image] : undefined,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: url,
    author: authorName
      ? {
        "@type": "Person",
        name: authorName,
        url: authorUrl,
      }
      : undefined,
    publisher: {
      "@type": "Person",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: new URL("/favicon.png", site.url).toString(),
      },
    },
  })
}
</script>

<template>
  <div v-if="blogPostData">
    <div class="space-y-16 py-16">
      <!-- Post Header -->
      <header class="text-center space-y-6">
        <h1>
          {{ blogPostData.title }}
        </h1>

        <div class="flex items-center justify-center gap-6">
          <div class="flex items-center gap-2">
            <UIcon name="i-ph-user-circle" class="w-5 h-5 text-primary-500 dark:text-primary-400" />
            <span>{{ blogPostData.author }}</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-ph-calendar" class="w-5 h-5 text-primary-500 dark:text-primary-400" />
            <span>{{ $formatDate(blogPostData.date) }}</span>
          </div>
        </div>

        <div v-if="blogPostData.tags" class="flex justify-center flex-wrap gap-2">
          <UBadge v-for="tag in blogPostData.tags" :key="tag" :label="tag" variant="soft" />
        </div>
      </header>

      <!-- Featured Image -->
      <div
v-if="blogPostData.socialImage?.src || blogPostData.image"
        class="aspect-video overflow-hidden rounded-2xl shadow-lg">
        <img
:src="blogPostData.socialImage?.src || blogPostData.image"
          :alt="blogPostData.socialImage?.alt || blogPostData.title" class="w-full h-full object-cover" >
      </div>

      <!-- Post Content -->
      <article class="prose prose-lg max-w-none mx-auto">
        <ContentRenderer :value="blogPostData" />
      </article>

      <!-- Back to Blog Link -->
      <div class="text-center pt-8">
        <UButton to="/blog" variant="outline" class="">
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
