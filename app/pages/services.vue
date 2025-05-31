<script setup lang="ts">
definePageMeta({
  title: "Services - Muhammad Ubaid Raza",
  description:
    "Professional web development services including full-stack development, consulting, and technical leadership.",
})

useHead({
  title: "Services - Muhammad Ubaid Raza",
  meta: [
    {
      name: "description",
      content:
        "Professional web development services including full-stack development, consulting, and technical leadership.",
    },
  ],
})

// Services data
const services = ref([
  {
    id: 1,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using modern frameworks and technologies.",
    icon: "i-ph-code",
    features: [
      "Vue.js / Nuxt.js Applications",
      "React / Next.js Development",
      "Node.js Backend Services",
      "Database Design & Integration",
      "API Development & Integration",
      "Performance Optimization",
    ],
    pricing: "From $80/hour",
    timeline: "2-12 weeks",
    suitable: "Startups, SMEs, Enterprise",
  },
  {
    id: 2,
    title: "Technical Consulting",
    description:
      "Strategic technical guidance and architecture planning for your projects.",
    icon: "i-ph-lightbulb",
    features: [
      "Technology Stack Selection",
      "Architecture Design",
      "Code Review & Audit",
      "Performance Analysis",
      "Scalability Planning",
      "Best Practices Implementation",
    ],
    pricing: "From $120/hour",
    timeline: "1-4 weeks",
    suitable: "All business sizes",
  },
  {
    id: 3,
    title: "Project Leadership",
    description:
      "Lead and manage development teams to deliver successful projects.",
    icon: "i-ph-users",
    features: [
      "Team Management",
      "Project Planning",
      "Agile Methodologies",
      "Quality Assurance",
      "Risk Management",
      "Stakeholder Communication",
    ],
    pricing: "Custom pricing",
    timeline: "Project-based",
    suitable: "Medium to large teams",
  },
  {
    id: 4,
    title: "Code Review & Mentoring",
    description: "Improve code quality and mentor development teams.",
    icon: "i-ph-graduation-cap",
    features: [
      "Code Quality Assessment",
      "Security Review",
      "Performance Optimization",
      "Developer Mentoring",
      "Training Sessions",
      "Documentation Review",
    ],
    pricing: "From $100/hour",
    timeline: "Ongoing",
    suitable: "Teams of all sizes",
  },
])

// Process steps
const process = ref([
  {
    step: 1,
    title: "Discovery",
    description: "We discuss your project requirements, goals, and timeline.",
    icon: "i-ph-chat-circle",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "I create a detailed project plan with milestones and deliverables.",
    icon: "i-ph-calendar",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Regular updates and iterative development with your feedback.",
    icon: "i-ph-code",
  },
  {
    step: 4,
    title: "Delivery",
    description: "Final testing, deployment, and handover with documentation.",
    icon: "i-ph-rocket",
  },
])

