import type { PresetOptions } from 'unocss'
import { definePreset } from 'unocss'
import shortcuts from './shortcuts'
import theme from './theme'
import rules from './rules'

import * as type from './_types'

export { shortcuts, theme, rules, type }

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
    name: '@obdesign/preset',
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
