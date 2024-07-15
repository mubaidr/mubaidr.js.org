<script setup>
defineProps({
  surround: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div>
    <span class="mt-6 block font-extralight">Continue Reading:</span>
    <ul>
      <template
        v-for="(other, index) in surround"
        :key="index"
      >
        <li v-if="other">
          <NuxtLink
            :to="other._path + '/'"
            :aria-label="other.headline"
            class="underline underline-offset-2"
          >
            {{ other.headline }}
          </NuxtLink>
          <p>
            {{ other.excerpt }}
          </p>
        </li>
      </template>
    </ul>
  </div>
</template>
