<script setup lang="ts">
const { data: projects, status } = await useAsyncData<any>('projects', () =>
  $fetch(
    'https://api.github.com/search/repositories?q=user:mubaidr&sort=stars&per_page=7'
  )
)
</script>

<template>
  <div class="mt-20">
    <div class="flex justify-center items-center my-12">
      <h2 class="text-xl text-center">
        Open Source Projects
        <Icon name="i-ph-arrow-down" />
      </h2>
    </div>

    <template v-if="status === 'pending'">
      <div class="px-32 md:px-64">
        <UProgress animation="carousel" />
      </div>
    </template>
    <template v-else-if="status === 'error'">
      <div class="text-center">
        <p>
          Oh no! Failed to fetch projects. Never mind, please visit my
          <NuxtLink to="https://github.com/mubaidr">Github Profile</NuxtLink>
          .
        </p>
      </div>
    </template>
    <template v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UButton
          v-for="(project, index) in projects.items"
          :key="index"
          to="project.html_url"
          size="xl"
          :external="true"
          target="_blank"
          class="flex h-full w-full"
          color="gray"
        >
          <div>
            <h3 class="text-lg font-medium">
              {{ project.name }}
            </h3>
            <p class="my-2">
              {{ project.description }}
            </p>
            <ul class="flex items-center space-x-4">
              <li
                v-if="project.stargazers_count"
                class="inline-flex items-center"
              >
                <Icon
                  name="i-ph-eyes"
                  class="mr-1"
                />
                <span>{{ project.forks }}</span>
              </li>
              <li class="inline-flex items-center">
                <Icon
                  name="i-ph-star"
                  class="mr-1"
                />
                <span>{{ project.stargazers_count }}</span>
              </li>
              <li
                v-if="project.forks"
                class="inline-flex items-center"
              >
                <Icon
                  name="i-ph-git-fork"
                  class="mr-1"
                />
                <span>{{ project.forks }}</span>
              </li>
            </ul>
          </div>
        </UButton>

        <div class="flex items-center justify-center">
          <UButton
            to="https://github.com/mubaidr"
            size="xl"
            target="_blank"
            :external="true"
            class="flex h-full w-full text-center items-center content-center align-middle"
            variant="ghost"
          >
            <div class="mx-auto">
              <span>See More Projects on Github</span>

              <Icon
                name="i-ph-arrow-square-out"
                class="ml-1"
              ></Icon>
            </div>
          </UButton>
        </div>
      </div>
    </template>
  </div>
</template>
