import { obCva } from 'ob-tools'
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
export const lineStyle = 'absolute left-0 top-1/2 h-1 w-full animate-spin rounded-full bg-primary'
