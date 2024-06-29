import { obCva } from 'ob-tools'
import type { IButtonProps } from '../_types'

/**
 * ObButton - 样式
 */
export default obCva<IButtonProps>('p-(y-1 x-2) rounded font-bold hover:(opacity-80 mix-blend-darken) active:(brightness-90)', {
  variants: {
    size: {
      small: 'text-xs',
      middle: 'text-base',
      large: 'text-lg px-3',
    },
    type: {
      primary: 'bg-sky-600 c-white',
      success: 'bg-emerald-600 c-white',
      info: 'bg-gray-100 c-black',
      warning: 'bg-amber-600 c-white',
      danger: 'bg-red-500 c-white',
    },
  },
})
