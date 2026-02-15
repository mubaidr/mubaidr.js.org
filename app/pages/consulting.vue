<script setup lang="ts">
definePageMeta({
  title: "Consulting - Muhammad Ubaid Raza",
  description:
    "Technical consulting and leadership for teams building scalable systems.",
})

useHead({
  title: "Consulting - Muhammad Ubaid Raza",
  meta: [
    {
      name: "description",
      content:
        "Technical consulting and leadership for teams building scalable systems.",
    },
  ],
})

const consultingAreas = [
  {
    title: "Architecture Reviews",
    description:
      "Evaluate system designs for scalability, security, and performance. Identify technical debt and provide actionable recommendations.",
    icon: "i-ph-buildings",
  },
  {
    title: "Technical Strategy",
    description:
      "Help teams make informed technology decisions, plan roadmaps, and align technical investments with business goals.",
    icon: "i-ph-lightbulb",
  },
  {
    title: "Team Leadership",
    description:
      "Mentor developers, improve engineering practices, and help teams ship better code faster through proven processes.",
    icon: "i-ph-users-three",
  },
]
</script>

<template>
  <div>
    <div class="space-y-32">
      <!-- Page Header -->
      <div class="text-center space-y-6">
        <h1>Technical Consulting</h1>

        <p class="max-w-3xl mx-auto text-lg">
          I help teams build better systems through architecture reviews,
          technical strategy, and engineering leadership.
        </p>
      </div>

      <!-- Consulting Areas -->
      <section class="max-w-5xl mx-auto px-4">
        <div class="grid gap-8 md:grid-cols-3">
          <UCard v-for="area in consultingAreas" :key="area.title" class="h-full">
            <div class="text-center space-y-4">
              <div
                class="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/20">
                <UIcon :name="area.icon" size="1.5rem" class="text-primary-600 dark:text-primary-400" />
              </div>

              <h3 class="text-lg font-semibold">{{ area.title }}</h3>

              <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {{ area.description }}
              </p>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Approach -->
      <section class="max-w-3xl mx-auto px-4">
        <div class="text-center space-y-6 mb-12">
          <h2>My Approach</h2>
        </div>

        <UCard>
          <div class="space-y-6">
            <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I work closely with your team to understand your unique challenges
              and context. My focus is on practical, actionable guidance that
              helps you make better technical decisions today while setting you
              up for success tomorrow.
            </p>

            <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              With 12+ years of experience building scalable systems and
              maintaining open source projects used by thousands of developers,
              I bring deep technical expertise and a pragmatic approach to every
              engagement.
            </p>
          </div>
        </UCard>
      </section>

      <!-- CTA -->
      <section class="text-center space-y-6">
        <p class="max-w-2xl mx-auto text-lg">
          Let's discuss how I can help your team build better software.
        </p>

        <UButton to="/contact" size="xl" icon="i-ph-envelope">
          Get in Touch
        </UButton>
      </section>
    </div>
  </div>
</template>
