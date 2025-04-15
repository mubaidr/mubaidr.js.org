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
  <main class="container mx-auto px-4 md:px-8 py-8">
    <!-- About Section -->
    <div class="mb-20 animate-fade-in">
      <ContentRenderer :value="aboutSection" class="prose prose-lg max-w-none dark:prose-invert" />
    </div>

    <!-- Testimonials Section -->
    <div>
      <ClientTestimonials />
    </div>

    <!-- What I Do Section -->
    <div class="my-20 animate-fade-in">
      <ContentRenderer :value="whatIDoSection" class="prose prose-lg max-w-none dark:prose-invert" />
    </div>

    <!-- Get In Touch Section -->
    <div
      class="my-20 py-12 px-4 md:px-8 bg-white dark:bg-neutral-800 rounded-lg shadow-soft-lg animate-fade-in"
      id="got-an-exciting-project-to-talk-about"
    >
      <ContentRenderer :value="getInTouchSection" class="prose prose-lg max-w-none dark:prose-invert" />
    </div>
  </main>
</template>
