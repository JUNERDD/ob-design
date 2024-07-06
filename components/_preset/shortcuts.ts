import type { UserShortcuts } from 'unocss'

/**
 * 用户自定义颜色快捷方式
 */
export default <UserShortcuts>[
  [
    // 弹性盒子居中
    /^flex-center(-\w)?/,
    ([, w]) => {
      switch (true) {
        case !w:
          return 'flex justify-center items-center'
        case w === '-i':
          return 'flex items-center'
        case w === '-j':
          return 'flex justify-center'
      }
    },
  ],
  [
    // 颜色模式
    /^auto-(color|bg)(-\w)?/,
    ([, ct, m]) => {
      // 映射函数
      const map: any = {
        color: ['c-black dark:c-white', 'c-white dark:c-black'],
        bg: ['bg-black dark:bg-white', 'bg-white dark:bg-black'],
      }
      return map[ct][m === '-d' ? 1 : 0]
    },
  ],
]
