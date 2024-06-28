import type { ClassValue } from 'class-variance-authority/types'
import type { Booleanish, NativeType } from '.'

/**
 * 如下是vue withDefaults的原生类型（copy this）
 */
export type LooseRequired<T> = { [P in keyof (T & Required<T>)]: T[P] }
export type InferDefault<P, T> = ((props: P) => T & object) | (T extends NativeType ? T : never)
export type InferDefaults<T> = { [K in keyof T]?: InferDefault<T, T[K]> }

/**
 * Common props - 公共参数类型
 */
export interface ICommonProps {
  size?: 'small' | 'middle' | 'large'
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  disabled?: Booleanish
  loading?: Booleanish
  class?: ClassValue
}

/**
 * Default props - 默认props属性（用于withDefaults第二个参数）
 */
export type DefaultProps<T> = InferDefaults<LooseRequired<T>>
