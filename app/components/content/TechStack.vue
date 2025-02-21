<script lang="ts" setup>
const icons = ref([
  { name: "i-devicon-typescript", title: "TypeScript" },
  { name: "i-devicon-javascript", title: "JavaScript" },
  { name: "i-devicon-nodejs", title: "Node.js" },
  { name: "i-devicon-nuxtjs", title: "Nuxt.js" },
  { name: "i-devicon-vuejs", title: "Vue.js" },
  { name: "i-devicon-vuetify", title: "Vuetify" },
  { name: "i-devicon-nestjs", title: "NestJS" },
  { name: "i-devicon-express-wordmark", title: "Express" },
  { name: "i-devicon-php", title: "PHP" },
  { name: "i-devicon-laravel", title: "Laravel" },
  { name: "i-devicon-livewire", title: "Livewire" },
  { name: "i-devicon-mysql", title: "MySQL" },
  { name: "i-devicon-dot-net", title: ".NET" },
  { name: "i-devicon-csharp", title: "C#" },
  { name: "i-devicon-postgresql", title: "PostgreSQL" },
  { name: "i-devicon-firebase", title: "Firebase" },
  { name: "i-devicon-supabase", title: "Supabase" },
  { name: "i-devicon-mongodb", title: "MongoDB" },
  { name: "i-devicon-redis", title: "Redis" },
  { name: "i-devicon-mysql", title: "MySQL" },
  { name: "i-devicon-microsoftsqlserver", title: "Microsoft SQL Server" },
  { name: "i-devicon-sqlite", title: "SQLite" },
  { name: "i-devicon-docker", title: "Docker" },
  {
    name: "i-devicon-amazonwebservices-wordmark",
    title: "Amazon Web Services",
  },
  { name: "i-devicon-googlecloud", title: "Google Cloud" },
  { name: "i-devicon-cloudflare", title: "Cloudflare" },
  { name: "i-devicon-heroku", title: "Heroku" },
  { name: "i-devicon-nginx", title: "Nginx" },
  { name: "i-devicon-git", title: "Git" },
  { name: "i-devicon-github", title: "GitHub" },
  { name: "i-devicon-githubactions", title: "GitHub Actions" },
  { name: "i-devicon-vitest", title: "Vitest" },
  { name: "i-devicon-eslint", title: "ESLint" },
  { name: "i-devicon-puppeteer", title: "Puppeteer" },
  { name: "i-devicon-playwright", title: "Playwright" },
  { name: "i-devicon-chrome", title: "Chrome" },
  { name: "i-devicon-firefox", title: "Firefox" },
  { name: "i-devicon-tailwindcss", title: "Tailwind CSS" },
  { name: "i-devicon-css3", title: "CSS3" },
  { name: "i-devicon-html5", title: "HTML5" },
  { name: "i-devicon-opensuse", title: "OpenSUSE" },
  { name: "i-devicon-openapi", title: "OpenAPI" },
  { name: "i-devicon-portainer", title: "Portainer" },
  { name: "i-devicon-vitejs", title: "ViteJS" },
  { name: "i-devicon-json", title: "JSON" },
  { name: "i-devicon-adonisjs", title: "AdonisJS" },
  { name: "i-devicon-electron", title: "Electron" },
  { name: "i-devicon-vscode", title: "VSCode" },
  { name: "i-devicon-bash", title: "Bash" },
  { name: "i-devicon-fastify", title: "Fastify" },
  { name: "i-devicon-figma", title: "Figma" },
  { name: "i-devicon-filezilla", title: "FileZilla" },
  { name: "i-devicon-lodash", title: "Lodash" },
  { name: "i-devicon-pnpm", title: "pnpm" },
  { name: "i-devicon-plotly", title: "Plotly" },
  { name: "i-devicon-prisma", title: "Prisma" },
  { name: "i-devicon-sass", title: "Sass" },
  { name: "i-devicon-storybook", title: "Storybook" },
  { name: "i-devicon-netlify", title: "Netlify" },
  { name: "i-devicon-vercel", title: "Vercel" },
  { name: "i-devicon-azuresqldatabase", title: "Azure SQL Database" },
])
</script>

<template>
  <div class="my-6 md:my-12">
    <NuxtMarquee>
      <Icon
        v-for="icon in icons"
        :key="icon.name"
        :name="icon.name"
        :title="icon.title"
        size="4em"
      ></Icon>
    </NuxtMarquee>
  </div>
</template>

<style lang="scss">
.vfm-parent {
  @apply flex gap-2;
}
</style>
