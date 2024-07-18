import type { DefaultProps } from 'ob-tools'
import { commonDefaultProps } from 'ob-tools'
import type { IThemeProps } from '../_types'

/**
 * ObTheme - 参数默认值
 */
export default <DefaultProps<IThemeProps>> {
  ...commonDefaultProps,
}