// Pricing packages
const packages = ref([
  {
    name: "Consultation",
    price: "$120",
    period: "per hour",
    description: "Perfect for getting expert advice on your project",
    features: [
      "Technical consultation",
      "Architecture review",
      "Technology recommendations",
      "Project planning",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Development",
    price: "$80",
    period: "per hour",
    description: "Full-stack development services",
    features: [
      "Custom web applications",
      "Frontend & backend development",
      "Database design",
      "API development",
      "Testing & deployment",
      "Documentation",
    ],
    highlighted: true,
  },
  {
    name: "Project Leadership",
    price: "Custom",
    period: "pricing",
    description: "Complete project management and leadership",
    features: [
      "Team management",
      "Project planning",
      "Quality assurance",
      "Risk management",
      "Stakeholder communication",
      "Delivery guarantee",
    ],
    highlighted: false,
  },
])
</script>

<template>
  <div>
    <div class="space-y-24">
      <!-- Page Header -->
      <div class="text-center">
        <h1
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Services
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Professional web development services to help bring your ideas to life
        </p>
      </div>

      <!-- Services Grid -->
      <section class="space-y-8">
        <h2 class="text-3xl font-bold text-center mb-8">What I Offer</h2>

        <div class="grid gap-8 md:grid-cols-2">
          <UCard
            v-for="service in services"
            :key="service.id"
            class="h-full"
            variant="soft"
          >
            <div class="space-y-6">
              <!-- Service Header -->
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center"
                >
                  <UIcon
                    :name="service.icon"
                    class="w-6 h-6 text-primary-600 dark:text-primary-400"
                  />
                </div>
                <div class="flex-1">
                  <h3
                    class="text-xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {{ service.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ service.description }}
                  </p>
                </div>
              </div>

              <!-- Features -->
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">
                  Includes:
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="feature in service.features"
                    :key="feature"
                    class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <UIcon
                      name="i-ph-check"
                      class="w-4 h-4 text-green-500 flex-shrink-0"
                    />
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Service Details -->
              <div
                class="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <!-- <div class="text-sm">
                  <span class="font-medium text-gray-900 dark:text-white"
                    >Pricing:</span
                  >
                  <span class="text-gray-600 dark:text-gray-400 ml-1">{{
                    service.pricing
                  }}</span>
                </div> -->
                <div class="text-sm">
                  <span class="font-medium text-gray-900 dark:text-white"
                    >Timeline:</span
                  >
                  <span class="text-gray-600 dark:text-gray-400 ml-1">{{
                    service.timeline
                  }}</span>
                </div>
                <div class="text-sm">
                  <span class="font-medium text-gray-900 dark:text-white"
                    >Best for:</span
                  >
                  <span class="text-gray-600 dark:text-gray-400 ml-1">{{
                    service.suitable
                  }}</span>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Process -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">How I Work</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A proven process that ensures successful project delivery
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="step in process" :key="step.step" class="text-center">
            <div class="relative mb-6">
              <div
                class="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <UIcon
                  :name="step.icon"
                  class="w-8 h-8 text-primary-600 dark:text-primary-400"
                />
              </div>
              <!-- <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
              >
                {{ step.step }}
              </div> -->
            </div>
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
            >
              {{ step.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              {{ step.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Pricing -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Pricing</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <UCard
            v-for="pkg in packages"
            :key="pkg.name"
            :class="[
              'h-full text-center',
              pkg.highlighted ? 'ring-2 ring-primary-500 scale-105' : '',
            ]"
            :variant="pkg.highlighted ? 'outline' : 'soft'"
          >
            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-bold mb-2">{{ pkg.name }}</h3>
                <!-- <div
                  class="text-3xl font-bold text-primary-600 dark:text-primary-400"
                >
                  {{ pkg.price }}
                  <span
                    class="text-base font-normal text-gray-500 dark:text-gray-400"
                    >{{ pkg.period }}</span
                  >
                </div> -->
                <p class="text-gray-600 dark:text-gray-400 mt-2">
                  {{ pkg.description }}
                </p>
              </div>

              <ul class="space-y-3 text-left">
                <li
                  v-for="feature in pkg.features"
                  :key="feature"
                  class="flex items-center gap-2 text-sm"
                >
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-green-500 flex-shrink-0"
                  />
                  {{ feature }}
                </li>
              </ul>

              <UButton
                to="/contact"
                :variant="pkg.highlighted ? 'outline' : 'soft'"
                size="lg"
                class="w-full"
              >
                Get Started
              </UButton>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Technologies -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Technologies I Work With</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Modern, proven technologies for building scalable applications
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <UCard variant="soft">
            <div class="text-center p-4">
              <UIcon
                name="i-ph-globe"
                class="w-12 h-12 text-primary-500 mx-auto mb-4"
              />
              <h3 class="text-lg font-semibold mb-2">Frontend</h3>
              <div class="flex flex-wrap gap-2 justify-center">
                <UBadge
                  v-for="tech in [
                    'Vue.js',
                    'React',
                    'Nuxt.js',
                    'Next.js',
                    'TypeScript',
                  ]"
                  :key="tech"
                  :label="tech"
                  variant="outline"
                  size="sm"
                />
              </div>
            </div>
          </UCard>

          <UCard variant="soft">
            <div class="text-center p-4">
              <UIcon
                name="i-ph-server"
                class="w-12 h-12 text-primary-500 mx-auto mb-4"
              />
              <h3 class="text-lg font-semibold mb-2">Backend</h3>
              <div class="flex flex-wrap gap-2 justify-center">
                <UBadge
                  v-for="tech in [
                    'Node.js',
                    'Express.js',
                    'PostgreSQL',
                    'MongoDB',
                    'Redis',
                  ]"
                  :key="tech"
                  :label="tech"
                  variant="outline"
                  size="sm"
                />
              </div>
            </div>
          </UCard>

          <UCard variant="soft">
            <div class="text-center p-4">
              <UIcon
                name="i-ph-cloud"
                class="w-12 h-12 text-primary-500 mx-auto mb-4"
              />
              <h3 class="text-lg font-semibold mb-2">Infrastructure</h3>
              <div class="flex flex-wrap gap-2 justify-center">
                <UBadge
                  v-for="tech in [
                    'AWS',
                    'Docker',
                    'Vercel',
                    'Cloudflare',
                    'GitHub Actions',
                  ]"
                  :key="tech"
                  :label="tech"
                  variant="outline"
                  size="sm"
                />
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- CTA -->
      <section
        class="text-center py-12 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl"
      >
        <h2 class="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p
          class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Let's discuss your requirements and create something amazing together.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/contact" size="lg" variant="solid">
            <UIcon name="i-ph-envelope" />
            Get In Touch
          </UButton>

          <UButton to="/projects" size="lg" variant="outline">
            <UIcon name="i-ph-folder-open" />
            View My Work
          </UButton>
        </div>
      </section>
    </div>
  </div>
</template>
