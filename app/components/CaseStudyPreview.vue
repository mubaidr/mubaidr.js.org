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
  <section class="space-y-12">
    <div class="text-center space-y-6">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
      >
        <UIcon name="i-ph-chart-line-up" class="w-4 h-4 text-primary" />
        <span class="text-sm font-medium text-primary">Success Stories</span>
      </div>

      <h2
        class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
      >
        Real Results from Real Clients
      </h2>

      <p
        class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
      >
        See how custom web solutions transformed businesses and delivered
        measurable results.
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      <UCard
        v-for="study in caseStudies"
        :key="study.id"
        class="h-full card-interaction group"
        variant="soft"
      >
        <div class="space-y-6">
          <!-- Header -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <UBadge :label="study.industry" variant="soft" size="sm" />
              <span class="text-sm text-gray-500 dark:text-gray-400">{{
                study.timeline
              }}</span>
            </div>
            <h3
              class="text-xl font-bold group-hover:text-primary transition-colors"
            >
              {{ study.title }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ study.client }}
            </p>
          </div>

          <!-- Challenge & Solution -->
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-red-600 dark:text-red-400 mb-2">
                Challenge:
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ study.challenge }}
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-green-600 dark:text-green-400 mb-2">
                Solution:
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ study.solution }}
              </p>
            </div>
          </div>

          <!-- Results Grid -->
          <div
            class="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg p-4"
          >
            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Key Results:
            </h4>
            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="(result, index) in study.results.slice(0, 4)"
                :key="index"
                class="text-center"
              >
                <div class="text-lg font-bold text-primary">
                  {{ result.after }}
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-400">
                  {{ result.metric }}
                </div>
                <div
                  class="text-xs text-green-600 dark:text-green-400 font-medium"
                >
                  {{ result.improvement }}
                </div>
              </div>
            </div>
          </div>

          <!-- Technologies -->
          <div>
            <h4
              class="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm"
            >
              Technologies Used:
            </h4>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tech in study.technologies"
                :key="tech"
                :label="tech"
                variant="outline"
                size="sm"
              />
            </div>
          </div>

          <!-- CTA -->
          <div class="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <UButton
              to="/contact"
              variant="ghost"
              size="sm"
              class="w-full group-hover:bg-primary group-hover:text-white transition-colors"
            >
              <UIcon name="i-ph-chat-circle" />
              Discuss Your Similar Project
            </UButton>
          </div>
        </div>
      </UCard>
    </div>

    <div class="text-center">
      <UButton
        to="/projects"
        variant="outline"
        size="lg"
        class="hover:scale-105 transition-transform duration-300"
      >
        <UIcon name="i-ph-folder-open" />
        View All Case Studies
      </UButton>
    </div>
  </section>
</template>
