<script lang="ts" setup>
const aboutSection = await queryCollection("components").first()

console.log(await queryCollection("components").all())

console.log(aboutSection)
</script>

<template>
  <main>
    <div>
      <!-- <h1>Hi, I'm Muhammad Ubaid Raza - Full Stack Developer</h1> -->
    </div>
    <div>
      <ContentRenderer :value="aboutSection" />
    </div>

    <div class="mt-12">
      <!-- <h2 class="text-3xl font-extrabold">Tech Stack & Tools I Use</h2> -->
      <!-- <TechStack /> -->
    </div>

    <div class="mt-12">
      <!-- <h2 class="text-3xl font-extrabold">What I Do Well</h2> -->
      <!-- <ContentRenderer path="/what-i-do" /> -->
    </div>

    <div class="mt-12">
      <!-- <h2 class="text-3xl font-extrabold">Get In Touch</h2> -->
      <!-- <ContentRenderer path="/get-in-touch" /> -->
    </div>
  </main>
</template>
