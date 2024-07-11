<template>
  <div
    class="flex flex-col h-screen justify-between max-w-screen-xl mx-auto px-6 md:px-12"
  >
    <div>
      <SiteHeader />
    </div>

    <div class="my-6 md:my-12 px-6 md:px-24">
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
}
</style>
