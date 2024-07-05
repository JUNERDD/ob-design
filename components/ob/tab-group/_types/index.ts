import type { ClassValue } from 'class-variance-authority/types'
import type { ICommonProps, Numberish } from 'ob-tools'

/**
 * ObTabGroup - Label item 类型
 */
export interface IObTabsLabelItem {
  name: any
  value: Numberish
}

/**
 * ObTabGroup - 参数类型
 */
export interface ITabsProps extends ICommonProps {
  defaultValue: string
  labels: IObTabsLabelItem[]
  boxClass?: ClassValue
  labelClass?: ClassValue
}

/**
 * ObTabGroup - Label dataset 类型
 */
export interface IObTabsLabelDataset extends DOMStringMap {
  value: string
  active: string
}
