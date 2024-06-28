import type { IRenderListItem } from './_types'
import useRenderButtonList from './button'

/**
 * 渲染列表
 */
export function useRenderList(): IRenderListItem[] {
  return [useRenderButtonList()]
}
