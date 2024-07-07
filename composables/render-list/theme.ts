import type { IRenderListItem, renderOriginArray } from './_types'
import { DocsTheme } from '#components'

/**
 * 渲染主题控制器
 */
export default function useRenderThemeList(): IRenderListItem {
  const blocks: renderOriginArray = [
    ['', '', [
      { value: 'PageTheme', render: DocsTheme },
    ]],
  ]

  return {
    id: 'theme',
    title: '主题控制器',
    blocks,
  }
}
