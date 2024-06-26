import type { ButtonHTMLAttributes } from 'vue'
import type { ICommonProps } from '../../_types'

/**
 * Button props - 按钮
 */
export interface IButtonProps extends ICommonProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type'> {
  formType?: ButtonHTMLAttributes['type']
}
