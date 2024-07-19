import type { ICardContent } from 'ob-design'

/**
 * 首页技术栈
 */
export function useHomeStack(): ICardContent[] {
  return [{
    icon: 'i-simple-icons:vuedotjs',
    title: 'Vue Components',
    text: '快速构建原生 Vue3 应用',
  }, {
    icon: 'i-simple-icons:typescript',
    title: 'Typescript',
    text: '获得良好的TS类型提示',
  }, {
    icon: 'i-simple-icons:unocss',
    title: 'UNO CSS',
    text: '更快、更小的原子化 CSS 引擎',
  }, {
    icon: 'i-simple-icons:nuxtdotjs',
    title: 'Nuxt Framework',
    text: '原生支持 SSR 和 SPA 渲染模式',
  }, {
    icon: 'i-simple-icons:i18next',
    title: 'I18n',
    text: '用不同语言获得不同的组件使用体验',
  }, {
    icon: 'i-icon-park-solid:graphic-design',
    title: 'Fully Customizable',
    text: '高度定制化、白天黑夜模式自由切换',
  }]
}
