import type { ClassValue } from 'class-variance-authority/types'
import type { Config } from './cva'

export type Booleanish = boolean | 'true' | 'false'
export type Numberish = number | string
export type Keyish = string | number | symbol

/**
 * Common props - 公共属性
 */
export interface ICommonProps {
  size?: 'default' | 'large' | 'small'
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'banger'
  disabled?: Booleanish
  loading?: Booleanish
}

/**
 * props map cva - 属性映射cva
 */
export type CvaConfig<T> = Config<{
  [Item in keyof T]?: Record<Item, {
    [Key in Extract<T[Item], Keyish>]?: ClassValue
  }>
}[keyof T]>
