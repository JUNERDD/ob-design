import type { IRenderListItem, renderOriginArray } from './_types'
import { ObButton } from '#components'

/**
 * 渲染Tabs列表
 */
export default function useRenderTabsList(): IRenderListItem {
  const render = ObButton

  const blocks: renderOriginArray = [
    ['size', '尺寸', [
      { value: 'large', label: '大Tabs', render },
      { value: 'middle', label: '中Tabs', render },
      { value: 'small', label: '小Tabs', render },
    ]],
  ]

  return {
    id: 'tabs',
    title: '标签栏',
    blocks,
  }
}
