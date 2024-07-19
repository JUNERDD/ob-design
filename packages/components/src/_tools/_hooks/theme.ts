import { inject } from 'vue'
import { PROVIDER_KEY } from '../../index'

/**
 * 使用主题钩子
 */
export function useTheme() {
  // 主题
  return inject(PROVIDER_KEY.THEME, {})
}
