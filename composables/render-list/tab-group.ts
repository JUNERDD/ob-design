import type { IRenderListItem, renderOriginArray } from './_types'
import { PageTabGroup } from '#components'

/**
 * 渲染TabGroup列表
 */
export default function useRenderTabGroupList(): IRenderListItem {
  const blocks: renderOriginArray = [
    ['', '', [
      { value: 'PageTabGroup', render: PageTabGroup },
    ]],
  ]

  return {
    id: 'tab-group',
    title: '标签组',
    blocks,
  }
}
