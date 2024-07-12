import type { PresetOptions } from 'unocss'
import { definePreset, presetIcons, presetUno, presetWebFonts } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import shortcuts from './shortcuts'
import theme from './theme'
import rules from './rules'

export { shortcuts, theme, rules }

export interface PresetObOptions extends PresetOptions {
  /**
   * 工具前缀
   */
  prefix?: string | string[]
}

/**
 * 主题预设
 */
const obPreset = definePreset((options?: PresetObOptions) => {
  return {
    name: '@ob-design/preset',
    theme,
    shortcuts,
    rules,
    options,
    prefix: options?.prefix,
    presets: [
      presetUno(),
      presetIcons(),
      presetWebFonts({
        fonts: {
          sans: ['Inter:400,700,900', 'Noto Sans SC'],
        },
      }),
      presetAnimations(),
    ],
  }
})

export default obPreset
