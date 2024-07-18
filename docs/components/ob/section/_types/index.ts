import type { HTMLAttributes } from 'vue'
import type { ICommonProps } from 'ob-tools'

/**
 * ObSection - 参数类型
 */
export interface ISectionProps extends ICommonProps, /* @vue-ignore */ Omit<HTMLAttributes, 'class'> {
  title?: string
}

/**
 * ObSectionBlock - 参数类型
 */
export interface ISectionBlockProps extends ICommonProps, /* @vue-ignore */ Omit<HTMLAttributes, 'class'> {
  title?: string
}
