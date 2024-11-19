<template>
  <nav
    class="flex justify-between items-center py-6 md:py-12 border-b border-gray-500"
  >
    <h1>
      <NuxtLink
        to="/"
        class="text-3xl font-extrabold text-primary-600 dark:text-primary-400 border-b-2 border-transparent"
        active-class="border-primary-600"
      >
        mubaidr
      </NuxtLink>
    </h1>

    <div class="flex flex-row gap-4">
      <NuxtLink
        to="/blog"
        class="text-xl font-semibold border-b-2 border-transparent"
        active-class="border-primary-600"
      >
        Blog
      </NuxtLink>

      <ThemeSwitcher />
    </div>
  </nav>
</template>

<style></style>
