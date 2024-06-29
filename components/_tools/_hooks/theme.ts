import { PROVIDER_KEY } from 'ob-tools'

/**
 * 使用主题钩子
 */
export function useTheme() {
  // 主题
  return inject(PROVIDER_KEY.THEME, {})
}
