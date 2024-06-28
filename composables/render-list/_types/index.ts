import type { Component } from 'vue'

// 渲染列表原始数据类型
export type renderOriginArray = [string, string, { value: string, label: string }[]][]

// 渲染列表子项类型
export interface IRenderListItem {
  id: string
  title: string
  component: Component
  blocks: renderOriginArray
}
