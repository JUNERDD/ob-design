// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxtjs/google-fonts', '@obdesign/nuxt'],
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',
  experimental: {
    externalVue: true,
  },
  css: ['@/assets/css/main.css'],
  build: {
    transpile: ['@obdesign/components'],
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
