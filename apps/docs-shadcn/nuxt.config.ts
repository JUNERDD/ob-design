// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  modules: ['@nuxt/eslint'],
  compatibilityDate: '2024-07-06',
  eslint: {
    checker: true,
    config: {
      stylistic: true,
      standalone: false,
    },
  },
})
