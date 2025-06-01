<script lang="ts" setup>
const { count, title } = defineProps({
  count: {
    type: Number,
    default: 2,
  },
  title: {
    type: String,
    default: "Featured Blog Posts",
    required: false,
  },
})

// Fetch recent blog posts - limit to 2 most recent
const { data: featuredPosts } = await useAsyncData(
  "featured-posts",
  async () => {
    return queryCollection("blog")
      .where("featured", "=", true)
      .order("date", "DESC")
      .limit(count)
      .all()
  },
)
</script>

<template>
  <div v-if="featuredPosts && featuredPosts.length > 0">
    <!-- Featured Blog Posts -->
    <section class="space-y-8">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ title }}
        </h2>
        <!-- <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Handpicked articles that highlight key insights, tutorials, and best
          practices in web development and technology.
        </p> -->
      </div>

      <!-- Show blog posts if available, otherwise show placeholder -->
      <div
        v-if="featuredPosts && featuredPosts.length > 0"
        class="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
      >
        <UCard
          v-for="(post, index) in featuredPosts"
          :key="post.path || `post-${index}`"
          class="group cursor-pointer transition-all duration-300 hover:scale-[1.02] h-full"
          variant="soft"
          @click="navigateTo(post.path || '/blog')"
        >
          <div class="space-y-4">
            <!-- Blog post image placeholder -->
            <div
              class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center"
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
                  class="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </section>
  </div>
</template>
