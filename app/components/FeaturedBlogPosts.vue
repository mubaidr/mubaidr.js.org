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
    <div class="space-y-6">
      <!-- Featured Blog Posts -->
      <div class="text-center">
        <h2 class="mb-4">
          {{ title }}
        </h2>
        <p class="max-w-3xl mx-auto">
          Handpicked articles that highlight key insights, tutorials, and best
          practices in web development and technology.
        </p>
      </div>

      <!-- Show blog posts if available, otherwise show placeholder -->
      <div
        v-if="featuredPosts && featuredPosts.length > 0"
        class="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
      >
        <UCard
          v-for="(post, index) in featuredPosts"
          :key="post.path || `post-${index}`"
          class="cursor-pointer h-full"
          @click="navigateTo(post.path || '/blog')"
        >
          <div class="space-y-4">
            <!-- Blog post image placeholder -->
            <!-- <div class="flex items-center justify-center">
            <UIcon name="i-ph-article" />
          </div> -->

            <div class="space-y-3">
              <h3 class="text-base font-semibold">
                {{ post.title || "Blog Post Title" }}
              </h3>
              <p class="text-neutral-600 dark:text-neutral-300">
                {{
                  post.description ||
                  "Blog post description that provides a brief overview of the content and main topics covered in the article."
                }}
              </p>
              <div
                class="flex items-center justify-between text-[10px] text-neutral-500 dark:text-neutral-400"
              >
                <span>
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
                <div class="flex items-center gap-1">
                  <span>Read More</span>
                  <UIcon name="i-ph-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
