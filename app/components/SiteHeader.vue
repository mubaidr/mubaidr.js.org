<template>
  <div class="fixed w-full z-50 top-0 left-0 backdrop-blur-lg">
    <nav class="flex justify-between items-center py-3 px-4 md:px-8 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80">
      <div class="flex items-center gap-2">
        <!-- <NuxtLink
          to="/"
          class="font-semibold text-xl text-primary-600 dark:text-primary-400 flex items-center gap-2"
        >
          <img src="/brand.png" alt="Logo" class="h-8 w-auto" />
          <span class="hidden sm:inline">Muhammad Ubaid</span>
        </NuxtLink> -->
      </div>

      <div class="flex items-center gap-3">
        <NuxtLink
          to="/#get-a-quote-for-your-project"
          class="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-4 py-1.5 no-underline text-sm font-medium transition-colors duration-200 flex gap-1 items-center rounded-full"
        >
          <Icon name="i-ph-lightning" class="mr-1"></Icon>
          <span>Get a Quote</span>
        </NuxtLink>

        <!-- <NuxtLink
          to="/blog"
          class="hidden md:flex text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200"
        >
          Blog
        </NuxtLink> -->

        <div class="flex items-center gap-3 ml-2">
          <NuxtLink
            :external="true"
            aria-label="Github"
            to="https://github.com/mubaidr"
            class="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <Icon name="i-ph-github-logo"></Icon>
          </NuxtLink>

          <NuxtLink
            :external="true"
            aria-label="Twitter"
            to="https://www.twitter.com/mubaidr"
            class="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <Icon name="i-ph-twitter-logo"></Icon>
          </NuxtLink>

          <NuxtLink
            :external="true"
            aria-label="LinkedIn"
            to="https://www.linkedin.com/in/mubaidr"
            class="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <Icon name="i-ph-linkedin-logo"></Icon>
          </NuxtLink>

          <ThemeSwitcher />
        </div>
      </div>
    </nav>

    <div class="text-center py-1 px-3 md:px-6 bg-gradient-to-r from-primary-50 via-accent-50 to-primary-50 dark:from-primary-950 dark:via-accent-950 dark:to-primary-950 text-sm text-neutral-600 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-800">
      <CurrentTime />
    </div>
  </div>
</template>
