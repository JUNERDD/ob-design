import { twMerge } from 'tailwind-merge'
import { cx } from 'class-variance-authority'
import type { ClassValue } from 'class-variance-authority/types'
import { v4 } from 'uuid'
import { noop } from 'ob-tools'

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
export function uuid(noopPay?: any) {
  /**
   * 利用一个无作用函数确保uuid可接受参数但并不使用
   * 保证v-for时不报错<key必须时v-for遍历的项>
   */
  noop(noopPay)

  return v4()
}
