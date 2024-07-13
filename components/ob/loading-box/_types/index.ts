import type { ISpinProps } from 'ob/spin/_types'
import type { TransitionProps } from 'vue'

/**
 * ObLoadingBox - 参数类型
 */
export interface ILoadingBoxProps {
  /**
   * 是否是绝对定位模式
   */
  absolute?: boolean
  /**
   * 自定义 Spin 参数
   */
  spinProps?: ISpinProps
  /**
   * 自定义 transition 参数
   */
  transitionProps?: TransitionProps
}
