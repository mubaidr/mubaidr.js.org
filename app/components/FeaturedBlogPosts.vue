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
        <h2 class="mb-4">
          {{ title }}
        </h2>
        <!-- <p class="max-w-3xl mx-auto">
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
          class="cursor-pointer h-full"
          @click="navigateTo(post.path || '/blog')"
        >
          <div class="space-y-4">
            <!-- Blog post image placeholder -->
            <div
              class="flex items-center justify-center"
            >
              <UIcon
                name="i-ph-article"
                class="w-8 h-8"
              />
            </div>

            <div class="space-y-3">
              <h3
                
              >
                {{ post.title || "Blog Post Title" }}
              </h3>
              <p >
                {{
                  post.description ||
                  "Blog post description that provides a brief overview of the content and main topics covered in the article."
                }}
              </p>
              <div class="flex items-center justify-between">
                <span >
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
                  class="w-4 h-4"
                />
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </section>
  </div>
</template>
