import type { InjectionKey } from 'vue'
import type { IThemeProps } from 'ob/theme/_types'

/**
 * Provider - Key提供者
 */
export const PROVIDER_KEY = {
  THEME: Symbol('theme') as InjectionKey<IThemeProps>,
}
