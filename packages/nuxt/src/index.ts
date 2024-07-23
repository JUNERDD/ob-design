import { addComponent, defineNuxtModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@obdesign/nuxt',
    // 在nuxt.config.ts中配置选项的key
    configKey: 'obDesign',
  },
  // 默认选项
  defaults: {
    prefix: 'Ob',
  },
  setup(_options, _nuxt) {
    // 首字母大写
    const prefix = _options.prefix.charAt(0).toUpperCase() + _options.prefix.slice(1)

    // 组件列表
    const cpnList = [['Button', 'ObButton'], ['Link', 'ObLink'], ['Theme', 'ObTheme'], ['LoadingBox', 'ObLoadingBox'], ['Spin', 'ObSpin'], ['TabGroup', 'ObTabGroup'], ['Modal', 'ObModal'], ['Section', 'ObSection'], ['SectionBlock', 'ObSectionBlock'], ['Spline3d', 'ObSpline3d'], ['Card', 'ObCard']]

    // 注册组件
    cpnList.forEach(([name, exportName]) => {
      addComponent({
        name: prefix + name, // 组件在vue模板中使用的名称
        export: exportName, // 组件在库中的到处名
        filePath: 'obdesign',
      })
    })
  },
})
