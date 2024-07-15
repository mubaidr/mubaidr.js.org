<script setup>
const { $formatDate } = useNuxtApp()
const { path } = useRoute()
const cleanPath = path.replace(/\/+$/, '')
const { data, error } = await useAsyncData(`content-${cleanPath}`, async () => {
  // Remove a trailing slash in case the browser adds it, it might break the routing
  // fetch document where the document path matches with the cuurent route
  let article = queryContent('/blog').where({ _path: cleanPath }).findOne()
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent('/blog')
    .sort({ date: -1 })
    .only(['_path', 'headline', 'excerpt'])
    .findSurround(cleanPath, { before: 1, after: 1 })
  return {
    article: await article,
    surround: await surround,
  }
})

// Get the authors
const { data: authorData } = await useAsyncData('home', () =>
  queryContent('/authors').findOne()
)

// Set the meta
const baseUrl = 'https://mubaidr.js.org/'
const canonicalPath = baseUrl + (path + '/').replace(/\/+$/, '/')
const image =
  baseUrl + (data.value?.article?.socialImage?.src || '/sample.webp')

// JSON+LD
const jsonScripts = [
  {
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://mubaidr.js.org/',
      },
      url: canonicalPath,
      image: image,
      headline: data.value?.article?.headline,
      abstract: data.value?.article?.excerpt,
      datePublished: data.value?.article?.date,
      dateModified:
        data.value?.article?.dateUpdated || data.value?.article?.date,
      author: authorData.value[data.value?.article?.author],
      publisher: authorData.value['mubaidr'],
    }),
  },
]
useHead({
  title: data.value?.article?.title,
  meta: [
    { name: 'author', content: data.value?.article?.author },
    { name: 'description', content: data.value?.article?.description },
    {
      property: 'article:published_time',
      content: data.value?.article?.date.split('T')[0],
    },
    // OG
    {
      hid: 'og:title',
      property: 'og:title',
      content: data.value?.article?.headline,
    },
    { hid: 'og:url', property: 'og:url', content: canonicalPath },
    {
      hid: 'og:description',
      property: 'og:description',
      content: data.value?.article?.description,
    },
    { hid: 'og:image', name: 'image', property: 'og:image', content: image },
    { hid: 'og:type', property: 'og:type', content: 'Article' },
    {
      hid: 'og:image:type',
      property: 'og:image:type',
      content: `image/${data.value?.article?.socialImage?.mime}`,
    },
    {
      hid: 'og:image:width',
      property: 'og:image:width',
      content: data.value?.article?.socialImage?.width || 190,
    },
    {
      hid: 'og:image:height',
      property: 'og:image:height',
      content: data.value?.article?.socialImage?.height || 190,
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: data.value?.article?.socialImage?.alt,
    },
    // Twitter
    { hid: 'twitter:card', name: 'twitter:card', content: 'Summary' },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: data.value?.article?.headline,
    },
    { hid: 'twitter:url', name: 'twitter:url', content: canonicalPath },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: data.value?.article?.description,
    },
    { hid: 'twitter:image', name: 'twitter:image', content: image },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: data.value?.article?.socialImage?.alt,
    },
  ],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: canonicalPath,
    },
  ],
  script: jsonScripts,
})
</script>

<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <BlogSection
          id="blog-title"
          type="header"
        >
          <div class="flex justify-between">
            <!-- Breadcrumbs -->
            <ol
              itemscope
              itemtype="https://schema.org/BreadcrumbList"
              class="flex gap-1"
            >
              <li
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem"
              >
                <a
                  itemprop="item"
                  href="/"
                >
                  <span itemprop="name">Home</span>
                </a>
                <meta
                  itemprop="position"
                  content="1"
                />
              </li>
              <li class="separator">/</li>
              <li
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem"
              >
                <a
                  itemscope
                  itemtype="https://schema.org/WebPage"
                  itemprop="item"
                  itemid="/blog/"
                  href="/blog/"
                >
                  <span itemprop="name">Blog</span>
                </a>
                <meta
                  itemprop="position"
                  content="2"
                />
              </li>
              <li class="separator">/</li>
              <li
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem"
              >
                <span itemprop="name">{{ doc.headline }}</span>
                <meta
                  itemprop="position"
                  content="3"
                />
              </li>
            </ol>
            <!-- Publish date -->
            <span>
              {{ $formatDate(doc.date) }}
            </span>
          </div>

          <!-- Headline -->
          <h1 class="text-3xl font-extrabold mt-6">
            {{ doc.headline }}
          </h1>
          <p>
            {{ doc.excerpt }}
          </p>

          <div class="flex justify-between mb-6">
            <!-- Author -->
            <div class="flex flex-row items-center justify-center">
              <span class="text-lg leading-lg font-light">
                By
                <a
                  class="hover:underline"
                  :href="doc.authorUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ doc.author }}
                </a>
              </span>
            </div>
            <!-- Social Share -->
            <div class="mt-6 md:mt-0 flex">
              Share now:
              <NavShareIcons
                :headline="doc.headline"
                :excerpt="doc.excerpt"
                :path="doc._path + '/'"
              />
            </div>
          </div>
        </BlogSection>

        <!-- Content -->
        <BlogSection
          id="main"
          class="grid grid-cols-10 gap-8 lg:gap-12"
        >
          <div class="prose col-span-full md:col-span-7">
            <!-- Update date -->
            <span
              v-show="doc.dateUpdated"
              class="italic text-xs font-light"
            >
              (Updated: {{ $formatDate(doc.dateUpdated) }})
            </span>
            <!-- Blog content -->
            <ContentRenderer
              :value="doc"
              class="prose dark:prose-invert"
            />
          </div>
          <aside class="col-span-full md:col-span-3 h-fit">
            <!-- Mobile Table of Content -->
            <div class="!hidden md:!flex mb-4">
              <BlogTableOfContents
                :links="doc.body?.toc?.links"
                class="blog-post-text"
              />
            </div>
            <!-- Related articles -->
            <div
              v-if="data?.surround?.filter((elem) => elem !== null)?.length > 0"
            >
              <BlogRelatedArticles :surround="data?.surround" />
            </div>
          </aside>
        </BlogSection>

        <!-- Scroll to top -->
        <NavScrollTopIcon />
      </template>
      <!-- Error in case not found -->
      <template #not-found>
        <SectionsError />
      </template>
    </ContentDoc>
  </main>
</template>
