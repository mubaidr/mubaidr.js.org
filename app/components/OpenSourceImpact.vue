<script setup lang="ts">
const { data: profileData } = await useProfileData()

const openSourceProjects = [
  {
    name: "Vue Color Avatar",
    description: "SVG avatar component library used by hundreds of projects worldwide",
    github: "https://github.com/mubaidr/vue-color-avatar",
    icon: "i-ph-paint-brush-broad",
  },
  {
    name: "Browser Extension Template",
    description: "Modern starter template for cross-browser extensions with Vue 3 and TypeScript",
    github: "https://github.com/mubaidr/vue-browser-extension-template",
    icon: "i-ph-puzzle-piece",
  },
]
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="max-w-5xl mx-auto px-4">
      <div class="text-center space-y-4 mb-12">
        <h2>Open Source</h2>
        <p class="text-neutral-600 dark:text-neutral-400">
          Building tools that developers use every day
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <UCard v-for="project in openSourceProjects" :key="project.name" class="hover:shadow-lg transition-shadow">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <UIcon :name="project.icon" class="text-2xl text-primary-500" />
              <h3 class="text-lg font-semibold">{{ project.name }}</h3>
            </div>

            <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              {{ project.description }}
            </p>

            <div class="pt-2">
              <UButton :to="project.github" external variant="ghost" size="sm">
                <UIcon name="i-ph-github-logo" />
                View on GitHub
              </UButton>
            </div>
          </div>
        </UCard>
      </div>

      <div class="text-center mt-8">
        <UButton v-if="profileData?.social" :to="profileData.social.find((s) => s.name === 'GitHub')?.url" external
          size="lg" icon="i-ph-github-logo">
          View My GitHub Profile
        </UButton>
      </div>
    </div>
  </section>
</template>
