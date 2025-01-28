<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("pages").path(route.path).first()
})
</script>

<template>
  <div>
    <template v-if="page">
      <ContentRenderer :value="page" />
    </template>
    <template v-else>
      <div
        class="prose dark:prose-invert flex flex-col items-center justify-center h-full text-center"
      >
        <h1>404 - Not Found</h1>
        <p>
          You were looking for something that doesn't exist on this site. I
          recommend you go back and look for something else.
        </p>

        <NuxtLink
          text="Go back home"
          to="/"
          target="_self"
          aria="Go back home."
          extraClass="mx-auto"
        />
      </div>
    </template>
  </div>
</template>
