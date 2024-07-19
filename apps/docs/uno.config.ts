// uno.config.ts
import { defineConfig, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import obPreset from 'ob-design/preset'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'composables/**/*.{js,ts}',
        '../../packages/components/**/*.{js,ts}',
      ],
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    obPreset(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
