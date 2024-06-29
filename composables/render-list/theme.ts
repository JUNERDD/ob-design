import type { IRenderListItem, renderOriginArray } from './_types'
import { PageTheme } from '#components'

/**
 * 渲染主题控制器
 */
export default function useRenderThemeList(): IRenderListItem {
  const blocks: renderOriginArray = [
    ['', '', [
      { render: PageTheme },
    ]],
  ]

  return {
    id: 'button',
    title: '主题控制器',
    blocks,
  }
}
