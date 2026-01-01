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
