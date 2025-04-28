<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("pages").path(route.path).first()
})

if (!page.value) {
  navigateTo('/404')
}
</script>

<template>
  <div class="max-w-xl mx-auto ">
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>No content available.</div>
  </div>
</template>
