import type { UserShortcuts } from 'unocss'

/**
 * 用户自定义颜色快捷方式
 */
export default <UserShortcuts>[
  [
    // 弹性盒子居中快捷方式
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
]
