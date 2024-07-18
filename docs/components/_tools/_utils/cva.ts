import { cva } from 'class-variance-authority'
import type { ClassValue } from 'class-variance-authority/types'
import type { CvaConfig, ICommonProps } from '../_types'

/**
 * 封装cva
 */
export function obCva<T extends ICommonProps>(base?: ClassValue, config?: CvaConfig<T>) {
  // 需要类型转换（预防报错）
  return cva<T>(base, config as any)
}
