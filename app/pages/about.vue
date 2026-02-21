<script setup lang="ts">
definePageMeta({
  title: "About - Muhammad Ubaid Raza",
  description:
    "Senior software engineer building scalable systems and developer tools.",
})

// Fetch data using composables
const { data: profileData } = await useProfileData()

useHead({
  title: "About - Muhammad Ubaid Raza",
  meta: [
    {
      name: "description",
      content:
        "Senior software engineer building scalable systems and developer tools.",
    },
  ],
})
</script>

<template>
  <div>
    <div class="space-y-24">
      <!-- Brief Intro -->
      <section>
        <h1>About Me</h1>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I'm a senior software engineer with 12+ years of experience building
          scalable systems and developer tools. I'm passionate about clean code,
          developer ergonomics, and open source.
        </p>
      </section>

      <!-- Current Focus -->
      <section>
        <div class="text-center space-y-4 mb-12">
          <h2>Current Focus</h2>
          <p class="text-neutral-600 dark:text-neutral-400">
            What I'm working on and exploring right now
          </p>
        </div>

        <div v-if="profileData?.currentFocus" class="grid gap-6 md:grid-cols-3">
          <UCard v-for="(focus, index) in profileData.currentFocus" :key="index" class="h-full">
            <div class="space-y-3">
              <UIcon name="i-ph-target" class="text-2xl text-primary-600 dark:text-primary-400" />
              <h3 class="font-semibold">{{ focus }}</h3>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Key Expertise -->
      <section>
        <div class="text-center space-y-4 mb-8">
          <h2>Expertise</h2>
        </div>

        <UCard>
          <div class="space-y-6">
            <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I specialize in full-stack development with a focus on modern
              JavaScript ecosystems, cloud infrastructure, and building scalable
              systems. My work approach emphasizes technical excellence,
              developer productivity, and continuous improvement.
            </p>

            <div class="flex flex-wrap gap-2">
              <UBadge label="Vue.js" variant="soft" />
              <UBadge label="Nuxt" variant="soft" />
              <UBadge label="TypeScript" variant="soft" />
              <UBadge label="Node.js" variant="soft" />
              <UBadge label="AWS" variant="soft" />
              <UBadge label="Docker" variant="soft" />
              <UBadge label="PostgreSQL" variant="soft" />
              <UBadge label="DevOps" variant="soft" />
            </div>
          </div>
        </UCard>
      </section>

      <!-- CV Link -->
      <section class="text-center">
        <p class="text-neutral-600 dark:text-neutral-400 mb-6">
          Want to see my complete professional history?
        </p>
        <UButton to="/cv.pdf" external icon="i-ph-download-simple" variant="outline" size="lg">
          Download My Full CV
        </UButton>
      </section>
    </div>
  </div>
</template>
