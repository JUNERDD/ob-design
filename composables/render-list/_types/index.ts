import type { Component } from 'vue'

// 渲染列表原始数据类型
export type renderOriginArray = [string, string, { label?: string, value: string, render: Component }[]][]

// 渲染列表子项类型
export interface IRenderListItem {
  id: string
  title: string
  blocks: renderOriginArray
}
