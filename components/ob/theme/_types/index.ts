import type { ClassValue } from 'class-variance-authority/types'
import type { ICommonProps } from 'ob-config'

/**
 * ObTheme - 参数类型
 */
export interface IThemeProps extends ICommonProps {
  class?: ClassValue
}
