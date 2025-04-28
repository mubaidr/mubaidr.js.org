<template>
  <header>
    <div class="fixed w-full z-40 top-0 left-0 border-b border-neutral-100 dark:border-neutral-800">
      <nav class="flex justify-between items-center py-4 px-4 md:px-8" role="navigation" aria-label="Main navigation">
        <NuxtLink
          to="/"
          class="font-semibold text-lg flex items-center gap-2 tracking-tight"
          aria-label="Go to homepage"
        >
          <!-- <img src="/brand.png" alt="mubaidr logo" class="h-7 w-auto" /> -->
          <span class="hidden sm:inline">mubaidr</span>
        </NuxtLink>
        <div class="flex items-center gap-2">
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  </header>
</template>
