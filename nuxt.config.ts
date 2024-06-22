// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  dir: {
    pages: 'docs',
  },
  modules: [
    '@nuxt/eslint', '@unocss/nuxt',
  ],
  css: ['@unocss/reset/tailwind-compat.css'],
  eslint: {
    checker: true,
    config: {
      stylistic: true,
      standalone: false
    },
  },
})
