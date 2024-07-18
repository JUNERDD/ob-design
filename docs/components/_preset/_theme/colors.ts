import type { Theme } from '../../_tools'

/**
 * 颜色配置
 * @see {@link 快速生成网站 https://uicolors.app}
 */
export const colors: Theme['colors'] = {
  lightGray: '#f9f9f9',
  mediumGray: '#f1f1f1',
  darkGray: '#838383',
  primary: {
    50: '#f6f6f6',
    100: '#e7e7e7',
    200: '#d1d1d1',
    300: '#b0b0b0',
    400: '#888888',
    500: '#6d6d6d',
    600: '#5d5d5d',
    700: '#4f4f4f',
    800: '#454545',
    900: '#3d3d3d',
    950: '#212121',
  },
  success: {
    50: '#f1fcf1',
    100: '#defae1',
    200: '#bff3c3',
    300: '#8ce995',
    400: '#53d560',
    500: '#2dbf3c',
    600: '#1f9a2b',
    700: '#1c7926',
    800: '#1b6023',
    900: '#184f1f',
    950: '#082b0d',
  },
  warning: {
    50: '#faf9ec',
    100: '#f4f1cd',
    200: '#eae29e',
    300: '#decc66',
    400: '#d3b73c',
    500: '#bf9d2d',
    600: '#a97f25',
    700: '#875e21',
    800: '#714d22',
    900: '#614122',
    950: '#382110',
  },
  danger: {
    50: '#fdf3f3',
    100: '#fce4e4',
    200: '#facece',
    300: '#f6abab',
    400: '#ee7b7b',
    500: '#e35050',
    600: '#bf2d2d',
    700: '#ae2727',
    800: '#902424',
    900: '#782424',
    950: '#410e0e',
  },
  get black() {
    return '#212121'
  },
}

/**
 * 指定默认颜色和颜色快捷键（preset-mini原生方法 copy this）
 * @see {@link https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_theme/colors.ts}
 */
Object.entries(colors).forEach(([key, color]) => {
  if (typeof color !== 'string' && color !== undefined) {
  // 默认颜色比例
    const defaultNum = {
      primary: 950,
      success: 500,
      warning: 500,
      danger: 600,
    } satisfies {
      [key in keyof typeof colors]: keyof typeof colors[key]
    }

    color.DEFAULT = color.DEFAULT || color[defaultNum[key as keyof typeof defaultNum]] as string
    Object.keys(color).forEach((key) => {
      const short = +key / 100
      if (short === Math.round(short))
        color[short] = color[key]
    })
  }
})
