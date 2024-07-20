import { ObLink } from '@obdesign/components'
import type { IRenderListItem, renderOriginArray } from './_types'

/**
 * 渲染链接列表
 */
export default function useRenderLinkList(): IRenderListItem {
  const render = ObLink

  const blocks: renderOriginArray = [
    ['variant', '类型', [
      { value: 'primary', label: '主要链接', render },
      { value: 'success', label: '成功链接', render },
      { value: 'warning', label: '警告链接', render },
      { value: 'danger', label: '危险链接', render },
      { value: 'info', label: '信息链接', render },
    ]],
    ['size', '尺寸', [
      { value: 'large', label: '大链接', render },
      { value: 'middle', label: '中链接', render },
      { value: 'small', label: '小链接', render },
    ]],
  ]

  return {
    id: 'link',
    title: '链接',
    blocks,
  }
}
