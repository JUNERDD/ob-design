import type { PresetOptions } from 'unocss'
import { definePreset } from 'unocss'
import shortcuts from './shortcuts'
import theme from './theme'
import rules from './rules'

export * from './_types'

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
      // presetUno(),
      // presetIcons(),
      // presetWebFonts({
      //   fonts: {
      //     sans: ['Inter:400,700,900', 'Noto Sans SC'],
      //   },
      // }),
    ],
  }
})

export default obPreset
