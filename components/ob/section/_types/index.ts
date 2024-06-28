import type { HTMLAttributes } from 'vue'
import type { ICommonProps } from 'ob-config'

/**
 * ObSection - 参数类型
 */
export interface ISectionProps extends ICommonProps, /* @vue-ignore */ HTMLAttributes {
  title?: string
}

/**
 * ObSectionBlock - 参数类型
 */
export interface ISectionBlockProps extends ICommonProps, /* @vue-ignore */ HTMLAttributes {
  title?: string
}