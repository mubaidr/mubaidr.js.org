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
</script>

<template>
  <div class="prose prose-slate dark:prose-invert max-w-5xl mx-auto px-4">
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>No content available.</div>
  </div>
</template>
