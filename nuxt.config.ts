const fileUrlToPath = (url: string) => new URL(url, import.meta.url).pathname

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
  ],
  alias: {
    'ob-config': fileUrlToPath('./components/_config'),
    'ob-lib': fileUrlToPath('./components/_lib'),
    'ob': fileUrlToPath('./components/ob'),
  },
  css: ['@unocss/reset/tailwind-compat.css'],
  eslint: {
    checker: true,
    config: {
      stylistic: true,
      standalone: false,
    },
  },
  app: {
    head: {
      title: 'OB Design - Dev',
    },
  },
})
