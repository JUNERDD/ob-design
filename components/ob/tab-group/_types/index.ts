import type { ClassValue } from 'class-variance-authority/types'
import type { Booleanish, ICommonProps } from 'ob-tools'

/**
 * ObTabGroup - Label item 类型
 */
export interface ITabGroupLabelItem {
  label: any
  value: string
  content?: any
}

/**
 * ObTabGroup - 参数类型
 */
export interface ITabGroupProps extends ICommonProps {
  /**
   * 默认值
   */
  defaultValue?: string
  /**
   * 选项
   */
  items: ITabGroupLabelItem[]
  /**
   * 盒子样式
   */
  boxClass?: ClassValue
  /**
   * 标签样式
   */
  labelClass?: ClassValue
  /**
   * 是否开启路由模式：
   * - `true` 渲染成a标签，value值为路由地址
   */
  router?: Booleanish
}

/**
 * ObTabGroup - Label dataset 类型
 */
export interface ITabGroupLabelDataset extends DOMStringMap {
  value: string
  active: string
}

/**
 * ObTabGroup - 插槽类型
 */
export interface ITabGroupSlot<T = ITabGroupLabelItem> {
  label: (props: { item: T }) => any
  [key: `label-${string}`]: (props: { item: T }) => any
  value: (props: { item: T }) => any
  [key: `value-${string}`]: (props: { item: T }) => any
}
