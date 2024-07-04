import { obCva } from 'ob-tools'
import type { ILinkProps } from '../_types'

/**
 * ObLink - 链接样式
 */
export default obCva<ILinkProps>('underline decoration-(1.5 offset-3) bg-transparent font-bold hover:(opacity-80) active:(brightness-90)', {
  variants: {
    size: {
      small: 'text-xs',
      middle: 'text-sm',
      large: 'text-lg',
    },
    variant: {
      primary: 'c-primary',
      success: 'c-success',
      info: 'c-darkGray',
      warning: 'c-warning',
      danger: 'c-danger',
    },
  },
})
