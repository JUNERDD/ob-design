import type { App, DefineComponent } from 'vue'
import * as ob from '../ob'
import { isComponent } from '../_tools'

// 注册参数
interface IPluginPayload {
  prefix: string
}

/**
 * 挂载全局组件插件
 */
export default function obdesign(app: App, payload?: IPluginPayload) {
  const { prefix: _prefix = 'Ob' } = payload || {}

  // 首字母大写
  const prefix = _prefix.charAt(0).toUpperCase() + _prefix.slice(1)

  Object.entries(ob).forEach(([key, value]) => {
    if (isComponent(value)) {
      // 替换原有的前缀
      const cpnName = key.replace('Ob', '')

      // 注册组件
      app.component(prefix + cpnName, (value as DefineComponent))
    }
  })
}
