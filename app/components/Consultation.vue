<script setup lang="ts">
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
    <div class="space-y-24">
      <!-- Page Header -->
      <div class="text-center space-y-4">
        <h2>Technical Consultation</h2>

        <p>
          I help teams build better systems through architecture reviews,
          technical strategy, and engineering leadership.
        </p>
      </div>

      <!-- Consulting Areas -->
      <section>
        <div class="text-center space-y-4 mb-8">
          <h3>My Services</h3>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <UPageCard
            v-for="area in consultingAreas"
            :key="area.title"
            :title="area.title"
            :description="area.description"
            :spotlight="true"
          />
        </div>
      </section>

      <!-- Approach -->
      <section>
        <div class="text-center space-y-4 mb-8">
          <h3>My Approach</h3>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <UPageCard
            v-for="step in approachSteps"
            :key="step.title"
            :title="step.title"
            :description="step.description"
            :spotlight="true"
          />
        </div>
      </section>
    </div>
  </div>
</template>
