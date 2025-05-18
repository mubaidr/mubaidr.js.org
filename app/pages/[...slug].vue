<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection("pages").path(route.path).first()
})

if (page.value?.ogImage) {
  defineOgImage(page.value.ogImage)
}

defineOgImageComponent('NuxtSeo')

if (!page.value) {
  navigateTo('/404')
}
</script>

<template>
  <div class="max-w-2xl mx-auto ">
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>No content available.</div>
  </div>
</template>
