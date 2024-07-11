<script lang="ts" setup></script>

<template>
  <main>
    <div class="prose dark:prose-invert !max-w-full">
      <ContentDoc path="about" />

      <div class="mt-12">
        <TechStack />
      </div>

      <div class="mt-12">
        <ContentDoc path="what-i-do" />
      </div>

      <div class="mt-12">
        <ContentDoc path="get-in-touch" />
      </div>

      <!-- <div class="mt-12">
        <ProjectsList />
      </div> -->
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
