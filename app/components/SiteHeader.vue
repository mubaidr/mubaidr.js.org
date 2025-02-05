<template>
  <div
    class="fixed w-full z-50 top-0 left-0 pt-3 md:pt-6 bg-opacity-75 backdrop-blur-lg"
  >
    <nav
      class="flex justify-between border-b-2 border-amber-700 pb-3 md:pb-6 px-3 md:px-6"
    >
      <div class="inline-flex gap-4"></div>

      <div class="inline-flex gap-4">
        <!-- <NuxtLink
          to="/"
          active-class="border-primary-600"
        >
          Home
        </NuxtLink> -->
        <NuxtLink
          to="/#get-a-quote-for-your-project"
          class="bg-amber-700 text-white px-4 rounded-full hover:shadow no-underline transition-shadow font-semibold inline-flex gap-1 align-middle"
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
        >
          <Icon name="i-ph-github-logo"></Icon>
        </NuxtLink>

        <NuxtLink
          :external="true"
          aria-label="Twitter"
          to="https://www.twitter.com/mubaidr"
        >
          <Icon name="i-ph-twitter-logo"></Icon>
        </NuxtLink>

        <NuxtLink
          :external="true"
          aria-label="LinkedIn"
          to="https://www.linkedin.com/in/mubaidr"
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

<style lang="scss"></style>
