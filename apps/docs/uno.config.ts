// uno.config.ts
import { defineConfig, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import obPreset from 'obdesign/preset'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        /.*\/ob\/.*\.ts$/,
        // include js/ts files
        'composables/**/*.{js,ts}',
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
