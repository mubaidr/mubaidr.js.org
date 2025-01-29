<script lang="ts" setup>
const { data: allSections } = await useAsyncData("content-components", () => {
  return queryCollection("components").all()
})
const aboutSection = allSections.value?.find(
  (section) => section.path === "/components/about"
)!
const whatIDoSection = allSections.value?.find(
  (section) => section.path === "/components/what-i-do"
)!
const getInTouchSection = allSections.value?.find(
  (section) => section.path === "/components/get-in-touch"
)!
</script>

<template>
  <main>
    <div>
      <ContentRenderer :value="aboutSection" />
    </div>

    <div class="mt-12">
      <ClientTestimonials />
    </div>

    <div class="mt-12">
      <ContentRenderer :value="whatIDoSection" />
    </div>

    <div
      class="mt-12"
      id="#got-an-exciting-project-to-talk-about"
    >
      <ContentRenderer :value="getInTouchSection" />
    </div>
  </main>
</template>
