import type { DefaultProps } from 'ob-config'
import { commonDefaultProps } from 'ob-config'
import type { IThemeProps } from '../_types'

/**
 * ObTheme - 参数默认值
 */
export default <DefaultProps<IThemeProps>> {
  ...commonDefaultProps,
}
