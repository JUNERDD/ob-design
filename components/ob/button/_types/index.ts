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
}
