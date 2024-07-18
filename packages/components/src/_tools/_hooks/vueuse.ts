import { useDebounceFn, useThrottleFn } from '@vueuse/core'

/**
 * 防抖函数
 */
export const useDebounce = useDebounceFn

/**
 * 节流函数
 */
export const useThrottle = useThrottleFn
