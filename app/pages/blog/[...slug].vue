<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection("blog").path(route.path).first()
})

// @ts-expect-error extended in content config
if (page.value?.ogImage) {
  // @ts-expect-error extended in content config
  defineOgImage(page.value.ogImage)
}

defineOgImageComponent('NuxtSeo')

if (!page.value) {
  navigateTo('/404')
}
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>No content available.</div>
  </div>
</template>
