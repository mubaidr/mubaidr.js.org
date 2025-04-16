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
  <main class="container mx-auto px-3 md:px-6 py-6">
    <!-- About Section -->
    <div class="mb-20 animate-fade-in">
      <ContentRenderer :value="aboutSection" class="prose max-w-none dark:prose-invert" />
    </div>

    <!-- Testimonials Section -->
    <div>
      <ClientTestimonials />
    </div>

    <!-- What I Do Section -->
    <div class="my-20 animate-fade-in">
      <ContentRenderer :value="whatIDoSection" class="prose max-w-none dark:prose-invert" />
    </div>

    <!-- Get In Touch Section -->
    <div
      class="my-20 py-12 px-3 md:px-6 bg-white dark:bg-neutral-800 rounded-3xl shadow-soft-lg"
      id="got-an-exciting-project-to-talk-about"
    >
      <ContentRenderer :value="getInTouchSection" class="prose max-w-none dark:prose-invert" />
    </div>
  </main>
</template>
