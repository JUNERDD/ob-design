import type { ClassProp, ClassValue, StringToBoolean } from 'class-variance-authority/types'

/**
 * 如下是cva原生类型（copy this）
 */
export type ConfigSchema = Record<string, Record<string, ClassValue>>
type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined;
}
type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | StringToBoolean<keyof T[Variant]>[] | undefined;
}
export type Config<T> = T extends ConfigSchema ? {
  variants?: T
  defaultVariants?: ConfigVariants<T>
  compoundVariants?: (T extends ConfigSchema ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp : ClassProp)[]
} : never
