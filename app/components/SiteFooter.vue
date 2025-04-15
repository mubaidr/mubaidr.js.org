<template>
  <div class="py-8 md:py-12 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
    <div class="container mx-auto px-4 md:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <!-- Left side with logo and copyright -->
        <div class="flex flex-col items-center md:items-start gap-3">
          <!-- <NuxtLink to="/" class="flex items-center gap-2">
            <img src="/brand.png" alt="Logo" class="h-8 w-auto" />
            <span class="font-medium text-primary-600 dark:text-primary-400">Muhammad Ubaid Raza</span>
          </NuxtLink> -->
          <div class="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
            <Icon name="i-ph-copyright"></Icon>
            <span class="ml-1">2025 All rights reserved</span>
          </div>
        </div>

        <!-- Right side with links -->
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex gap-4">
            <NuxtLink to="/#get-a-quote-for-your-project"
              class="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200">
              Get a Quote
            </NuxtLink>
            <!-- <NuxtLink to="/blog"
              class="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200">
              Blog
            </NuxtLink> -->
          </div>
          <div class="flex gap-4">
            <NuxtLink :external="true" aria-label="Github" to="https://github.com/mubaidr"
              class="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200">
              <Icon name="i-ph-github-logo"></Icon>
            </NuxtLink>
            <NuxtLink :external="true" aria-label="Twitter" to="https://www.twitter.com/mubaidr"
              class="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200">
              <Icon name="i-ph-twitter-logo"></Icon>
            </NuxtLink>
            <NuxtLink :external="true" aria-label="LinkedIn" to="https://www.linkedin.com/in/mubaidr"
              class="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200">
              <Icon name="i-ph-linkedin-logo"></Icon>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
