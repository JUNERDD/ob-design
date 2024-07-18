import type { DefaultProps } from 'ob-tools'
import type { ILoadingBoxProps } from '../_types'

/**
 * ObLoadingBox - 参数默认值
 */
export default <ILoadingBoxProps> {
  maskMode: false,
  transitionProps: {
    enterActiveClass: 'animate-fade-in animate-duration-250',
    leaveActiveClass: 'animate-fade-out animate-duration-250',
  },
} as DefaultProps<ILoadingBoxProps>
