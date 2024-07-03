import { obCva } from 'ob-tools'
import type { IButtonProps } from '../_types'

/**
 * ObButton - 样式
 */
export default obCva<IButtonProps>('p-(b-2 t-2.3 x-2.5) rounded-normal font-bold hover:(opacity-80 mix-blend-darken) active:(brightness-90)', {
  variants: {
    size: {
      small: 'text-xs',
      middle: 'text-sm',
      large: 'text-lg',
    },
    type: {
      primary: 'bg-primary c-white',
      success: 'bg-success c-white',
      info: 'bg-mediumGray c-black',
      warning: 'bg-warning c-white',
      danger: 'bg-danger c-white',
    },
  },
})
