import type { LinkHTMLAttributes } from 'vue'
import type { ICommonProps, VariantPropsType } from 'ob-tools'

/**
 * ObLink - 链接类型
 */
export interface ILinkProps extends ICommonProps, /* @vue-ignore */ Omit<LinkHTMLAttributes, 'class'> {
  variant?: Exclude<VariantPropsType, 'ghost'>
  href?: string
}
