<template>
  <div
    class="flex flex-col h-screen justify-between max-w-screen-xl mx-auto px-6 md:px-12"
  >
    <div>
      <SiteHeader />
    </div>

    <div class="py-6 md:py-12 px-6 md:px-24">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </div>

    <div>
      <SiteFooter />
    </div>
  </div>
</template>

<style lang="scss">
body {
  overflow-y: scroll;
  font-family: 'Open Sans', sans-serif;
  @apply bg-amber-50 text-stone-800 dark:bg-stone-800  dark:text-stone-50;
}
</style>
