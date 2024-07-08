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
}
