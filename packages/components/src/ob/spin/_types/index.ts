import type { ClassValue } from 'class-variance-authority/dist/types'
import type { ICommonProps } from '../../../index'

/**
 * ObSpin - 参数类型
 */
export interface ISpinProps extends Omit<ICommonProps, 'loading' | 'class'> {
  /**
   * 盒子样式
   */
  boxClass?: ClassValue
  /**
   * 线条样式
   */
  lineClass?: ClassValue
}
