import type { ComponentResolver } from 'unplugin-vue-components'

/**
 * 组件自动引入插件
 */
export default function obdesignAutoImport(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name) => {
      if (name.startsWith('Ob')) {
        return { name, from: '@obdesign/components' }
      }
    },
  }
}
