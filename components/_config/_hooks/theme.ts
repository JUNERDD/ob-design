import type { IThemeProps } from 'ob/theme/_types'
import { PROVIDER_KEY } from 'ob-config'

/**
 * 使用主题钩子
 */
export function useTheme() {
  // 主题
  return inject<IThemeProps>(PROVIDER_KEY.THEME, {})
}
