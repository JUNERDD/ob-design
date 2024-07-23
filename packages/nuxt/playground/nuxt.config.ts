export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2024-07-23',
  css: ['@unocss/reset/tailwind-compat.css'],
})
