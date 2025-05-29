export interface BlogPost {
  _path: string
  title: string
  description: string
  headline?: string
  abstract?: string
  date: string
  dateUpdated?: string
  author: string
  authorUrl?: string
  socialImage?: {
    src: string
    mime: string
    alt: string
    width: number
    height: number
  }
}

export interface BlogListResponse {
  posts: BlogPost[]
  total: number
  page: number
  totalPages: number
}
