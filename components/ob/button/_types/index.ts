import type { ButtonHTMLAttributes } from 'vue'
import type { ICommonProps } from 'ob-tools'

/**
 * ObButton - 参数类型
 */
export interface IButtonProps extends ICommonProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type' | 'class'> {
  formType?: ButtonHTMLAttributes['type']
}
