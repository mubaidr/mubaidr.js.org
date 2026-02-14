<script setup lang="ts">
definePageMeta({
  title: "About - Muhammad Ubaid Raza",
  description:
    "Learn about my professional journey, experience, education, and skills in web development.",
})

// Fetch data using composables
const { data: professionalJourneyData } = await useProfessionalJourneyData()

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
    <div class="space-y-32">
      <!-- Page Header -->
      <div class="text-center space-y-6">
        <h1>The Full Story</h1>

        <p class="max-w-4xl mx-auto">
          Here's the complete picture of my professional journey, from education
          to expertise, and everything that drives my passion for creating
          exceptional web experiences.
        </p>
      </div>

      <!-- Professional Experience -->
      <section class="space-y-12">
        <div class="text-center space-y-6">
          <h2>Professional Experience</h2>

          <p class="max-w-3xl mx-auto">
            A decade of building innovative solutions and leading development
            teams across various industries.
          </p>
        </div>

        <div class="space-y-8">
          <div
            v-for="experience in professionalJourneyData?.experiences"
            :key="experience.id"
          >
            <UCard class="relative">
              <div class="space-y-6">
                <!-- Experience Header -->
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <h3 class="text-lg font-bold">{{ experience.title }}</h3>
                    <p>
                      {{ experience.company }}
                    </p>
                    <p>
                      {{ experience.location }}
                    </p>
                  </div>
                  <div class="text-right absolute top-2 right-2">
                    <UBadge :label="experience.period" variant="outline" />
                  </div>
                </div>

                <!-- Description -->
                <p>
                  {{ experience.description }}
                </p>

                <!-- Responsibilities -->
                <div>
                  <h4 class="mb-3">Key Responsibilities:</h4>
                  <ul class="space-y-2">
                    <li
                      v-for="(
                        responsibility, respIndex
                      ) in experience.responsibilities"
                      :key="`resp-${experience.id}-${respIndex}`"
                      class="flex items-start gap-2 align-baseline"
                    >
                      {{ responsibility }}
                    </li>
                  </ul>
                </div>

                <!-- Technologies -->
                <!-- <div>
                  <h4 class="mb-3">Technologies Used:</h4>
                  <div class="flex flex-wrap gap-2">
                    <UBadge
                      v-for="tech in experience.technologies"
                      :key="tech"
                      :label="tech"
                      variant="soft"
                      size="xl"
                    />
                  </div>
                </div> -->

                <!-- Achievements -->
                <div
                  v-if="
                    experience.achievements &&
                    experience.achievements.length > 0
                  "
                >
                  <h4 class="mb-3">Key Achievements:</h4>
                  <ul class="space-y-2">
                    <li
                      v-for="(achievement, achIndex) in experience.achievements"
                      :key="`ach-${experience.id}-${achIndex}`"
                      class="flex items-start gap-2"
                    >
                      <UIcon name="i-ph-trophy" />
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="space-y-12">
        <div class="text-center space-y-6">
          <h2>Education & Learning</h2>

          <p class="max-w-3xl mx-auto">
            Strong academic foundation combined with continuous learning and
            professional development.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="edu in professionalJourneyData?.education"
            :key="edu.id"
            class="h-full"
          >
            <UCard class="h-full">
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="flex items-center justify-center shrink-0">
                    <UIcon
                      name="i-ph-graduation-cap-bold"
                      size="3em"
                      class="text-primary-500"
                    />
                  </div>
                  <div class="flex-1 space-y-1">
                    <h3 class="text-xl font-bold">{{ edu.degree }}</h3>
                    <p class="text-neutral-600 dark:text-neutral-400">
                      {{ edu.institution }}
                    </p>
                    <p class="text-sm text-neutral-500">
                      {{ edu.location }}
                    </p>
                    <UBadge
                      :label="edu.period"
                      variant="subtle"
                      color="neutral"
                      class="mt-2"
                    />
                  </div>
                </div>
                <!--
                <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {{ edu.description }}
                </p> -->
              </div>
            </UCard>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section class="space-y-12">
        <div class="text-center space-y-6">
          <h2>Certifications & Awards</h2>

          <p class="max-w-3xl mx-auto">
            Industry-recognized certifications and achievements that validate
            expertise and commitment to excellence.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="cert in professionalJourneyData?.certifications"
            :key="cert.id"
            class="h-full text-center"
          >
            <UCard class="h-full">
              <div class="space-y-4">
                <div class="w-16 h-16 flex items-center justify-center mx-auto">
                  <UIcon
                    name="i-ph-certificate-bold"
                    size="3em"
                    class="text-primary-500"
                  />
                </div>

                <div class="space-y-2">
                  <h3 class="text-lg font-bold">{{ cert.name }}</h3>
                  <p class="text-neutral-600 dark:text-neutral-400">
                    {{ cert.issuer }}
                  </p>
                  <!-- <UBadge :label="cert.date" variant="subtle" color="neutral" /> -->
                </div>

                <p class="text-sm text-neutral-500 leading-relaxed">
                  {{ cert.description }}
                </p>

                <!-- <div class="text-[10px] uppercase tracking-widest text-neutral-400">
                  ID: {{ cert.credentialId }}
                </div> -->
              </div>
            </UCard>
          </div>
        </div>
      </section>

      <!-- Skills & Expertise -->
      <!-- <section class="max-w-4xl mx-auto px-4 space-y-6">
        <div class="text-center space-y-4">
          <h2 class="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
        </div>

        <div v-if="professionalJourneyData?.technologies" class="flex flex-wrap gap-2 text-center justify-center">
          <template v-for="(skills, category) in professionalJourneyData.technologies" :key="category">
            <UBadge v-for="skill in skills" :key="category + '-' + skill" :label="skill" variant="soft" size="lg" />
          </template>
</div>
</section> -->
    </div>
  </div>
</template>
