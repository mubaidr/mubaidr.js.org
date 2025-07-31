<script setup lang="ts">
// Mock case study data - in a real app, this would come from a CMS
const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Transformation",
    client: "TechMart Solutions",
    industry: "E-commerce",
    challenge: "Legacy system causing 60% cart abandonment rate",
    solution: "Modern Vue.js SPA with optimized checkout flow",
    results: [
      {
        metric: "Cart Abandonment",
        before: "60%",
        after: "25%",
        improvement: "58% reduction",
      },
      {
        metric: "Page Load Time",
        before: "4.2s",
        after: "1.1s",
        improvement: "74% faster",
      },
      {
        metric: "Monthly Revenue",
        before: "$45K",
        after: "$78K",
        improvement: "73% increase",
      },
      {
        metric: "Mobile Conversion",
        before: "1.2%",
        after: "3.8%",
        improvement: "217% increase",
      },
    ],
    technologies: ["Vue.js", "Nuxt.js", "Node.js", "MongoDB", "Stripe"],
    timeline: "8 weeks",
    image: "/img/case-study-1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "SaaS Dashboard Redesign",
    client: "DataFlow Analytics",
    industry: "SaaS",
    challenge: "Complex data visualization causing user confusion",
    solution: "Intuitive dashboard with real-time analytics",
    results: [
      {
        metric: "User Engagement",
        before: "32%",
        after: "78%",
        improvement: "144% increase",
      },
      {
        metric: "Support Tickets",
        before: "150/month",
        after: "45/month",
        improvement: "70% reduction",
      },
      {
        metric: "User Retention",
        before: "65%",
        after: "89%",
        improvement: "37% increase",
      },
      {
        metric: "Feature Adoption",
        before: "23%",
        after: "67%",
        improvement: "191% increase",
      },
    ],
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    timeline: "12 weeks",
    image: "/img/case-study-2.jpg",
    featured: true,
  },
]
</script>

<template>
  <div>
    <div class="text-center space-y-6">
      <h2>Real Results from Real Clients</h2>

      <p class="max-w-3xl mx-auto">
        See how custom web solutions transformed businesses and delivered
        measurable results.
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      <UCard v-for="study in caseStudies" :key="study.id" class="h-full">
        <div class="space-y-6">
          <!-- Header -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <UBadge :label="study.industry" />
              <span>{{ study.timeline }}</span>
            </div>
            <h3>
              {{ study.title }}
            </h3>
            <p>
              {{ study.client }}
            </p>
          </div>

          <!-- Challenge & Solution -->
          <div class="space-y-4">
            <div>
              <h4 class="mb-2">Challenge:</h4>
              <p>
                {{ study.challenge }}
              </p>
            </div>
            <div>
              <h4 class="mb-2">Solution:</h4>
              <p>
                {{ study.solution }}
              </p>
            </div>
          </div>

          <!-- Results Grid -->
          <div class="p-4">
            <h4 class="mb-3">Key Results:</h4>
            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="(result, index) in study.results.slice(0, 4)"
                :key="index"
                class="text-center"
              >
                <div class="text-lg font-bold">{{ result.after }}</div>
                <div class="text-[10px] text-neutral-500 dark:text-neutral-400">
                  {{ result.metric }}
                </div>
                <div class="text-[10px] text-primary-500 dark:text-primary-400">
                  {{ result.improvement }}
                </div>
              </div>
            </div>
          </div>

          <!-- Technologies -->
          <div>
            <h4 class="mb-2">Technologies Used:</h4>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tech in study.technologies"
                :key="tech"
                :label="tech"
              />
            </div>
          </div>

          <!-- CTA -->
          <div class="pt-4">
            <UButton to="/contact" class="w-full">
              <UIcon name="i-ph-chat-circle" size="3em" class="text-info" />
              Discuss Your Similar Project
            </UButton>
          </div>
        </div>
      </UCard>
    </div>

    <div class="text-center">
      <UButton to="/projects">
        <UIcon name="i-ph-folder-open" size="3em" class="text-info" />
        View All Case Studies
      </UButton>
    </div>
  </div>
</template>
