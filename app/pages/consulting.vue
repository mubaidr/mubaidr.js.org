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

const approachSteps = [
  {
    title: "Discover",
    description:
      "Work closely with your team to understand unique challenges, context, and goals for the project.",
    icon: "i-ph-magnifying-glass",
  },
  {
    title: "Analyze",
    description:
      "Evaluate systems and provide practical, actionable guidance that helps you make better technical decisions today.",
    icon: "i-ph-chart-line-up",
  },
  {
    title: "Deliver",
    description:
      "Apply deep technical expertise with a pragmatic approach to set you up for long-term success.",
    icon: "i-ph-rocket-launch",
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
      <section>
        <div class="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <UPageCard
v-for="area in consultingAreas" :key="area.title" :title="area.title"
            :description="area.description" :spotlight="true" />
        </div>
      </section>

      <!-- Approach -->
      <section>
        <div class="text-center space-y-6 mb-12">
          <h2>My Approach</h2>
        </div>

        <div class="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <UPageCard
v-for="(step, index) in approachSteps" :key="step.title" :title="step.title"
            :description="step.description" :icon="step.icon" :spotlight="true" />
        </div>

        <p class="text-center text-neutral-600 dark:text-neutral-400 leading-relaxed">
          With 12+ years of experience building scalable systems and maintaining open source projects used by thousands
          of developers, I bring deep technical expertise to every engagement.
        </p>
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
