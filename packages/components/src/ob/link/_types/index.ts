import type { LinkHTMLAttributes } from 'vue'
import type { ICommonProps, VariantPropsType } from '../../../index'

/**
 * ObLink - 链接类型
 */
export interface ILinkProps extends ICommonProps, /* @vue-ignore */ Omit<LinkHTMLAttributes, 'class'> {
  /**
   * 链接变体
   */
  variant?: Exclude<VariantPropsType, 'ghost'>
  /**
   * 链接路径
   */
  href?: string
}
