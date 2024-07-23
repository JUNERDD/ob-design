export {}

interface _Components {
  ObButton: typeof import('./src/ob/button/index.vue')['default']
  ObCard: typeof import('./src/ob/card/index.vue')['default']
  ObLink: typeof import('./src/ob/link/index.vue')['default']
  ObLoadingBox: typeof import('./src/ob/loading-box/index.vue')['default']
  ObSpin: typeof import('./src/ob/spin/index.vue')['default']
  ObTabGroup: typeof import('./src/ob/tab-group/index.vue')['default']
  ObTheme: typeof import('./src/ob/theme/index.vue')['default']
  ObModal: typeof import('./src/ob/modal/index.vue')['default']
  ObSection: typeof import('./src/ob/section/index.vue')['default']
  ObSectionBlock: typeof import('./src/ob/section/block.vue')['default']
  ObSpline3d: typeof import('./src/ob/spline-3d/index.vue')['default']
}

// 声明运行时全局组件类型
declare module '@vue/runtime-core' {
  export interface GlobalComponents extends _Components {}
}

// 声明自定义渲染函数全局组件类型
declare module '@vue/runtime-dom' {
  export interface GlobalComponents extends _Components {}
}

// 声明模板内全局组件类型
declare module 'vue' {
  export interface GlobalComponents extends _Components {}
}
