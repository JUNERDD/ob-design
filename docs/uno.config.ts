// uno.config.ts
import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import obPreset from './components/_preset'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'components/**/*.{js,ts}',
        'composables/**/*.{js,ts}',
      ],
    },
  },
  presets: [
    obPreset(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
