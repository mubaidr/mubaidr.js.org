<script lang="ts" setup></script>

<template>
  <main>
    <div>
      <h2 class="text-3xl font-extrabold mb-6">Hey there!</h2>
      <ContentDoc path="about" />
    </div>

    <div class="mt-12">
      <h2 class="text-3xl font-extrabold mb-6">Tech Stack & Tools I Use</h2>
      <TechStack />
    </div>

    <div class="mt-12">
      <h2 class="text-3xl font-extrabold mb-6">What I Do Well</h2>
      <ContentDoc path="what-i-do" />
    </div>

    <div class="mt-12">
      <h2 class="text-3xl font-extrabold mb-6">Get In Touch</h2>
      <ContentDoc path="get-in-touch" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
