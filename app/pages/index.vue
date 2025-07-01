<script lang="ts" setup>
// Fetch profile data from Nuxt Content collection
const { data: profile } = await useAsyncData("profile", () => {
  return queryCollection("profile").first()
})

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
</script>

<template>
  <div v-if="profile">
    <!-- Enhanced Hero Section -->
    <section class="relative text-center min-h-screen">
      <div class="max-w-5xl mx-auto">
        <!-- Avatar with Integrated Status - Redesigned -->
        <div class="flex flex-col items-center mb-8 space-y-3">
          <!-- Larger, cleaner avatar without ring -->
          <div class="w-32 h-32 md:w-40 md:h-40">
            <UAvatar
              :src="profile.avatar"
              :alt="profile.name"
              class="w-full h-full shadow-2xl border-4 border-white dark:border-gray-800"
            />
          </div>
          <!-- Status badge on avatar - bottom right positioned -->
          <div
            v-if="profile.availability"
            class="flex items-center gap-2 px-3 py-1.5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
          >
            <div
              :class="[
                'w-2 h-2 rounded-full',
                profile.availability.status === 'available'
                  ? 'bg-green-500 animate-pulse'
                  : 'bg-orange-500',
              ]"
            />
            <span
              class="text-xs font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap"
            >
              {{
                profile.availability.statusText || "Available for new projects"
              }}
            </span>
          </div>
        </div>

        <div class="space-y-6">
          <h1
            class="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
          >
            {{ profile.name }}
          </h1>
          <p class="text-xl md:text-2xl text-primary font-medium">
            {{ profile.title }}
          </p>
          <p
            class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {{ profile.tagline }}
          </p>
        </div>

        <!-- Key Metrics -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
        >
          <div class="text-center group">
            <div
              class="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              {{ profile?.experience || "12" }}+
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
          <div class="text-center group">
            <div
              class="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              {{ profile?.projectsDelivered || "125" }}+
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Projects Delivered
            </div>
          </div>
          <div class="text-center group">
            <div
              class="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              {{ profile?.clientSatisfaction || "100" }}%
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Client Satisfaction
            </div>
          </div>
          <div class="text-center group">
            <div
              class="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              {{ profile?.availability?.responseTime || "8h" }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Response Time
            </div>
          </div>
        </div>

        <!-- Enhanced Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <UButton
            to="/contact"
            size="xl"
            variant="solid"
            class="glass-button relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
          >
            <UIcon name="i-ph-rocket-launch" />
            Start Your Project Today
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />
          </UButton>

          <UButton
            href="https://cal.com/mubaidr"
            external
            size="xl"
            variant="subtle"
          >
            <UIcon name="i-ph-calendar-check" />
            Book Free Consultation
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
            class="hover:scale-110 transition-transform duration-200"
          >
            <UIcon :name="social.icon" class="w-5 h-5" />
          </UButton>
        </div>
      </div>
    </section>

    <!-- Clear separation between hero and content sections -->
    <div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-32 py-16">
          <!-- About Preview Section -->
          <section class="relative overflow-hidden py-16">
            <!-- Background Elements -->
            <div class="absolute inset-0 opacity-5">
              <div
                class="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"
              />
              <div
                class="absolute bottom-20 right-10 w-24 h-24 bg-blue-500 rounded-full blur-3xl"
              />
            </div>

            <div class="relative space-y-16">
              <!-- Header -->
              <div class="text-center space-y-6">
                <div
                  class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
                >
                  <UIcon name="i-ph-user-circle" class="w-4 h-4 text-primary" />
                  <span class="text-sm font-medium text-primary"
                    >About Muhammad</span
                  >
                </div>

                <h2
                  class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent"
                >
                  Building Digital Solutions That Drive Results
                </h2>

                <p
                  class="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
                >
                  {{ profile.description }}
                </p>
              </div>

              <!-- Value Proposition Cards -->
              <div class="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
                <!-- Technical Excellence -->
                <UCard variant="subtle" class="text-center h-full">
                  <div class="space-y-6">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                    >
                      <UIcon name="i-ph-code" class="w-8 h-8 text-primary" />
                    </div>

                    <div class="space-y-3">
                      <h3
                        class="text-xl font-bold text-gray-900 dark:text-gray-100"
                      >
                        Technical Excellence
                      </h3>
                      <p
                        class="text-gray-600 dark:text-gray-400 leading-relaxed"
                      >
                        {{ profile?.experience || "12" }}+ years of deep
                        technical expertise across full-stack development,
                        DevOps, and modern architectures.
                      </p>
                    </div>
                  </div>
                </UCard>

                <UCard variant="subtle" class="text-center h-full">
                  <div class="space-y-6">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                    >
                      <UIcon
                        name="i-ph-chart-line-up"
                        class="w-8 h-8 text-blue-600"
                      />
                    </div>

                    <div class="space-y-3">
                      <h3
                        class="text-xl font-bold text-gray-900 dark:text-gray-100"
                      >
                        Proven Results
                      </h3>
                      <p
                        class="text-gray-600 dark:text-gray-400 leading-relaxed"
                      >
                        {{ profile?.projectsDelivered || "125" }}+ successful
                        projects delivered with
                        {{ profile?.clientSatisfaction || "100" }}% client
                        satisfaction rate.
                      </p>
                    </div>
                  </div>
                </UCard>

                <UCard variant="subtle" class="text-center h-full">
                  <div class="space-y-6">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                    >
                      <UIcon
                        name="i-ph-handshake"
                        class="w-8 h-8 text-purple-600"
                      />
                    </div>

                    <div class="space-y-3">
                      <h3
                        class="text-xl font-bold text-gray-900 dark:text-gray-100"
                      >
                        True Partnership
                      </h3>
                      <p
                        class="text-gray-600 dark:text-gray-400 leading-relaxed"
                      >
                        {{ profile?.availability?.responseTime || "8h" }}
                        response time guarantee with transparent communication
                        and agile collaboration.
                      </p>
                    </div>
                  </div>
                </UCard>
              </div>

              <!-- Call to Action -->
              <div class="text-center space-y-6">
                <div class="max-w-3xl mx-auto">
                  <h3
                    class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4"
                  >
                    Ready to Build Something Exceptional?
                  </h3>
                  <p
                    class="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                  >
                    From SaaS platforms to browser extensions, I help businesses
                    ship scalable solutions that drive growth.
                  </p>
                  <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton to="/about" variant="subtle" size="lg">
                      <UIcon name="i-ph-user" class="mr-2" />
                      <span>Learn More About Me</span>
                    </UButton>
                    <UButton
                      to="/contact"
                      variant="solid"
                      size="lg"
                      class="glass-button group/cta bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <UIcon name="i-ph-rocket-launch" class="mr-2" />
                      <span>Start Your Project</span>
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <TestimonialsPreview />

          <ServicesPreview />

          <!-- <CaseStudyPreview /> -->

          <!-- <NewsletterSignup /> -->

          <CallToAction />

          <!-- <RecentBlogPosts /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Enhanced Glass Button Animation */
.glass-button {
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  transition: left 0.6s ease;
  z-index: 1;
  pointer-events: none;
}

.glass-button:hover::before {
  left: 100%;
}

.glass-button:hover {
  transform: translateY(-2px) scale(1.05);
  transition: transform 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Shimmer animation that runs continuously */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.glass-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent 40%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 60%
  );
  transform: translateX(-100%);
  animation: shimmer 4s ease-in-out infinite;
  z-index: 1;
  pointer-events: none;
}

/* Ensure button content is above the effects */
.glass-button :deep(*) {
  position: relative;
  z-index: 2;
}

/* Gradient text animation */
@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

h1 {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease-in-out infinite;
}
</style>
