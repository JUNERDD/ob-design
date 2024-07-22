// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  modules: ['@nuxt/eslint', '@unocss/nuxt', '@nuxtjs/google-fonts'],
  compatibilityDate: '2024-07-06',
  css: ['@/assets/css/main.css'],
  eslint: {
    checker: true,
    config: {
      stylistic: true,
      standalone: false,
    },
  },
  googleFonts: {
    families: {
      'Inter': [400, 700, 900],
      'Noto Sans SC': [400, 700, 900],
    },
  },
  tailwindcss: {
    viewer: false,
  },
})
