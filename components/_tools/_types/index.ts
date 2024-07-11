export type * from './cva'
export type * from './props'
export type * from './uno'
export type * from './router'

export type Booleanish = boolean | 'true' | 'false'
export type Numberish = number | string
export type Keyish = string | number | symbol
export type NativeType = null | number | string | boolean | symbol | Function
export type Obj<V = any> = Record<Keyish, V>
