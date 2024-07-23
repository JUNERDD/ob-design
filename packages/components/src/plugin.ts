import type { App, DefineComponent } from 'vue'
import * as ob from './ob'
import { isComponent } from './_tools'

// 注册参数
interface IPluginPayload {
  prefix: string
}

// 挂载全局组件插件
export default function obdesign(app: App, payload?: IPluginPayload) {
  const { prefix = 'Ob' } = payload || {}

  Object.entries(ob).forEach(([key, value]) => {
    if (isComponent(value)) {
      // 替换原有的前缀
      const cpnName = key.replace('Ob', '')

      // 注册组件
      app.component(prefix + cpnName, (value as DefineComponent))
    }
  })
}
