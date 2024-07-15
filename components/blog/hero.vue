<template>
  <Section id="blog">
    <div>
      <ol
        itemscope
        itemtype="https://schema.org/BreadcrumbList"
        class="mb-8 flex gap-1"
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
        <span>/</span>
        <li
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <span itemprop="name">Blog</span>
          <meta
            itemprop="position"
            content="2"
          />
        </li>
      </ol>
    </div>

    <h1 class="text-3xl font-extrabold mt-6">What You'll Find Here</h1>

    <p>
      On this blog, I'll be sharing my journey and insights on various tech
      topics including web development, database management, DevOps, and more.
    </p>

    <br />

    <p>
      I'll also be sharing my thoughts on the latest tech trends, tools, and
      frameworks. I hope you find my content helpful and insightful.
    </p>

    <h2 class="text-2xl font-semibold mt-6">Join Me on This Journey</h2>
    <p>
      Explore my latest projects on my
      <NuxtLink to="https://github.com/">GitHub Profile</NuxtLink>
      . Let's code, learn, and grow together!
    </p>
  </Section>
</template>
