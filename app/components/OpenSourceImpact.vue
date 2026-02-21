<script setup lang="ts">
const { data: profileData } = await useProfileData()

const openSourceProjects = [
  {
    name: "Vue Color Avatar",
    description: "Customizable avatar component library",
  },
  {
    name: "Browser Extension Template",
    description: "Production-ready extension scaffolding",
  },
]
</script>

<template>
  <section>
    <div class="max-w-4xl mx-auto px-4">
      <UCard>
        <div class="space-y-6">
          <div class="text-center space-y-2">
            <h2>Open Source</h2>
            <p class="text-neutral-600 dark:text-neutral-400">
              Building tools that help developers build better
            </p>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <div v-for="project in openSourceProjects" :key="project.name" class="flex items-start gap-3">
              <UIcon name="i-ph-github-logo" class="text-neutral-400 mt-0.5" />
              <div class="flex-1">
                <h3 class="font-semibold mb-1">{{ project.name }}</h3>
                <p class="text-sm text-neutral-600 dark:text-neutral-400">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </div>

          <div class="text-center pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <UButton
v-if="profileData?.social" :to="profileData.social.find((s) => s.name === 'GitHub')?.url" external
              icon="i-ph-github-logo" variant="outline">
              View All on GitHub
            </UButton>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
