import type { DefaultProps } from 'ob-tools'
import { commonDefaultProps } from 'ob-tools'
import type { IButtonProps } from '../_types'

/**
 * ObButton - 参数默认值
 */
export default <DefaultProps<IButtonProps>> {
  ...commonDefaultProps,
  type: 'button',
  title: '按钮',
  full: false,
}
