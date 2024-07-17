<script setup>
// Find the number of blogs present
const blogCountLimit = 6

const { data } = await useAsyncData(`content-/blog`, async () => {
  const _posts = await queryContent('/blog').only('headline').find()
  return Math.ceil(_posts.length / blogCountLimit)
})
</script>

<template>
  <main>
    <BlogHero />

    <br />
    <br />

    <BlogSection id="main">
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
        v-if="data > 1"
        class="mt-8"
        :currentPage="1"
        :totalPages="data"
        :nextPage="data > 1"
        baseUrl="/blog/"
        pageUrl="/blog/page/"
      />
    </BlogSection>
  </main>
</template>
