import type { ButtonHTMLAttributes } from 'vue'
import type { ICommonProps } from 'ob-tools'

/**
 * ObButton - 参数类型
 */
export interface IButtonProps extends ICommonProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'class'> {
  /**
   * 元素按钮表单类型
   */
  type?: ButtonHTMLAttributes['type']
  /**
   * 是否是图标按钮
   */
  icon?: boolean
  /**
   * 标题
   */
  title?: string
  /**
   * 是否为撑满宽度
   * - `true` 撑满宽度
   * - `false` 不撑满宽度
   */
  full?: boolean
}
