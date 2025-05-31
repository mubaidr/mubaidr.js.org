<script setup lang="ts">
definePageMeta({
  title: "Projects - Muhammad Ubaid Raza",
  description:
    "Explore my portfolio of web applications, browser extensions, and open source contributions.",
})

useHead({
  title: "Projects - Muhammad Ubaid Raza",
  meta: [
    {
      name: "description",
      content:
        "Explore my portfolio of web applications, browser extensions, and open source contributions.",
    },
  ],
})

// Sample projects data - in a real app, this would come from a CMS or API
const projects = ref([
  {
    id: 1,
    title: "Vue Color Avatar",
    description:
      "A Vue.js component library for generating beautiful, customizable SVG avatars. Used by thousands of developers worldwide.",
    image: "/img/projects/vue-color-avatar.png",
    technologies: ["Vue.js", "TypeScript", "SVG", "Vite"],
    category: "Open Source",
    featured: true,
    links: {
      github: "https://github.com/mubaidr/vue-color-avatar",
      demo: "https://vue-color-avatar.vercel.app/",
      npm: "https://www.npmjs.com/package/vue-color-avatar",
    },
    stats: {
      stars: "1.2k",
      downloads: "50k+",
    },
  },
  {
    id: 2,
    title: "Browser Extension Template",
    description:
      "A modern template for building cross-browser extensions using Vue 3, TypeScript, and Manifest V3.",
    image: "/img/projects/browser-extension.png",
    technologies: ["Vue 3", "TypeScript", "WebExtensions", "Vite"],
    category: "Development Tools",
    featured: true,
    links: {
      github: "https://github.com/mubaidr/vue-browser-extension-template",
      demo: "https://chrome.google.com/webstore/detail/example",
    },
    stats: {
      stars: "800",
      users: "10k+",
    },
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and analytics.",
    image: "/img/projects/ecommerce.png",
    technologies: ["Nuxt.js", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Application",
    featured: true,
    links: {
      demo: "https://example-ecommerce.com",
    },
    stats: {
      revenue: "$100k+",
      orders: "5k+",
    },
  },
  {
    id: 4,
    title: "Task Management SaaS",
    description:
      "Cloud-based project management tool with team collaboration, time tracking, and reporting features.",
    image: "/img/projects/task-management.png",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
    category: "SaaS",
    featured: false,
    links: {
      demo: "https://example-tasks.com",
    },
    stats: {
      users: "2k+",
      teams: "500+",
    },
  },
  {
    id: 5,
    title: "Developer Portfolio",
    description:
      "Modern, responsive portfolio website built with Nuxt 3, featuring glass morphism design and smooth animations.",
    image: "/img/projects/portfolio.png",
    technologies: ["Nuxt 3", "Tailwind CSS", "TypeScript", "Nuxt Content"],
    category: "Portfolio",
    featured: false,
    links: {
      github: "https://github.com/mubaidr/portfolio",
      demo: "https://mubaidr.js.org",
    },
  },
  {
    id: 6,
    title: "API Documentation Tool",
    description:
      "Interactive API documentation generator with live testing capabilities and beautiful UI.",
    image: "/img/projects/api-docs.png",
    technologies: ["Vue.js", "Express.js", "OpenAPI", "Prism.js"],
    category: "Development Tools",
    featured: false,
    links: {
      github: "https://github.com/mubaidr/api-docs-generator",
      demo: "https://api-docs-example.com",
    },
  },
])

const selectedCategory = ref("All")
const categories = computed(() => {
  const cats = ["All", ...new Set(projects.value.map((p) => p.category))]
  return cats
})

const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") {
    return projects.value
  }
  return projects.value.filter((p) => p.category === selectedCategory.value)
})

const featuredProjects = computed(() => {
  return projects.value.filter((p) => p.featured)
})
</script>

