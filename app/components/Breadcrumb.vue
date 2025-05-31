<template>
  <nav v-if="breadcrumbs.length > 1" aria-label="Breadcrumb" class="mb-8">
    <ol class="flex items-center space-x-2 text-sm">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="crumb.path"
        class="flex items-center"
      >
        <!-- Home Icon for first item -->
        <UIcon
          v-if="index === 0"
          name="i-ph-house"
          class="w-4 h-4 text-zinc-500 dark:text-zinc-400 mr-2"
        />

        <!-- Breadcrumb Link or Text -->
        <NuxtLink
          v-if="index < breadcrumbs.length - 1"
          :to="crumb.path"
          class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span v-else class="text-zinc-900 dark:text-zinc-100 font-medium">
          {{ crumb.label }}
        </span>

        <!-- Separator -->
        <UIcon
          v-if="index < breadcrumbs.length - 1"
          name="i-ph-caret-right"
          class="w-4 h-4 text-zinc-400 dark:text-zinc-500 mx-2"
        />
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  path: string
}

const route = useRoute()

const breadcrumbs = computed((): BreadcrumbItem[] => {
  const pathSegments = route.path.split("/").filter(Boolean)
  const crumbs: BreadcrumbItem[] = [{ label: "Home", path: "/" }]

  let currentPath = ""

  for (const segment of pathSegments) {
    currentPath += `/${segment}`

    // Get label for this segment
    const label = getBreadcrumbLabel(currentPath, segment)

    crumbs.push({
      label,
      path: currentPath,
    })
  }

  return crumbs
})

function getBreadcrumbLabel(path: string, segment: string): string {
  // Custom labels for known routes
  const labels: Record<string, string> = {
    "/about": "About",
    "/projects": "Projects",
    "/blog": "Blog",
    "/services": "Services",
    "/contact": "Contact",
  }

  // Check for custom labels first
  if (labels[path]) {
    return labels[path]
  }

  // For blog posts, try to get the title from params
  if (path.startsWith("/blog/") && route.params && "slug" in route.params) {
    const slugParam = route.params.slug

    if (Array.isArray(slugParam) && slugParam.length > 0) {
      return formatTitle(slugParam.join("/"))
    } else if (typeof slugParam === "string" && slugParam) {
      return formatTitle(slugParam)
    }
  }

  // Fallback: format segment as title
  return formatTitle(segment)
}

function formatTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
</script>
