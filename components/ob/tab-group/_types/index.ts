import type { ClassValue } from 'class-variance-authority/types'
import type { ICommonProps } from 'ob-tools'

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
  defaultValue?: string
  modelValue?: string
  items: ITabGroupLabelItem[]
  boxClass?: ClassValue
  labelClass?: ClassValue
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
