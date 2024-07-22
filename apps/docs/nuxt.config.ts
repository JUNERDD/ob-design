// https://nuxt.com/docs/components/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      splineWelcomeUrl: '',
      splineUnderDevelopmentUrl: '',
    },
  },
  modules: ['@nuxt/eslint', '@unocss/nuxt', '@nuxt/image', '@nuxt/content'],
  vite: {
    assetsInclude: ['**/*.splinecode'],
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
  compatibilityDate: '2024-07-12',
})
