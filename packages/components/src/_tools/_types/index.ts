export type * from './cva'
export type * from './props'
export type * from './router'

export type Booleanish = boolean | 'true' | 'false'
export type Numberish = number | string
export type Keyish = string | number | symbol
export type FunctionLike = (...args: any[]) => any
export type NativeType = null | number | string | boolean | symbol | FunctionLike
export type Obj<V = any> = Record<Keyish, V>
