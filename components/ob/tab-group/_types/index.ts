import type { ClassValue } from 'class-variance-authority/types'
import type { ICommonProps, Numberish } from 'ob-tools'

/**
 * ObTabGroup - Label item 类型
 */
export interface ITabGroupLabelItem {
  name: any
  value: Numberish
}

/**
 * ObTabGroup - 参数类型
 */
export interface ITabGroupProps extends ICommonProps {
  defaultValue: string
  labels: ITabGroupLabelItem[]
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
