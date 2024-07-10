<script lang="ts" setup>
const data = await queryContent('/about').findOne()
</script>

<template>
  <pre>
    {{ data }}
  </pre>
  <div>{{ data.title }}</div>
</template>

<style lang="scss" scoped></style>
