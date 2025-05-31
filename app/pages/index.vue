<script lang="ts" setup>
// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})

// Fetch recent blog posts - limit to 2 most recent
const { data: recentPosts } = await useAsyncData("recent-posts", async () => {
  return queryCollection("blog").order("date", "DESC").limit(2).all()
})

// Featured projects data - matching projects page structure
const featuredProjects = ref([
  {
    id: 1,
    title: "Vue Color Avatar",
    description:
      "A Vue.js component library for generating beautiful, customizable SVG avatars.",
    technologies: ["Vue.js", "TypeScript", "SVG", "Vite"],
    category: "Open Source",
    links: {
      github: "https://github.com/mubaidr/vue-color-avatar",
      demo: "https://vue-color-avatar.vercel.app/",
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
      "Modern template for building cross-browser extensions using Vue 3 and TypeScript.",
    technologies: ["Vue 3", "TypeScript", "WebExtensions"],
    category: "Development Tools",
    links: {
      github: "https://github.com/mubaidr/vue-browser-extension-template",
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
      "Full-stack e-commerce solution with advanced features and analytics.",
    technologies: ["Nuxt.js", "Node.js", "PostgreSQL"],
    category: "Web Application",
    links: {
      demo: "https://example-ecommerce.com",
    },
    stats: {
      revenue: "$100k+",
      orders: "5k+",
    },
  },
])

// Services overview
const services = ref([
  {
    icon: "i-ph-code",
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using modern frameworks.",
    highlight: "Vue.js • React • Node.js",
  },
  {
    icon: "i-ph-lightbulb",
    title: "Technical Consulting",
    description: "Strategic technical guidance and architecture planning.",
    highlight: "Architecture • Performance • Scalability",
  },
  {
    icon: "i-ph-users",
    title: "Project Leadership",
    description: "Lead development teams to deliver successful projects.",
    highlight: "Team Management • Agile • Quality",
  },
])

// SEO Meta
if (profile.value) {
  useHead({
    title: `${profile.value.name} - ${profile.value.title}`,
    meta: [
      {
        name: "description",
        content: profile.value.description,
      },
      {
        property: "og:title",
        content: `${profile.value.name} - ${profile.value.title}`,
      },
      {
        property: "og:description",
        content: profile.value.description,
      },
      {
        property: "og:image",
        content: profile.value.avatar,
      },
      {
        property: "og:type",
        content: "profile",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: `${profile.value.name} - ${profile.value.title}`,
      },
      {
        name: "twitter:description",
        content: profile.value.description,
      },
      {
        name: "twitter:image",
        content: profile.value.avatar,
      },
    ],
  })

  // Structured data for SEO
  useSchemaOrg([
    defineWebSite({
      name: profile.value.name,
      description: profile.value.description,
      url: "https://mubaidr.js.org",
    }),
    definePerson({
      name: profile.value.name,
      jobTitle: profile.value.title,
      description: profile.value.description,
      image: profile.value.avatar,
      url: "https://mubaidr.js.org",
      sameAs: profile.value.social?.map((s) => s.url) || [],
    }),
  ])
}

// Icon mapping function
function getIconForCategory(category: string): string {
  const iconMap: Record<string, string> = {
    languages: "i-ph-code",
    frameworks: "i-ph-stack",
    frontend: "i-ph-browser",
    testing: "i-ph-test-tube",
    databases: "i-ph-database",
    devops: "i-ph-cloud",
    automation: "i-ph-robot",
    build: "i-ph-gear",
    other: "i-ph-plus-circle",
  }
  return iconMap[category] || "i-ph-code"
}
</script>

<template>
  <div v-if="profile">
    <!-- Hero Section -->
    <section class="relative text-center min-h-screen">
      <div class="max-w-5xl mx-auto">
        <div class="flex justify-center mb-8">
          <UAvatar
            :src="profile.avatar"
            :alt="profile.name"
            size="3xl"
            class="ring-2 ring-primary/50"
          />
        </div>

        <div class="space-y-6">
          <h1
            class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            {{ profile.name }}
          </h1>
          <p
            class="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-medium"
          >
            {{ profile.title }}
          </p>
          <p
            class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {{ profile.tagline }}
          </p>
        </div>

        <!-- Availability Status -->
        <div class="flex justify-center mt-8">
          <div
            class="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full"
          >
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-green-600 dark:text-green-400 text-sm font-medium"
              >Available for new projects</span
            >
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <UButton to="/contact" size="lg" variant="solid">
            <UIcon name="i-ph-envelope" />
            Get In Touch
          </UButton>

          <UButton to="/projects" size="lg" variant="outline">
            <UIcon name="i-ph-folder-open" />
            View My Work
          </UButton>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-4 mt-8">
          <UButton
            v-for="social in profile.social"
            :key="social.name"
            :to="social.url"
            external
            variant="ghost"
            size="sm"
          >
            <UIcon
              :name="
                social.name === 'GitHub'
                  ? 'i-ph-github-logo'
                  : 'i-ph-linkedin-logo'
              "
              class="w-5 h-5"
            />
            {{ social.name }}
          </UButton>
        </div>
      </div>
    </section>

    <div class="space-y-24">
      <!-- About Preview -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ profile.description }}
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <!-- Work Approach -->
          <UCard variant="soft" class="h-full">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <UIcon name="i-ph-strategy" class="w-6 h-6 text-primary-500" />
                <h3 class="text-xl font-semibold">My Work Approach</h3>
              </div>
              <ul class="space-y-2">
                <li
                  v-for="(approach, index) in (
                    profile.workApproach || []
                  ).slice(0, 3)"
                  :key="index"
                  class="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                >
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-green-500 mt-1 flex-shrink-0"
                  />
                  <span class="text-sm">{{ approach }}</span>
                </li>
              </ul>
              <UButton to="/about" variant="ghost" size="sm" class="mt-4">
                Learn More About Me
                <UIcon name="i-ph-arrow-right" />
              </UButton>
            </div>
          </UCard>

          <!-- Current Focus -->
          <UCard variant="soft" class="h-full">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <UIcon name="i-ph-target" class="w-6 h-6 text-primary-500" />
                <h3 class="text-xl font-semibold">Current Focus</h3>
              </div>
              <ul class="space-y-2">
                <li
                  v-for="(focus, index) in (profile.currentFocus || []).slice(
                    0,
                    3,
                  )"
                  :key="index"
                  class="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                >
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-green-500 mt-1 flex-shrink-0"
                  />
                  <span class="text-sm">{{ focus }}</span>
                </li>
              </ul>
              <UButton to="/about" variant="ghost" size="sm" class="mt-4">
                View Full Timeline
                <UIcon name="i-ph-arrow-right" />
              </UButton>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Services Preview -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional web development services to help bring your ideas to
            life
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <UCard
            v-for="service in services"
            :key="service.title"
            class="text-center h-full"
            variant="soft"
          >
            <div class="space-y-4">
              <div
                class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto"
              >
                <UIcon
                  :name="service.icon"
                  class="w-6 h-6 text-primary-600 dark:text-primary-400"
                />
              </div>
              <h3 class="text-xl font-semibold">{{ service.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                {{ service.description }}
              </p>
              <p
                class="text-primary-600 dark:text-primary-400 text-sm font-medium"
              >
                {{ service.highlight }}
              </p>
            </div>
          </UCard>
        </div>

        <div class="text-center">
          <UButton to="/services" variant="outline" size="lg">
            <UIcon name="i-ph-briefcase" />
            View All Services
          </UButton>
        </div>
      </section>

      <!-- Featured Projects -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of projects that showcase my expertise and passion for
            development
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <UCard
            v-for="project in featuredProjects"
            :key="project.id"
            class="group cursor-pointer transition-all duration-300 hover:scale-[1.02] h-full"
            variant="soft"
          >
            <div class="space-y-4">
              <!-- Project Header -->
              <div
                class="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center"
              >
                <UIcon
                  name="i-ph-code"
                  class="w-8 h-8 text-primary-600 dark:text-primary-400"
                />
              </div>

              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <h3
                    class="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
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

                <!-- Technologies -->
                <div class="flex flex-wrap gap-1">
                  <UBadge
                    v-for="tech in project.technologies.slice(0, 3)"
                    :key="tech"
                    :label="tech"
                    variant="outline"
                    size="sm"
                  />
                </div>

                <!-- Stats -->
                <div
                  v-if="project.stats"
                  class="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400"
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
                      class="w-3 h-3"
                    />
                    {{ value }}
                  </span>
                </div>
              </div>
            </div>
          </UCard>
        </div>

        <div class="text-center">
          <UButton to="/projects" variant="outline" size="lg">
            <UIcon name="i-ph-folder-open" />
            View All Projects
          </UButton>
        </div>
      </section>

      <!-- Recent Blog Posts - Show 2 Most Recent -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Recent Blog Posts</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Latest thoughts on development, technology, and best practices
          </p>
        </div>

        <!-- Show blog posts if available, otherwise show placeholder -->
        <div
          v-if="recentPosts && recentPosts.length > 0"
          class="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
        >
          <UCard
            v-for="(post, index) in recentPosts"
            :key="post.path || `post-${index}`"
            class="group cursor-pointer transition-all duration-300 hover:scale-[1.02] h-full"
            variant="soft"
            @click="navigateTo(post.path || '/blog')"
          >
            <div class="space-y-4">
              <!-- Blog post image placeholder -->
              <div
                class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center"
              >
                <UIcon
                  name="i-ph-article"
                  class="w-8 h-8 text-gray-500 dark:text-gray-400"
                />
              </div>

              <div class="space-y-3">
                <h3
                  class="text-xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2"
                >
                  {{ post.title || "Blog Post Title" }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 line-clamp-3">
                  {{
                    post.description ||
                    "Blog post description that provides a brief overview of the content and main topics covered in the article."
                  }}
                </p>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-500 dark:text-gray-400">
                    {{
                      post.date
                        ? new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "Recent"
                    }}
                  </span>
                  <UIcon
                    name="i-ph-arrow-right"
                    class="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Placeholder when no blog posts -->
        <div v-else class="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <UCard class="h-full" variant="soft">
            <div class="space-y-4">
              <div
                class="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center"
              >
                <UIcon
                  name="i-ph-article"
                  class="w-8 h-8 text-primary-600 dark:text-primary-400"
                />
              </div>
              <div class="space-y-3">
                <h3 class="text-xl font-semibold">
                  Building Modern Web Applications
                </h3>
                <p class="text-gray-600 dark:text-gray-400 line-clamp-3">
                  Exploring the latest trends and best practices in modern web
                  development, from framework selection to deployment
                  strategies.
                </p>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-500 dark:text-gray-400"
                    >Coming Soon</span
                  >
                  <UIcon name="i-ph-clock" class="w-4 h-4 text-primary-500" />
                </div>
              </div>
            </div>
          </UCard>

          <UCard class="h-full" variant="soft">
            <div class="space-y-4">
              <div
                class="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center"
              >
                <UIcon
                  name="i-ph-code"
                  class="w-8 h-8 text-blue-600 dark:text-blue-400"
                />
              </div>
              <div class="space-y-3">
                <h3 class="text-xl font-semibold">TypeScript Tips & Tricks</h3>
                <p class="text-gray-600 dark:text-gray-400 line-clamp-3">
                  Advanced TypeScript techniques and patterns that can help you
                  write more maintainable and type-safe code.
                </p>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-500 dark:text-gray-400"
                    >Coming Soon</span
                  >
                  <UIcon name="i-ph-clock" class="w-4 h-4 text-primary-500" />
                </div>
              </div>
            </div>
          </UCard>
        </div>

        <div class="text-center">
          <UButton to="/blog" variant="outline" size="lg">
            <UIcon name="i-ph-article" />
            Read All Posts
          </UButton>
        </div>
      </section>

      <!-- Technologies Overview -->
      <section class="space-y-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Technologies & Tools
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Modern technologies I use to build exceptional digital experiences
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="(techs, category) in profile.technologies || {}"
            :key="category"
            class="h-full"
            variant="soft"
          >
            <template #header>
              <h3
                class="text-lg font-semibold capitalize flex items-center gap-2"
              >
                <UIcon
                  :name="getIconForCategory(String(category))"
                  class="w-5 h-5 text-primary-500"
                />
                {{
                  String(category)
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                }}
              </h3>
            </template>

            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tech in (Array.isArray(techs) ? techs : []).slice(0, 6)"
                :key="tech"
                variant="outline"
                size="sm"
              >
                {{ tech }}
              </UBadge>
              <UBadge
                v-if="Array.isArray(techs) && techs.length > 6"
                :label="`+${techs.length - 6} more`"
                variant="soft"
                size="sm"
                color="neutral"
              />
            </div>
          </UCard>
        </div>
      </section>

      <!-- Call to Action -->
      <section
        class="text-center py-16 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl"
      >
        <div class="max-w-3xl mx-auto space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            {{
              profile.availability?.description ||
              "I'm always interested in new opportunities and challenging projects. Let's discuss how we can bring your ideas to life."
            }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              :to="profile.availability?.cta?.url || '/contact'"
              size="lg"
              variant="solid"
            >
              <UIcon name="i-ph-envelope" />
              {{ profile.availability?.cta?.text || "Start a Project" }}
            </UButton>

            <UButton
              href="https://cal.com/mubaidr"
              external
              size="lg"
              variant="outline"
            >
              <UIcon name="i-ph-calendar" />
              Schedule a Call
            </UButton>
          </div>

          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{
              profile.availability?.note || "Usually responds within 24 hours"
            }}
          </p>
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
