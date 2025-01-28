<script setup lang="ts">
const blogCountLimit = 6

const { data: blogCount } = await useAsyncData("blog-count", async () => {
  const posts = await queryCollection("blog").select("title").all()

  return Math.ceil(posts.length / blogCountLimit) || 0
})
</script>

<template>
  <main>
    <BlogHero />

    <div v-if="blogCount">
      <!-- <ContentQuery
        path="/blog"
        :only="['headline', 'abstract', 'date', 'tags', '_path', 'image']"
        :sort="{
          date: -1,
        }"
        :limit="blogCountLimit"
        v-slot="{ data }"
      >
        <BlogList :data="data" />
      </ContentQuery> -->

      <BlogPagination
        v-if="blogCount > 1"
        class="mt-8"
        :currentPage="1"
        :totalPages="blogCount"
        :nextPage="blogCount > 1"
        baseUrl="/blog"
        pageUrl="/blog/page"
      />
    </div>
  </main>
</template>
