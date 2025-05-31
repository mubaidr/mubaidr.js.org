<script setup lang="ts">
definePageMeta({
  title: "About - Muhammad Ubaid Raza",
  description:
    "Learn more about my professional journey, skills, and approach to software development.",
})

// Fetch profile data
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})

useHead({
  title: "About - Muhammad Ubaid Raza",
  meta: [
    {
      name: "description",
      content:
        "Learn more about my professional journey, skills, and approach to software development.",
    },
  ],
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
          About Me
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Passionate software engineer with over a decade of experience building
          scalable solutions
        </p>
      </div>

      <!-- Professional Journey -->
      <section class="space-y-8">
        <h2 class="text-3xl font-bold text-center mb-8">
          Professional Journey
        </h2>

        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Timeline line -->
            <div
              class="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"
            ></div>

            <!-- Timeline items -->
            <div class="space-y-8">
              <div class="relative flex items-start space-x-6">
                <div
                  class="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
                >
                  <UIcon name="i-ph-briefcase" class="w-4 h-4 text-white" />
                </div>
                <div class="flex-1">
                  <h3
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    Senior Software Engineer
                  </h3>
                  <p class="text-primary-600 dark:text-primary-400 font-medium">
                    2019 - Present
                  </p>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">
                    Leading full-stack development projects, architecting
                    scalable solutions, and mentoring junior developers.
                    Specialized in Vue.js, Node.js, and cloud technologies.
                  </p>
                </div>
              </div>

              <div class="relative flex items-start space-x-6">
                <div
                  class="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
                >
                  <UIcon
                    name="i-ph-graduation-cap"
                    class="w-4 h-4 text-white"
                  />
                </div>
                <div class="flex-1">
                  <h3
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    MS in Project Management
                  </h3>
                  <p class="text-primary-600 dark:text-primary-400 font-medium">
                    2019
                  </p>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">
                    Advanced studies in project management methodologies, team
                    leadership, and strategic planning.
                  </p>
                </div>
              </div>

              <div class="relative flex items-start space-x-6">
                <div
                  class="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
                >
                  <UIcon name="i-ph-code" class="w-4 h-4 text-white" />
                </div>
                <div class="flex-1">
                  <h3
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    Full-Stack Developer
                  </h3>
                  <p class="text-primary-600 dark:text-primary-400 font-medium">
                    2012 - 2019
                  </p>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">
                    Built diverse web applications using modern frameworks and
                    technologies. Developed expertise in both frontend and
                    backend development.
                  </p>
                </div>
              </div>

              <div class="relative flex items-start space-x-6">
                <div
                  class="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
                >
                  <UIcon
                    name="i-ph-graduation-cap"
                    class="w-4 h-4 text-white"
                  />
                </div>
                <div class="flex-1">
                  <h3
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    BS in Software Engineering
                  </h3>
                  <p class="text-primary-600 dark:text-primary-400 font-medium">
                    2012
                  </p>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">
                    Foundation in computer science principles, software
                    engineering practices, and programming methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills & Expertise -->
      <section v-if="profile" class="space-y-8">
        <h2 class="text-3xl font-bold text-center mb-8">Skills & Expertise</h2>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="(techs, category) in profile.technologies"
            :key="category"
            class="h-full"
            variant="soft"
          >
            <template #header>
              <h3 class="text-lg font-semibold capitalize">
                {{
                  String(category)
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                }}
              </h3>
            </template>

            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tech in techs.slice(0, 6)"
                :key="tech"
                variant="outline"
                size="sm"
              >
                {{ tech }}
              </UBadge>
              <UBadge
                v-if="techs.length > 6"
                variant="soft"
                size="sm"
                color="neutral"
              >
                +{{ techs.length - 6 }} more
              </UBadge>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Personal Interests -->
      <section class="space-y-8">
        <h2 class="text-3xl font-bold text-center mb-8">Beyond Code</h2>

        <div class="grid gap-6 md:grid-cols-3">
          <UCard variant="soft">
            <div class="text-center p-4">
              <UIcon
                name="i-ph-book-open"
                class="w-12 h-12 text-primary-500 mx-auto mb-4"
              />
              <h3 class="text-lg font-semibold mb-2">Continuous Learning</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Always exploring new technologies and methodologies to stay at
                the forefront of software development.
              </p>
            </div>
          </UCard>

          <UCard variant="soft">
            <div class="text-center p-4">
              <UIcon
                name="i-ph-users"
                class="w-12 h-12 text-primary-500 mx-auto mb-4"
              />
              <h3 class="text-lg font-semibold mb-2">Mentoring</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Passionate about helping junior developers grow and sharing
                knowledge with the community.
              </p>
            </div>
          </UCard>

          <UCard variant="soft">
            <div class="text-center p-4">
              <UIcon
                name="i-ph-globe"
                class="w-12 h-12 text-primary-500 mx-auto mb-4"
              />
              <h3 class="text-lg font-semibold mb-2">Open Source</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Contributing to open source projects and building tools that
                make developers' lives easier.
              </p>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="text-center py-12">
        <h2 class="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p
          class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          I'm always interested in new opportunities and challenging projects.
          Let's discuss how we can bring your ideas to life.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/contact" size="lg" variant="soft">
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
