<script setup lang="ts"></script>

<template>
  <div>
    <nav class="py-6">
      <div class="px-10 flex justify-between items-center">
        <div class="logo">
          <ULink
            to="/"
            active-class="border-b-2 border-b-primary"
            class="text-xl text-primary font-extrabold tracking-widest"
          >
            mubaidr
          </ULink>
        </div>

        <div class="flex flex-row gap-4">
          <ULink
            to="/contact"
            active-class="border-b-2 border-b-primary"
          >
            Contact
          </ULink>
          <ULink
            to="/about"
            active-class="border-b-2 border-b-primary"
          >
            About
          </ULink>

          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
