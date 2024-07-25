/// <reference types="./dist/index.d.ts" />

interface _Components {
  ObButton: typeof import('./dist/ob/button/index.vue')['default']
  ObCard: typeof import('./dist/ob/card/index.vue')['default']
  ObLink: typeof import('./dist/ob/link/index.vue')['default']
  ObLoadingBox: typeof import('./dist/ob/loading-box/index.vue')['default']
  ObSpin: typeof import('./dist/ob/spin/index.vue')['default']
  ObTabGroup: typeof import('./dist/ob/tab-group/index.vue')['default']
  ObTheme: typeof import('./dist/ob/theme/index.vue')['default']
  ObModal: typeof import('./dist/ob/modal/index.vue')['default']
  ObSection: typeof import('./dist/ob/section/index.vue')['default']
  ObSectionBlock: typeof import('./dist/ob/section/block.vue')['default']
  ObSpline3d: typeof import('./dist/ob/spline-3d/index.vue')['default']
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

// 声明组件常量类型
export declare const ObButton: _Components['ObButton']
export declare const ObCard: _Components['ObCard']
export declare const ObLink: _Components['ObLink']
export declare const ObLoadingBox: _Components['ObLoadingBox']
export declare const ObSpin: _Components['ObSpin']
export declare const ObTabGroup: _Components['ObTabGroup']
export declare const ObTheme: _Components['ObTheme']
export declare const ObModal: _Components['ObModal']
export declare const ObSection: _Components['ObSection']
export declare const ObSectionBlock: _Components['ObSectionBlock']
export declare const ObSpline3d: _Components['ObSpline3d']
