<template>
  <div class="max-w-screen-lg mx-auto px-6 md:px-12">
    <SiteHeader />

    <div class="my-6 md:my-12">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </div>

    <SiteFooter />

    <!-- Scroll to top -->
    <!-- <ClientOnly>
      <NavScrollTopIcon />
    </ClientOnly> -->

    <LazyNuxtIsland name="NavScrollTopIcon"></LazyNuxtIsland>
  </div>
</template>

<style lang="scss">
body {
  overflow-y: scroll;
  font-family: 'Open Sans', sans-serif;
  @apply bg-amber-50 text-stone-800 dark:bg-stone-800  dark:text-stone-50;
}
</style>
