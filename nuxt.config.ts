// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
  ],
  css: ['@unocss/reset/tailwind-compat.css'],
  eslint: {
    checker: true,
    config: {
      stylistic: true,
      standalone: false,
    },
  },
})
