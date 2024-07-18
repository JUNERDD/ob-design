import type { ClassValue } from 'class-variance-authority/types'
import type { Booleanish, NativeType } from '.'

/**
 * 如下是vue withDefaults的原生类型（copy this）
 * @see {@link https://github.com/vuejs/core/blob/main/packages/runtime-core/src/apiSetupHelpers.ts}
 */
export type LooseRequired<T> = { [P in keyof (T & Required<T>)]: T[P] }
export type InferDefault<P, T> = ((props: P) => T & object) | (T extends NativeType ? T : never)
export type InferDefaults<T> = { [K in keyof T]?: InferDefault<T, T[K]> }

export type SizePropsType = 'small' | 'middle' | 'large'
export type VariantPropsType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'ghost'

/**
 * Common props - 公共参数类型
 */
export interface ICommonProps {
  size?: SizePropsType
  variant?: VariantPropsType
  disabled?: Booleanish
  loading?: Booleanish
  class?: ClassValue
}

/**
 * Default props - 默认props属性（用于withDefaults第二个参数）
 */
export type DefaultProps<T> = InferDefaults<LooseRequired<T>>
