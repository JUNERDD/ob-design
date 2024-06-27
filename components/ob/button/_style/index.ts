import { obCva } from 'ob-config'
import type { IButtonProps } from '../_types'

/**
 * ObButton - 样式
 */
export default obCva<IButtonProps>('p-(y-1 x-2) rounded font-bold hover:(opacity-80 mix-blend-darken) active:(scale-95 brightness-90)', {
  variants: {
    size: {
      default: '',
      small: 'bg-green',
      large: 'bg-blue',
    },
  },
})
