import { twMerge } from 'tailwind-merge'
import { cx } from 'class-variance-authority'
import type { ClassValue } from 'class-variance-authority/types'
import { v4 } from 'uuid'

/**
 *
 * @param inputs 样式类
 * @returns 合并后的样式类
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs))
}

/**
 * 构造uuid
 */
export function uuid() {
  return v4()
}
