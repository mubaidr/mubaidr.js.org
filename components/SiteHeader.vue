<template>
  <nav
    class="flex justify-between items-center py-6 mx-6 md:mx-24 border-b border-gray-500"
  >
    <div class="logo">
      <ULink
        to="/"
        class="text-xl text-primary font-extrabold tracking-widest border-b-2 border-transparent"
      >
        mubaidr
      </ULink>
    </div>

    <div class="flex flex-row gap-4">
      <!-- <ULink
        to="/contact"
        class="border-b-2 border-transparent"
        active-class="border-b-primary"
      >
        Contact
      </ULink> -->

      <ThemeSwitcher />
    </div>
  </nav>
</template>

<style></style>
