import type { DefaultProps } from '../../../index'
import { commonDefaultProps } from '../../../index'
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
