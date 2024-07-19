import type { Component } from 'vue'
import type { Obj } from '@ob-design/components'

// 渲染列表原始数据类型
export type renderOriginArray = [string, string, { label?: string, value: any, render: Component, otherProps?: Obj }[]][]

// 渲染列表子项类型
export interface IRenderListItem {
  id: string
  title: string
  blocks: renderOriginArray
}
