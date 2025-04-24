<template>
  <div class="py-8">
    <div class="container mx-auto px-4 flex flex-col items-center gap-2">
      <div class="flex items-center text-xs text-neutral-400 dark:text-neutral-500">
        <Icon name="i-ph-copyright"></Icon>
        <span class="ml-1">2025 All rights reserved</span>
      </div>
      <div class="flex gap-4 mt-2">
        <NuxtLink :external="true" aria-label="Github" to="https://github.com/mubaidr" class="text-neutral-400 hover:text-accent transition-colors duration-200">
          <Icon name="i-ph-github-logo"></Icon>
        </NuxtLink>
        <NuxtLink :external="true" aria-label="LinkedIn" to="https://www.linkedin.com/in/mubaidr" class="text-neutral-400 hover:text-accent transition-colors duration-200">
          <Icon name="i-ph-linkedin-logo"></Icon>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
