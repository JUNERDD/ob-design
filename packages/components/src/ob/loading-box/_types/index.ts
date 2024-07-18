import type { ClassValue } from 'class-variance-authority/types'
import type { ISpinProps } from '../../../index'
import type { TransitionProps } from 'vue'

/**
 * ObLoadingBox - 参数类型
 */
export interface ILoadingBoxProps {
  /**
   * 是否是蒙版模式
   */
  maskMode?: boolean
  /**
   * 自定义 Spin 参数
   */
  spinProps?: ISpinProps
  /**
   * 自定义 transition 参数
   */
  transitionProps?: TransitionProps
  /**
   * 自定义Spin样式
   */
  spinClass?: ClassValue
  /**
   * 自定义遮罩盒子样式
   */
  maskBoxClass?: ClassValue
  /**
   * 自定义遮罩样式
   */
  maskClass?: ClassValue
}

/**
 * ObLoadingBox - 插槽类型
 */
export interface ILoadingBoxSlots {
  default: () => any
}
