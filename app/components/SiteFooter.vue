<template>
  <footer aria-label="Site footer">
    <div class="py-8">
      <div class="container mx-auto px-4 flex flex-col items-center gap-2">
        <div class="flex items-center text-xs text-neutral-400 dark:text-neutral-500">
          <Icon name="i-ph-copyright" role="img" aria-label="Copyright" />
          <span class="ml-1">2025 All rights reserved</span>
        </div>
        <div class="flex gap-4 mt-2">
          <NuxtLink :external="true" aria-label="GitHub profile" to="https://github.com/mubaidr" class="text-neutral-400 hover:text-accent transition-colors duration-200">
            <Icon name="i-ph-github-logo" role="img" aria-label="GitHub logo" />
          </NuxtLink>
          <NuxtLink :external="true" aria-label="LinkedIn profile" to="https://www.linkedin.com/in/mubaidr" class="text-neutral-400 hover:text-accent transition-colors duration-200">
            <Icon name="i-ph-linkedin-logo" role="img" aria-label="LinkedIn logo" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
