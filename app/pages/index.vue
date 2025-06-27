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
        <div class="flex flex-col items-center mb-8 space-y-6">
          <div class="relative">
            <!-- Larger, cleaner avatar without ring -->
            <div class="relative w-32 h-32 md:w-40 md:h-40">
              <UAvatar
                :src="profile.avatar"
                :alt="profile.name"
                class="w-full h-full shadow-2xl border-4 border-white dark:border-gray-800"
              />
              <!-- Dynamic status dot - perfectly positioned -->
              <div
                v-if="profile.availability"
                :class="[
                  'absolute bottom-2 right-2 w-6 h-6 rounded-full border-3 border-white dark:border-gray-800 shadow-lg',
                  profile.availability.status === 'available'
                    ? 'bg-green-500'
                    : 'bg-orange-500',
                ]"
              >
                <div
                  :class="[
                    'w-full h-full rounded-full animate-pulse',
                    profile.availability.status === 'available'
                      ? 'bg-green-500'
                      : 'bg-orange-500',
                  ]"
                ></div>
              </div>
            </div>
          </div>

          <!-- Elegant Status Badge -->
          <div v-if="profile.availability" class="relative">
            <div v-if="profile.availability" class="relative text-center">
              <UBadge
                :label="
                  profile.availability.statusText ||
                  'Available for new projects'
                "
                :color="
                  profile.availability.status === 'available'
                    ? 'green'
                    : 'orange'
                "
                variant="subtle"
                size="lg"
                class="font-semibold"
              />
              <div
                v-if="profile.availability.status === 'available'"
                class="mt-2 text-xs text-gray-500 dark:text-gray-400"
              >
                <span v-if="profile.availability.startDate"
                  >{{ profile.availability.startDateContext || "Starting" }}
                  {{ profile.availability.startDate }}</span
                >
                <span v-if="profile.availability.slotsAvailable"
                  >, {{ profile.availability.slotsAvailable }} slots
                  remaining</span
                >
                <span v-if="profile.availability.responseTime"
                  >, {{ profile.availability.responseTime }} response time</span
                >
              </div>
            </div>
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
              10+
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
          <div class="text-center group">
            <div
              class="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              {{ profile?.projectsDelivered || "125" }}
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
            ></div>
          </UButton>

          <UButton
            href="https://cal.com/mubaidr"
            external
            size="xl"
            variant="outline"
            class="border-2 hover:border-primary-400 transition-all duration-300 hover:shadow-lg"
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
            size="sm"
            class="hover:scale-110 transition-transform duration-200"
          >
            <UIcon :name="social.icon" class="w-5 h-5" />
            {{ social.name }}
          </UButton>
        </div>

        <!-- Trust Indicators -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-gray-500 dark:text-gray-400"
        >
          <div
            class="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <UIcon name="i-ph-shield-check" class="text-green-500" />
            <span>{{
              profile?.availability?.paymentTerms || "Minimal upfront payment"
            }}</span>
          </div>
          <div
            class="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <UIcon name="i-ph-clock" class="text-blue-500" />
            <span>Free project consultation</span>
          </div>
          <div
            class="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <UIcon name="i-ph-handshake" class="text-purple-500" />
            <span>100% satisfaction guarantee</span>
          </div>
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
              ></div>
              <div
                class="absolute bottom-20 right-10 w-24 h-24 bg-blue-500 rounded-full blur-3xl"
              ></div>
            </div>

            <div class="relative space-y-12">
              <!-- Header with Gradient -->
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

              <!-- Enhanced Cards Grid -->
              <div class="grid gap-8 lg:grid-cols-3">
                <!-- Work Approach Card -->
                <div class="group relative">
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-500 opacity-0 group-hover:opacity-100"
                  ></div>
                  <UCard
                    variant="soft"
                    class="relative h-full border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-500 transform group-hover:-translate-y-1"
                  >
                    <div class="space-y-6">
                      <!-- Icon Header -->
                      <div class="flex items-center gap-4">
                        <div
                          class="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        >
                          <UIcon
                            name="i-ph-strategy"
                            class="w-6 h-6 text-primary"
                          />
                        </div>
                        <h3
                          class="text-xl font-bold text-gray-900 dark:text-gray-100"
                        >
                          My Approach
                        </h3>
                      </div>

                      <!-- Content -->
                      <div class="space-y-4">
                        <p
                          class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                        >
                          Proven methodologies that deliver exceptional results
                          for every project.
                        </p>

                        <ul class="space-y-3">
                          <li
                            v-for="(approach, index) in (
                              profile.workApproach || []
                            ).slice(0, 3)"
                            :key="index"
                            class="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <div
                              class="w-5 h-5 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                            >
                              <UIcon
                                name="i-ph-check"
                                class="w-3 h-3 text-green-600"
                              />
                            </div>
                            <span class="text-sm leading-relaxed">{{
                              approach
                            }}</span>
                          </li>
                        </ul>
                      </div>

                      <!-- CTA -->
                      <div class="pt-2">
                        <UButton
                          to="/about"
                          variant="ghost"
                          size="sm"
                          class="w-full justify-center group/btn hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 border border-transparent hover:border-primary-200 dark:hover:border-primary-700"
                        >
                          <span
                            class="group-hover/btn:translate-x-1 transition-transform duration-300"
                            >Learn More</span
                          >
                          <UIcon
                            name="i-ph-arrow-right"
                            class="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                          />
                        </UButton>
                      </div>
                    </div>
                  </UCard>
                </div>

                <!-- Current Focus Card -->
                <div class="group relative">
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-blue/5 to-purple/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-500 opacity-0 group-hover:opacity-100"
                  ></div>
                  <UCard
                    variant="soft"
                    class="relative h-full border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:border-blue/20 dark:hover:border-blue/30 transition-all duration-500 transform group-hover:-translate-y-1"
                  >
                    <div class="space-y-6">
                      <!-- Icon Header -->
                      <div class="flex items-center gap-4">
                        <div
                          class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        >
                          <UIcon
                            name="i-ph-target"
                            class="w-6 h-6 text-blue-600"
                          />
                        </div>
                        <h3
                          class="text-xl font-bold text-gray-900 dark:text-gray-100"
                        >
                          Current Focus
                        </h3>
                      </div>

                      <!-- Content -->
                      <div class="space-y-4">
                        <p
                          class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                        >
                          Staying ahead with cutting-edge technologies and
                          industry best practices.
                        </p>

                        <ul class="space-y-3">
                          <li
                            v-for="(focus, index) in (
                              profile.currentFocus || []
                            ).slice(0, 3)"
                            :key="index"
                            class="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <div
                              class="w-5 h-5 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                            >
                              <UIcon
                                name="i-ph-check"
                                class="w-3 h-3 text-blue-600"
                              />
                            </div>
                            <span class="text-sm leading-relaxed">{{
                              focus
                            }}</span>
                          </li>
                        </ul>
                      </div>

                      <!-- CTA -->
                      <div class="pt-2">
                        <UButton
                          to="/about"
                          variant="ghost"
                          size="sm"
                          class="w-full justify-center group/btn hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-700"
                        >
                          <span
                            class="group-hover/btn:translate-x-1 transition-transform duration-300"
                            >View Journey</span
                          >
                          <UIcon
                            name="i-ph-arrow-right"
                            class="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                          />
                        </UButton>
                      </div>
                    </div>
                  </UCard>
                </div>

                <!-- Why Choose Me Card -->
                <div class="group relative">
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-purple/5 to-primary/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-500 opacity-0 group-hover:opacity-100"
                  ></div>
                  <UCard
                    variant="soft"
                    class="relative h-full border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:border-purple/20 dark:hover:border-purple/30 transition-all duration-500 transform group-hover:-translate-y-1"
                  >
                    <div class="space-y-6">
                      <!-- Icon Header -->
                      <div class="flex items-center gap-4">
                        <div
                          class="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        >
                          <UIcon
                            name="i-ph-star"
                            class="w-6 h-6 text-purple-600"
                          />
                        </div>
                        <h3
                          class="text-xl font-bold text-gray-900 dark:text-gray-100"
                        >
                          Why Choose Me
                        </h3>
                      </div>

                      <!-- Content -->
                      <div class="space-y-4">
                        <p
                          class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                        >
                          Proven track record of delivering exceptional results
                          for clients worldwide.
                        </p>

                        <ul class="space-y-3">
                          <li
                            class="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <div
                              class="w-5 h-5 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                            >
                              <UIcon
                                name="i-ph-check"
                                class="w-3 h-3 text-purple-600"
                              />
                            </div>
                            <span class="text-sm leading-relaxed"
                              >10+ years of proven expertise</span
                            >
                          </li>
                          <li
                            class="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <div
                              class="w-5 h-5 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                            >
                              <UIcon
                                name="i-ph-check"
                                class="w-3 h-3 text-purple-600"
                              />
                            </div>
                            <span class="text-sm leading-relaxed"
                              >100% client satisfaction rate</span
                            >
                          </li>
                          <li
                            class="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <div
                              class="w-5 h-5 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                            >
                              <UIcon
                                name="i-ph-check"
                                class="w-3 h-3 text-purple-600"
                              />
                            </div>
                            <span class="text-sm leading-relaxed"
                              >{{
                                profile?.availability?.responseTime || "24h"
                              }}
                              response guarantee</span
                            >
                          </li>
                        </ul>
                      </div>

                      <!-- CTA -->
                      <div class="pt-2">
                        <UButton
                          to="/contact"
                          variant="solid"
                          size="sm"
                          class="w-full justify-center group/btn bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                          <UIcon
                            name="i-ph-chat-circle"
                            class="mr-2 group-hover/btn:scale-110 transition-transform duration-300"
                          />
                          <span
                            class="group-hover/btn:translate-x-0.5 transition-transform duration-300"
                            >Start Project</span
                          >
                        </UButton>
                      </div>
                    </div>
                  </UCard>
                </div>
              </div>

              <!-- Enhanced CTA Section -->
              <div class="text-center space-y-6">
                <div
                  class="bg-gradient-to-r from-primary/5 via-blue/5 to-purple/5 rounded-2xl p-8 border border-primary/10"
                >
                  <h3
                    class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4"
                  >
                    Ready to Transform Your Ideas Into Reality?
                  </h3>
                  <p
                    class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto"
                  >
                    Let's discuss your project and explore how my expertise can
                    help you achieve your goals.
                  </p>
                  <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <UButton
                      to="/about"
                      variant="outline"
                      size="lg"
                      class="group/cta border-2 border-gray-300 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <UIcon
                        name="i-ph-info"
                        class="mr-2 group-hover/cta:scale-110 transition-transform duration-300"
                      />
                      <span
                        class="group-hover/cta:translate-x-0.5 transition-transform duration-300"
                        >View Full Profile</span
                      >
                    </UButton>
                    <UButton
                      to="/contact"
                      variant="solid"
                      size="lg"
                      class="glass-button group/cta bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <UIcon
                        name="i-ph-rocket-launch"
                        class="mr-2 group-hover/cta:scale-110 group-hover/cta:rotate-12 transition-transform duration-300"
                      />
                      <span
                        class="group-hover/cta:translate-x-0.5 transition-transform duration-300"
                        >Start Your Project</span
                      >
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <TestimonialsPreview />

          <ServicesPreview />

          <!-- <CaseStudyPreview /> -->

          <NewsletterSignup />

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
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
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
