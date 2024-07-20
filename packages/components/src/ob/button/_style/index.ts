import { obCva } from '../../../index'
import type { IButtonProps } from '../_types'

/**
 * ObButton - 样式
 */
export default obCva<IButtonProps>('py-2 p-x-2.5 flex justify-center text-center items-center gap-2 rounded-normal font-bold hover:opacity-80 active:brightness-90', {
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
      ghost: ' bg-transparent hover:bg-mediumGray hover:opacity-100 c-black',
    },
    icon: {
      true: 'aspect-square',
    },
    full: {
      true: 'w-full',
    },
  },
})
