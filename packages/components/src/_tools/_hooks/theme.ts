import { PROVIDER_KEY } from '../../index'
import { inject } from 'vue'

/**
 * 使用主题钩子
 */
export function useTheme() {
  // 主题
  return inject(PROVIDER_KEY.THEME, {})
}
