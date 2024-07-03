import type { PresetOptions } from 'unocss'
import { definePreset } from 'unocss'
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
    name: 'ob-design/preset',
    theme,
    shortcuts,
    rules,
    options,
    prefix: options?.prefix,
  }
})

export default obPreset
