import type { ClassValue } from 'class-variance-authority/types'
import type { ICommonProps } from 'ob-tools'

/**
 * ObTabs - 参数类型
 */
export interface ITabsProps extends ICommonProps {
  defaultValue: string
  boxClass?: ClassValue
  labelClass?: ClassValue
}

/**
 * ObTabs - Label dataset type
 */
export interface IObTabsLabelDataset extends DOMStringMap {
  value: string
  active: string
}