<template>
  <div>
    <div class="space-y-24">
      <!-- Page Header -->
      <div class="text-center">
        <h1
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          My Projects
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A showcase of web applications, open source contributions, and
          development tools I've built
        </p>
      </div>

      <!-- Featured Projects -->
      <section class="space-y-8">
        <h2 class="text-3xl font-bold text-center mb-8">Featured Projects</h2>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="project in featuredProjects"
            :key="project.id"
            class="group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          >
            <!-- Project Image -->
            <div
              class="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4 flex items-center justify-center"
            >
              <UIcon
                name="i-ph-code"
                class="w-12 h-12 text-primary-600 dark:text-primary-400"
              />
            </div>

            <!-- Project Content -->
            <div class="space-y-4">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <h3
                    class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  >
                    {{ project.title }}
                  </h3>
                  <UBadge :label="project.category" variant="soft" size="sm" />
                </div>
                <p
                  class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3"
                >
                  {{ project.description }}
                </p>
              </div>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="tech in project.technologies.slice(0, 4)"
                  :key="tech"
                  :label="tech"
                  variant="outline"
                  size="sm"
                />
                <UBadge
                  v-if="project.technologies.length > 4"
                  :label="`+${project.technologies.length - 4}`"
                  variant="soft"
                  size="sm"
                  color="neutral"
                />
              </div>

              <!-- Stats -->
              <div
                v-if="project.stats"
                class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
              >
                <span
                  v-for="(value, key) in project.stats"
                  :key="key"
                  class="flex items-center gap-1"
                >
                  <UIcon
                    :name="
                      key === 'stars'
                        ? 'i-ph-star'
                        : key === 'downloads'
                        ? 'i-ph-download'
                        : 'i-ph-users'
                    "
                    class="w-4 h-4"
                  />
                  {{ value }}
                </span>
              </div>

              <!-- Links -->
              <div
                class="flex items-center gap-2 pt-2 border-t border-gray-200 dark:border-gray-700"
              >
                <UButton
                  v-if="project.links.demo"
                  :to="project.links.demo"
                  external
                  variant="soft"
                  size="sm"
                >
                  <UIcon name="i-ph-eye" />
                  Demo
                </UButton>

                <UButton
                  v-if="project.links.github"
                  :to="project.links.github"
                  external
                  variant="ghost"
                  size="sm"
                >
                  <UIcon name="i-ph-github-logo" />
                  Code
                </UButton>

                <UButton
                  v-if="project.links.npm"
                  :to="project.links.npm"
                  external
                  variant="ghost"
                  size="sm"
                >
                  <UIcon name="i-ph-package" />
                  NPM
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- All Projects -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-8">All Projects</h2>

          <!-- Category Filter -->
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <UButton
              v-for="category in categories"
              :key="category"
              :variant="selectedCategory === category ? 'solid' : 'outline'"
              size="sm"
              @click="selectedCategory = category"
            >
              {{ category }}
            </UButton>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="project in filteredProjects"
            :key="project.id"
            class="group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          >
            <!-- Project Image -->
            <div
              class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-4 flex items-center justify-center"
            >
              <UIcon
                name="i-ph-folder-open"
                class="w-8 h-8 text-gray-500 dark:text-gray-400"
              />
            </div>

            <!-- Project Content -->
            <div class="space-y-3">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  >
                    {{ project.title }}
                  </h3>
                  <UBadge :label="project.category" variant="soft" size="sm" />
                </div>
                <p
                  class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2"
                >
                  {{ project.description }}
                </p>
              </div>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-1">
                <UBadge
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  :label="tech"
                  variant="outline"
                  size="sm"
                />
                <UBadge
                  v-if="project.technologies.length > 3"
                  :label="`+${project.technologies.length - 3}`"
                  variant="soft"
                  size="sm"
                  color="neutral"
                />
              </div>

              <!-- Links -->
              <div class="flex items-center gap-2 pt-2">
                <UButton
                  v-if="project.links.demo"
                  :to="project.links.demo"
                  external
                  variant="soft"
                  size="sm"
                >
                  <UIcon name="i-ph-eye" />
                </UButton>

                <UButton
                  v-if="project.links.github"
                  :to="project.links.github"
                  external
                  variant="ghost"
                  size="sm"
                >
                  <UIcon name="i-ph-github-logo" />
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- GitHub Integration -->
      <section
        class="text-center py-12 bg-gray-50 dark:bg-gray-900/50 rounded-xl"
      >
        <h2 class="text-3xl font-bold mb-4">More on GitHub</h2>
        <p
          class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Explore my complete portfolio of open source projects, contributions,
          and experiments on GitHub.
        </p>

        <UButton
          to="https://github.com/mubaidr"
          external
          size="lg"
          variant="soft"
        >
          <UIcon name="i-ph-github-logo" />
          View GitHub Profile
        </UButton>
      </section>

      <!-- Contact CTA -->
      <section class="text-center py-12">
        <h2 class="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
        <p
          class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          I'm always interested in working on exciting projects. Let's discuss
          how we can bring your ideas to life.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/contact" size="lg" variant="soft">
            <UIcon name="i-ph-envelope" />
            Start a Project
          </UButton>

          <UButton to="/services" size="lg" variant="outline">
            <UIcon name="i-ph-briefcase" />
            View Services
          </UButton>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
