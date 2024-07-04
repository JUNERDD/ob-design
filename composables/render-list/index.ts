import type { IRenderListItem } from './_types'
import useRenderButtonList from './button'
import useRenderLinkList from './link'
import useRenderThemeList from './theme'

/**
 * 渲染列表
 */
export function useRenderList(): IRenderListItem[] {
  return [useRenderThemeList(), useRenderButtonList(), useRenderLinkList()]
}
