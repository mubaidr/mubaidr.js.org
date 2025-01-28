<script setup>
const blogCountLimit = 6

const { data: count } = await useAsyncData(`content-blog-count`, async () => {
  const _posts = await queryContent("/blog").only("headline").find()
  return Math.ceil(_posts.length / blogCountLimit) || 0
})
</script>

<template>
  <main>
    <BlogHero />

    <br />
    <br />

    <div id="main">
      <ContentQuery
        path="/blog"
        :only="['headline', 'abstract', 'date', 'tags', '_path', 'image']"
        :sort="{
          date: -1,
        }"
        :limit="blogCountLimit"
        v-slot="{ data }"
      >
        <BlogList :data="data" />
      </ContentQuery>

      <BlogPagination
        v-if="count > 1"
        class="mt-8"
        :currentPage="1"
        :totalPages="count"
        :nextPage="count > 1"
        baseUrl="/blog"
        pageUrl="/blog/page"
      />
    </div>
  </main>
</template>
