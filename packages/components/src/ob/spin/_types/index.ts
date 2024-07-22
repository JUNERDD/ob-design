import type { ClassValue } from 'class-variance-authority/types'
import type { ICommonProps } from '../../../index'

/**
 * ObSpin - 参数类型
 */
export interface ISpinProps extends Omit<ICommonProps, 'loading'> {
  /**
   * 线条样式
   */
  lineClass?: ClassValue
}
