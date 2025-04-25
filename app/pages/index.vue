<script lang="ts" setup>
const { data: allSections } = await useAsyncData("content-components", () => {
  return queryCollection("components").all()
})
// const aboutSection = allSections.value?.find(
//   (section) => section.path === "/components/about"
// )!
// const whatIDoSection = allSections.value?.find(
//   (section) => section.path === "/components/what-i-do"
// )!
// const getInTouchSection = allSections.value?.find(
//   (section) => section.path === "/components/get-in-touch"
// )!
const allInOne = allSections.value?.find(
  (section) => section.path === "/components/all-in-one"
)!
</script>

<template>
  <main class="container mx-auto px-3 md:px-6 py-10">
    <div>
      <ContentRenderer :value="allInOne" class="prose max-w-none dark:prose-invert" />
    </div>

    <!-- <div class="mb-16">
      <ContentRenderer :value="aboutSection" class="prose max-w-none dark:prose-invert" />
    </div>

    <div class="mb-16">
      <ClientTestimonials />
    </div>

    <div class="mb-16">
      <ContentRenderer :value="whatIDoSection" class="prose max-w-none dark:prose-invert" />
    </div> -->

    <!-- <div
      id="got-an-exciting-project-to-talk-about"
    >
      <ContentRenderer :value="getInTouchSection" class="prose max-w-none dark:prose-invert" />
    </div> -->
  </main>
</template>
