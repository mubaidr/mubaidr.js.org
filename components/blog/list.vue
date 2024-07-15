<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  message: {
    type: String,
    default:
      'There are no posts right now, but stay tuned for newer releases in the future.',
  },
})
const { $formatDate } = useNuxtApp()
</script>

<template>
  <ul class="grid grid-cols-12 gap-6">
    <li
      v-for="article in data"
      :key="article._path"
      class="col-span-full md:col-span-6 relative border-2 border-primary-200 hover:border-primary-500"
    >
      <NuxtLink
        :to="article._path + '/'"
        class="p-4 block relative"
      >
        <div class="wrapper">
          <header>
            <h2 class="text-2xl">
              {{ article.headline }}
            </h2>
            <p>
              {{ $formatDate(article.date) }}
            </p>
            <p>{{ article.excerpt }}</p>
          </header>
        </div>
      </NuxtLink>
    </li>
  </ul>
  <p
    v-if="data.length == 0"
    class="w-full md:w-7/12 text-h3 leading-h3 font-bold dark:text-white"
  >
    {{ message }}
  </p>
</template>
