import { obCva } from '../../../_config'
import type { IButtonProps } from '../_types'

/**
 * ObButton - 样式
 */
export default obCva<IButtonProps>('p-1 rounded', {
  variants: {
    size: {
      default: 'bg-red',
      small: 'bg-green',
      large: 'bg-blue',
    },
  },
})
