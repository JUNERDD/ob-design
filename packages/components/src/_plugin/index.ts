import type { App } from 'vue'
// import Spin from 'ob-design'

/**
 * Ob-Design vue 插件
 */
export function ObDesignPlugin(app: App<Element>) {
  const getClass = (value: boolean) => value ? ['before:visible', 'before:bg-red'] : ['before:invisible', 'before:bg-black', 'before:opacity-0']

  app.directive('loading', {
    created(el: HTMLElement, { value }) {
      if (value) {
        el.classList.add('loading', ...getClass(value))
      }
    },
    // mounted(el: HTMLElement, { value }) {
    //   const ele = document.createElement('div')

    //   render(h(Spin), ele)

    //   el.append(ele)
    // },
    updated(el: HTMLElement, { value }) {
      // 删除另外一个值的class
      el.classList.remove(...getClass(!value))

      // 添加当前值的class
      el.classList.add(...getClass(value))
    },
    getSSRProps({ value }) {
      return {
        class: `loading-box ${getClass(value).join(' ')}`,
      }
    },
  })
}
