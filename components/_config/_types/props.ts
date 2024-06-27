import type { Booleanish, NativeType } from '.'

/**
 * 如下是vue with withDefaults的原生类型（copy this）
 */
export type LooseRequired<T> = { [P in keyof (T & Required<T>)]: T[P] }
export type InferDefault<P, T> = ((props: P) => T & object) | (T extends NativeType ? T : never)
export type InferDefaults<T> = { [K in keyof T]?: InferDefault<T, T[K]> }

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
 * Default props - 默认props属性（用于withDefaults第二个参数）
 */
export type DefaultProps<T> = InferDefaults<LooseRequired<T>>
