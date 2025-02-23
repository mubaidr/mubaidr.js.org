<template>
  <div class="fixed w-full z-50 top-0 left-0 bg-opacity-75 backdrop-blur-lg">
    <nav
      class="flex justify-between py-6 px-3 md:px-6 border-b-2 border-amber-700"
    >
      <div class="flex gap-2">
        <!-- <NuxtLink
          to="/"
          active-class="border-primary-600"
        >
          Home
        </NuxtLink> -->
      </div>

      <div class="flex gap-2">
        <NuxtLink
          to="/#get-a-quote-for-your-project"
          class="bg-amber-800 text-white px-4 rounded-full no-underline h-8 text-base md:text-lg leading-none flex gap-1 items-center"
        >
          <Icon name="i-ph-lightning"></Icon>
          Get a Free Quote
        </NuxtLink>
        <!-- <NuxtLink
          to="/blog"
          active-class="border-primary-600"
        >
          Blog
        </NuxtLink> -->

        <NuxtLink
          :external="true"
          aria-label="Github"
          to="https://github.com/mubaidr"
          class="h-8"
        >
          <Icon name="i-ph-github-logo"></Icon>
        </NuxtLink>

        <NuxtLink
          :external="true"
          aria-label="Twitter"
          to="https://www.twitter.com/mubaidr"
          class="h-8"
        >
          <Icon name="i-ph-twitter-logo"></Icon>
        </NuxtLink>

        <NuxtLink
          :external="true"
          aria-label="LinkedIn"
          to="https://www.linkedin.com/in/mubaidr"
          class="h-8"
        >
          <Icon name="i-ph-linkedin-logo"></Icon>
        </NuxtLink>

        <ThemeSwitcher />
      </div>
    </nav>

    <div class="text-center px-3 md:px-6">
      <CurrentTime />
    </div>
  </div>
</template>
