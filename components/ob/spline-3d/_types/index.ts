import type { CanvasHTMLAttributes } from 'vue'

/**
 * ObSpline3d - 参数类型
 * @see {@link https://github.com/splinetool/react-spline}
 */
export interface IObSpline3dProps {
  /**
   * 渲染地址
   */
  sceneUrl: string
  /**
   * 渲染模式，可以是：
   * - `auto` 运行时尝试仅在必要时渲染（默认）。
   * - `manual` 仅在调用 spline.requestRender() 时渲染。
   * - `continuous` 持续渲染，每帧一次。
   */
  renderMode?: 'auto' | 'manual' | 'continuous'
}

/**
 * ObSpline3d - 事件类型
 */
export interface IObSpline3dEmits {
  (e: 'load'): void
}
