<script setup lang="ts">
const blogPageCountLimit = 6

const { data: blogPageCount } = await useAsyncData("blog-count", async () => {
  const posts = await queryCollection("blog").select("title").all()

  return Math.ceil(posts.length / blogPageCountLimit) || 0
})

// const { data: blogPosts } = await useAsyncData(`blog-posts-${}`, async () => {
//   const posts = await queryCollection("blog").select("title").all()

//   return Math.ceil(posts.length / blogPageCountLimit) || 0
// })
</script>

<template>
  <main>
    <BlogHero />

      <!-- <BlogList :data="blogPosts" /> -->

      <BlogPagination
        v-if="blogPageCount && blogPageCount >= 1"
        class="mt-8"
        :currentPage="1"
        :totalPages="blogPageCount"
        :nextPage="blogPageCount > 1"
        baseUrl="/blog"
        pageUrl="/blog/page"
      />
  </main>
</template>
