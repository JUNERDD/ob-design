const fileUrlToPath = (url: string) => new URL(url, import.meta.url).pathname

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      splineWelcomeUrl: '',
      splineUnderDevelopmentUrl: '',
    },
  },
  modules: ['@nuxt/eslint', '@unocss/nuxt', '@nuxt/image'],
  components: [
    { path: '~/components/ob', prefix: 'ob', extensions: ['vue'] },
    '~/custom-components',
  ],
  alias: {
    'ob-tools': fileUrlToPath('./components/_tools'),
    'ob-preset': fileUrlToPath('./components/_preset'),
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
