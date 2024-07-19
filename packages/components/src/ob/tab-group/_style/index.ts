import { obCva } from '../../../index'
import type { ITabGroupProps } from '../_types'

/**
 * ObTabGroup - 样式
 */
export default obCva<ITabGroupProps>('relative flex gap-2 rounded-large bg-lightGray p-1.5 font-bold before:absolute before:invisible before:left-0 before:rounded-xl before:content-empty before:transition-all', {
  variants: {
    size: {
      small: 'text-xs',
      middle: 'text-sm',
      large: 'text-lg',
    },
    variant: {
      primary: 'before:bg-primary',
      success: 'before:bg-success',
      info: 'bg-transparent before:bg-mediumGray',
      warning: 'before:bg-warning',
      danger: 'before:bg-danger',
    },
  },
})

/**
 * ObTabGroup - Label 样式
 */
export const labelStyle = obCva<ITabGroupProps>('z-1 min-w-15 text-center rounded-normal bg-transparent p-x-5 p-b-2 p-t-2.3 c-black transition-all', {
  variants: {
    variant: {
      primary: 'data-[active=true]:bg-primary data-[active=true]:c-white',
      success: 'data-[active=true]:bg-success data-[active=true]:c-white',
      info: 'data-[active=true]:bg-mediumGray data-[active=true]:c-black',
      warning: 'data-[active=true]:bg-warning data-[active=true]:c-white',
      danger: 'data-[active=true]:bg-danger data-[active=true]:c-white',
    },
  },
})
