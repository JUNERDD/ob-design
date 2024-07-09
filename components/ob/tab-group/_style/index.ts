import { obCva } from 'ob-tools'
import type { ITabGroupProps } from '../_types'

/**
 * ObTabGroup - 样式
 */
export default obCva<ITabGroupProps>('relative flex gap-2 rounded-large bg-lightGray p-1.5 font-bold before:(absolute invisible left-0 rounded-xl content-empty transition-none)', {
  variants: {
    size: {
      small: 'text-xs',
      middle: 'text-sm',
      large: 'text-lg',
    },
    variant: {
      primary: 'before:(bg-primary)',
      success: 'before:(bg-success)',
      info: 'bg-transparent before:(bg-mediumGray)',
      warning: 'before:(bg-warning)',
      danger: 'before:(bg-danger)',
    },
  },
})

/**
 * ObTabGroup - Label 样式
 */
export const labelStyle = obCva<ITabGroupProps>('z-1 min-w-15 text-center rounded-normal bg-transparent p-(x-5 b-2 t-2.3) c-black transition-all', {
  variants: {
    variant: {
      primary: 'data-[active=true]:(bg-primary c-white)',
      success: 'data-[active=true]:(bg-success c-white)',
      info: 'data-[active=true]:(bg-mediumGray c-black)',
      warning: 'data-[active=true]:(bg-warning c-white)',
      danger: 'data-[active=true]:(bg-danger c-white)',
    },
  },
})
