# obdesign

[![NPM Version](https://img.shields.io/npm/v/obdesign)](https://www.npmjs.com/package/obdesign)

![obdesign](https://epnzyoseqqjwdazchdcw.supabase.co/storage/v1/object/public/project/design/design.webp)

一款基于 Vue 3 和 Unocss 的组件库，包含 Unocss 预设

> :bulb: **组件库官网正在制作中，预览版本：[o-b.design](https://www.o-b.design)**

## 项目构想

**Ob Design** 致力于打造 **UX 友好、UI 好看、功能实用** 的 Vue3 组件库。核心基于 [UNOCSS](https://unocss.dev/) 和 [Class Variance Authority](https://cva.style/docs)

## 产品特点

- [开源](https://github.com/JUNERDD/ob-design)
- 支持高度 [主题定制化](https://www.o-b.design/components/themes)
- 丰富的 [组件](https://www.o-b.design/components/base/button) 在你的项目中熠熠生辉
- 业务场景优先、最大限度保证用户体验
- 具备良好的 `TS` 代码编辑智能提示
- 适配 `SSR` 环境、`SPA`环境
- 支持 `tree shaking`

## 快速入门

> :bulb: **本文档面向 `vite` 的 `vue` 项目，如果需要 Nuxt 模块，请看 [@obdesign/nuxt](https://www.npmjs.com/package/@obdesign/nuxt)**

### 1. 安装依赖

```bash
npm install obdesign
```

> :information_source: 在此之前, 需要确保项目正确安装了`unocss`和`@unocss/reset`。如果不知道如何安装，请您看这里 [Unocss Vite Plugin](https://unocss.dev/integrations/vite) 和 [Unocss Browser Style Reset](https://unocss.dev/guide/style-reset)

### 2. 配置预设

```ts
// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import obPreset from 'obdesign/preset'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // 编写提取文件路径（重要！）
        /.*\/ob\/.*\.(js|ts|vue|mjs|cjs)/,
      ],
    },
  },
  presets: [
    presetUno(),
    obPreset(), // 将预设添加到这里
  ],
})
```

### 3. 注册组件
> :bulb: **obdesign 支持单独引入、全局注册和自动导包**

#### 3.1 单独引入
 > :information_source: **3.2中 main.ts 的 unocss核心样式 和 样式重置文件 也需要导入到 main.ts 当中**

```vue
<script setup lang="ts">
import { ObButton } from 'obdesign'
</script>

<template>
  <ObButton>hello</ObButton>
</template>
```

#### 3.2 全局注册

```ts
// main.ts
import { createApp } from 'vue'
import obdesign from 'obdesign/plugin' // 导入插件
import App from './App.vue'

// 导入 unocss 核心样式
import 'virtual:uno.css'
// 样式重置（无需另外导入其他重置文件）
import '@unocss/reset/tailwind-compat.css'

// 注册插件
createApp(App).use(obdesign).mount('#app')
```

#### 3.3 自动导包（推荐）
 > :information_source: **3.2中 main.ts 的 unocss核心样式 和 样式重置文件 也需要导入到 main.ts 当中，只是不需要注册插件**

> :information_source: 要使用自动导包, 需要确保项目正确安装了`unplugin-vue-components`。如果不知道如何安装，请您看这里 [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components?activeTab=readme)

```ts
// vite.config.ts
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import obdesignAutoImport from 'obdesign/auto'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      // 将解释器放到这里
      resolvers: [obdesignAutoImport()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

### 4. 使用组件
```vue
<template>
  <ObButton>按钮</ObButton>
  <ObLink>链接</ObLink>
  <ObSpin />
  ...
</template>
```

## 未来计划

- 完善更多业务组件
- 封装高级表单、表格组件
- 完善主题定制器，精准到每个组件设计 `Token`，类似 [Ant Design](https://ant-design.antgroup.com/docs/react/migrate-less-variables-cn)
- 重构新文档。为文档添加 [Nuxt Layers](https://nuxt.com/docs/getting-started/layers) 功能，展现出更多产品独特的设计语言
- 制作中台 `Vue Template`
