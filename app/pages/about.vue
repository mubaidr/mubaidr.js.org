<script setup lang="ts">
definePageMeta({
  title: "About - Muhammad Ubaid Raza",
  description:
    "Learn about my professional journey, experience, education, and skills in web development.",
})

// Fetch professional journey data from Nuxt Content collection
const { data: professionalJourney } = await useAsyncData(
  "professional-journey",
  () => {
    return queryCollection("professionalJourney").first()
  },
)

// Fetch profile journey data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})

useHead({
  title: "About - Muhammad Ubaid Raza",
  meta: [
    {
      name: "description",
      content:
        "Learn about my professional journey, experience, education, and skills in web development.",
    },
  ],
})
</script>

<template>
  <div>
    <div class="space-y-24">
      <!-- Page Header -->
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {{
            profile?.description ||
            "Passionate software engineer with over a decade of experience building scalable applications."
          }}
        </p>
      </div>

      <!-- Professional Experience -->
      <section class="space-y-8">
        <h2 class="text-3xl font-bold text-center mb-8">
          Professional Experience
        </h2>

        <div class="space-y-8">
          <UCard
            v-for="experience in professionalJourney?.experiences"
            :key="experience.id"
            variant="soft"
            class="relative"
          >
            <!-- Current position indicator -->
            <div
              v-if="experience.current"
              class="absolute -top-2 -right-2 z-10"
            >
              <UBadge label="Current" variant="solid" color="primary" />
            </div>

            <div class="space-y-6">
              <!-- Experience Header -->
              <div
                class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 class="text-xl font-bold">{{ experience.title }}</h3>
                  <p class="text-lg text-primary font-medium">
                    {{ experience.company }}
                  </p>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ experience.location }}
                  </p>
                </div>
                <div class="text-right">
                  <UBadge
                    :label="experience.period"
                    variant="outline"
                    size="lg"
                  />
                </div>
              </div>

              <!-- Description -->
              <p class="text-gray-700 dark:text-gray-300">
                {{ experience.description }}
              </p>

              <!-- Responsibilities -->
              <div>
                <h4 class="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Key Responsibilities:
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="(
                      responsibility, respIndex
                    ) in experience.responsibilities"
                    :key="`resp-${experience.id}-${respIndex}`"
                    class="flex items-start gap-2 text-gray-600 dark:text-gray-400 align-baseline"
                  >
                    <UIcon
                      name="i-ph-check-circle-duotone"
                      class="text-primary"
                    />
                    {{ responsibility }}
                  </li>
                </ul>
              </div>

              <!-- Technologies -->
              <div>
                <h4 class="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Technologies Used:
                </h4>
                <div class="flex flex-wrap gap-2">
                  <UBadge
                    v-for="tech in experience.technologies"
                    :key="tech"
                    :label="tech"
                    variant="soft"
                  />
                </div>
              </div>

              <!-- Achievements -->
              <div
                v-if="
                  experience.achievements && experience.achievements.length > 0
                "
              >
                <h4 class="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Key Achievements:
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="(achievement, achIndex) in experience.achievements"
                    :key="`ach-${experience.id}-${achIndex}`"
                    class="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <UIcon
                      name="i-ph-trophy-duotone"
                      class="text-yellow-500 dark:text-yellow-400"
                    />
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Education -->
      <section class="space-y-8">
        <h2 class="text-3xl font-bold text-center mb-8">Education</h2>

        <div class="grid gap-6 md:grid-cols-2">
          <UCard
            v-for="edu in professionalJourney?.education"
            :key="edu.id"
            variant="soft"
            class="h-full"
          >
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div
                  class="w-12 h-12 bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0"
                >
                  <UIcon
                    name="i-ph-graduation-cap"
                    class="w-6 h-6 text-primary"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold">{{ edu.degree }}</h3>
                  <p class="text-primary font-medium">{{ edu.institution }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ edu.location }}
                  </p>
                  <UBadge
                    :label="edu.period"
                    variant="outline"
                    size="sm"
                    class="mt-2"
                  />
                </div>
              </div>

              <p class="text-gray-600 dark:text-gray-400">
                {{ edu.description }}
              </p>

              <!-- <div>
                <h4 class="font-semibold mb-2 text-sm">Achievements:</h4>
                <ul class="space-y-1">
                  <li
                    v-for="(achievement, index) in edu.achievements"
                    :key="index"
                    class="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <UIcon
                      name="i-ph-medal"
                      class="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0"
                    />
                    <span class="text-xs">{{ achievement }}</span>
                  </li>
                </ul>
              </div> -->
            </div>
          </UCard>
        </div>
      </section>

      <!-- Certifications -->
      <section class="space-y-8">
        <h2 class="text-3xl font-bold text-center mb-8">Certifications</h2>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="cert in professionalJourney?.certifications"
            :key="cert.id"
            variant="soft"
            class="text-center h-full"
          >
            <div class="space-y-4">
              <div
                class="w-16 h-16 bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto"
              >
                <UIcon name="i-ph-certificate" class="w-8 h-8 text-primary" />
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2">{{ cert.name }}</h3>
                <p class="text-primary font-medium">{{ cert.issuer }}</p>
                <UBadge
                  :label="cert.date"
                  variant="outline"
                  size="sm"
                  class="mt-2"
                />
              </div>

              <p class="text-gray-600 dark:text-gray-400 text-sm">
                {{ cert.description }}
              </p>

              <div class="text-xs text-gray-500 dark:text-gray-400">
                ID: {{ cert.credentialId }}
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Technologies -->
      <section class="space-y-8">
        <h2 class="text-3xl font-bold text-center mb-8">Skills & Expertise</h2>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="(skills, category) in professionalJourney?.technologies"
            :key="category"
            variant="soft"
            class="h-full"
          >
            <div class="space-y-4">
              <div class="flex items-center gap-3 mb-3">
                <div
                  class="w-12 h-12 bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0"
                >
                  <UIcon name="i-ph-code" class="w-6 h-6 text-primary" />
                </div>
                <h3 class="text-lg font-bold capitalize">
                  {{ category.replace(/([A-Z])/g, " $1") }}
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="skill in skills"
                  :key="skill"
                  :label="skill"
                  variant="soft"
                  size="sm"
                />
              </div>
            </div>
          </UCard>
        </div>
      </section>
    </div>
  </div>
</template>
