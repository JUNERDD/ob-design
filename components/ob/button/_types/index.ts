import type { ButtonHTMLAttributes } from 'vue'
import type { ICommonProps } from '../../../_config'

/**
 * ObButton - 参数
 */
export interface IButtonProps extends ICommonProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type'> {
  formType?: ButtonHTMLAttributes['type']
}
