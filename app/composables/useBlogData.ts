export const useBlogPosts = () => {
  return useAsyncData("blog-posts-all", () => {
    return queryCollection("blog").order("date", "DESC").all()
  })
}

export const useRecentBlogPosts = (count = 2) => {
  return useAsyncData(`recent-blog-posts-${count}`, () => {
    return queryCollection("blog").order("date", "DESC").limit(count).all()
  })
}

export const useFeaturedBlogPosts = (count = 2) => {
  return useAsyncData(`featured-blog-posts-${count}`, () => {
    return queryCollection("blog")
      .where("featured", "=", true)
      .order("date", "DESC")
      .limit(count)
      .all()
  })
}

export const useBlogPost = (path: string) => {
  return useAsyncData(`blog-post-${path}`, () => {
    return queryCollection("blog").path(path).first()
  })
}

export const usePaginatedBlogPosts = (page: Ref<number>, perPage = 6) => {
  return useAsyncData(
    `blog-posts-page-${page.value}`,
    () => {
      return queryCollection("blog")
        .order("date", "DESC")
        .skip((page.value - 1) * perPage)
        .limit(perPage)
        .all()
    },
    { watch: [page] },
  )
}

export const useBlogPostCount = () => {
  return useAsyncData("blog-posts-count", () => {
    return queryCollection("blog").count()
  })
}
