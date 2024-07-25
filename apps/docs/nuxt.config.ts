// https://nuxt.com/docs/components/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      splineWelcomeUrl: '',
      splineUnderDevelopmentUrl: '',
    },
  },
  modules: ['@nuxt/eslint', '@unocss/nuxt', '@nuxt/image', '@nuxt/content', '@nuxtjs/google-fonts', '@obdesign/nuxt'],
  vite: {
    assetsInclude: ['**/*.splinecode'],
  },
  build: {
    transpile: ['@obdesign/components'],
  },
  css: ['@unocss/reset/tailwind-compat.css', '@/assets/css/main.css'],
  googleFonts: {
    families: {
      'Inter': [400, 700, 900],
      'Noto Sans SC': [400, 700, 900],
    },
  },
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
  compatibilityDate: '2024-07-12',
})
