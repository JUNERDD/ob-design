import { obCva } from 'ob-tools'
import type { IButtonProps } from '../_types'

/**
 * ObButton - 样式
 */
export default obCva<IButtonProps>('p-(b-2 t-2.3 x-2.5) flex items-center gap-2 rounded-normal font-bold hover:(opacity-80) active:(brightness-90)', {
  variants: {
    size: {
      small: 'text-xs',
      middle: 'text-sm',
      large: 'text-lg px-3',
    },
    variant: {
      primary: 'bg-primary c-white',
      success: 'bg-success c-white',
      info: 'bg-mediumGray c-black',
      warning: 'bg-warning c-white',
      danger: 'bg-danger c-white',
      ghost: ' bg-transparent hover:(bg-mediumGray opacity-100) c-black',
    },
    icon: {
      true: 'aspect-square',
    },
  },
})
