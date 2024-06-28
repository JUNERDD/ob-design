import type { IRenderListItem, renderOriginArray } from './_types'
import { ObButton } from '#components'

/**
 * 渲染按钮列表
 */
export default function useRenderButtonList(): IRenderListItem {
  const blocks: renderOriginArray = [
    ['type', '类型', [
      { value: 'primary', label: '主要按钮' },
      { value: 'success', label: '成功按钮' },
      { value: 'warning', label: '警告按钮' },
      { value: 'danger', label: '危险按钮' },
      { value: 'info', label: '信息按钮' },
    ]],
    ['size', '尺寸', [
      { value: 'small', label: '小按钮' },
      { value: 'middle', label: '中按钮' },
      { value: 'large', label: '大按钮' },
    ]],
  ]

  return {
    id: 'button',
    title: '按钮',
    blocks,
    component: ObButton,
  }
}
