import { ObButton } from '@obdesign/components'
import type { IRenderListItem, renderOriginArray } from './_types'

/**
 * 渲染按钮列表
 */
export default function useRenderButtonList(): IRenderListItem {
  const render = ObButton

  const blocks: renderOriginArray = [
    ['variant', '类型', [
      { value: 'primary', label: '主要按钮', render },
      { value: 'success', label: '成功按钮', render },
      { value: 'warning', label: '警告按钮', render },
      { value: 'danger', label: '危险按钮', render },
      { value: 'info', label: '信息按钮', render },
      { value: 'ghost', label: '幽灵按钮', render },
    ]],
    ['size', '尺寸', [
      { value: 'large', label: '大按钮', render },
      { value: 'middle', label: '中按钮', render },
      { value: 'small', label: '小按钮', render },
    ]],
  ]

  return {
    id: 'button',
    title: '按钮',
    blocks,
  }
}
