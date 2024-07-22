import { obCva } from '../../../index'
import type { ISpinProps } from '../_types'

/**
 * ObSpin - 样式
 * @see {@link https://uiverse.io/G4b413l/soft-jellyfish-12}
 */
export default obCva<ISpinProps>('relative h-12 w-12 flex items-center justify-center', {
  variants: {
    size: {
      small: 'scale-70',
      middle: 'scale-100',
      large: 'scale-130',
    },
  },
})

/**
 * ObSpin - Line 样式
 */
export const lineStyle = obCva<ISpinProps>('absolute left-0 top-1/2 h-1 w-full animate-spin rounded-full', {
  variants: {
    variant: {
      primary: 'bg-primary',
      success: 'bg-success',
      info: 'bg-mediumGray',
      warning: 'bg-warning',
      danger: 'bg-danger',
    },
  },
})
