// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  modules: ['@nuxt/eslint', '@unocss/nuxt'],
  compatibilityDate: '2024-07-06',
  css: ['@/assets/css/main.css'],
  eslint: {
    checker: true,
    config: {
      stylistic: true,
      standalone: false,
    },
  },
  tailwindcss: {
    viewer: false,
  },
})
