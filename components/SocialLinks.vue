<script setup lang="ts"></script>

<template>
  <div class="flex flex-wrap text-base text-center gap-2">
    <NuxtLink
      :external="true"
      aria-label="Email"
      to="mailto:mubaidr@gmail.com"
    >
      <Icon
        name="i-ph-envelope"
        size="2em"
      ></Icon>
    </NuxtLink>

    <NuxtLink
      :external="true"
      aria-label="Github"
      to="https://github.com/mubaidr"
    >
      <Icon
        name="i-ph-github-logo"
        size="2em"
      ></Icon>
    </NuxtLink>

    <NuxtLink
      :external="true"
      aria-label="Twitter"
      to="https://www.twitter.com/mubaidr"
    >
      <Icon
        name="i-ph-twitter-logo"
        size="2em"
      ></Icon>
    </NuxtLink>

    <NuxtLink
      :external="true"
      aria-label="LinkedIn"
      to="https://www.linkedin.com/in/mubaidr"
    >
      <Icon
        name="i-ph-linkedin-logo"
        size="2em"
      ></Icon>
    </NuxtLink>
  </div>
</template>
