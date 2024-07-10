<template>
  <nav class="flex justify-between items-center py-6 px-6 md:px-24">
    <div class="logo">
      <ULink
        to="/"
        class="text-xl text-primary font-extrabold tracking-widest border-b-2 border-transparent"
        active-class="border-b-primary"
      >
        mubaidr
      </ULink>
    </div>

    <div class="flex flex-row gap-4">
      <ULink
        to="/contact"
        class="border-b-2 border-transparent"
        active-class="border-b-primary"
      >
        Contact
      </ULink>
      <ULink
        to="/about"
        class="border-b-2 border-transparent"
        active-class="border-b-primary"
      >
        About
      </ULink>

      <ThemeSwitcher />
    </div>
  </nav>
</template>

<style></style>
