<template>
  <div>
    <nav
      id="header"
      class="flex justify-between items-center py-6 md:py-12 border-b-2 border-gray-500"
    >
      <div class="flex gap-4 align-baseline"></div>

      <div class="flex gap-4 align-baseline">
        <!-- <NuxtLink
          to="/"
          active-class="border-primary-600"
        >
          Home
        </NuxtLink> -->
        <NuxtLink
          to="/#got-an-exciting-project-to-talk-about"
          active-class="border-primary-600"
        >
          Contact Me
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
          <Icon
            name="i-ph-github-logo"
            size="1.5em"
          ></Icon>
        </NuxtLink>

        <NuxtLink
          :external="true"
          aria-label="Twitter"
          to="https://www.twitter.com/mubaidr"
        >
          <Icon
            name="i-ph-twitter-logo"
            size="1.5em"
          ></Icon>
        </NuxtLink>

        <NuxtLink
          :external="true"
          aria-label="LinkedIn"
          to="https://www.linkedin.com/in/mubaidr"
        >
          <Icon
            name="i-ph-linkedin-logo"
            size="1.5em"
          ></Icon>
        </NuxtLink>

        <ThemeSwitcher />
      </div>
    </nav>

    <div class="text-center">
      <CurrentTime />
    </div>
  </div>
</template>
