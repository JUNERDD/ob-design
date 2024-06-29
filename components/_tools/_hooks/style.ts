import type { IThemeProps } from 'ob/theme/_types'
import type { DefaultProps, ICommonProps } from '../_types'
import { mergeObjects } from '../_utils'

/**
 * 获取合并的样式钩子
 */
export function useMergeStyleProps<T extends ICommonProps>(_default: DefaultProps<T>, props: T, theme: IThemeProps) {
  return computed(() => mergeObjects(_default, props, theme))
}
