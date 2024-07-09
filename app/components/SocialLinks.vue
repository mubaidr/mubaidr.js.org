<script setup lang="ts"></script>

<template>
  <div class="flex flex-wrap text-base text-center gap-6">
    <ULink
      :external="true"
      aria-label="Github"
    >
      <Icon name="i-ph-github-logo"></Icon>
    </ULink>

    <ULink
      :external="true"
      aria-label="Twitter"
    >
      <Icon name="i-ph-twitter-logo"></Icon>
    </ULink>

    <ULink
      :external="true"
      aria-label="LinkedIn"
    >
      <Icon name="i-ph-linkedin-logo"></Icon>
    </ULink>
  </div>
</template>
