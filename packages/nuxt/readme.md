# @obdesign/nuxt

[![NPM Version](https://img.shields.io/npm/v/obdesign)](https://www.npmjs.com/package/obdesign)

![obdesign](https://epnzyoseqqjwdazchdcw.supabase.co/storage/v1/object/public/project/design/design.webp)

一款基于 Vue 3 和 Unocss 的组件库，包含 Unocss 预设

> :bulb: **组件库官网正在制作中，预览版本：[o-b.design](https://www.o-b.design)**

## 快速入门

> :bulb: **本文档面向 Nuxt 项目，且仅介绍安装过程，如果需要安装 Vite 项目的版本，或者需要详细的文档，请看 [obdesign](https://www.npmjs.com/package/obdesign)**

### 1. 安装依赖

```bash
npm install @obdesign/nuxt
```

> :information_source: 在此之前, 需要确保项目正确安装了`unocss`和`@unocss/reset`。如果不知道如何安装，请您看这里 [Unocss Vite Plugin](https://unocss.dev/integrations/vite) 和 [Unocss Browser Style Reset](https://unocss.dev/guide/style-reset)

### 2. 配置预设

```ts
// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import obPreset from '@obdesign/preset' // 这里和普通vite项目有所不同

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

### 3. 注册模块
> :bulb: **@obdesign/nuxt 支持单独引入、和模块自动导包**

#### 3.1 单独引入

```vue
<script setup lang="ts">
import { ObButton } from '@obdesign/components' // 这里和普通vite项目有所不同
</script>

<template>
  <ObButton>hello</ObButton>
</template>
```

#### 3.2 模块自动导包（推荐）

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 注册模块
  modules: ['@unocss/nuxt', '@obdesign/nuxt'],
  // 为构建进行额外的编译
  build: { transpile: ['@obdesign/components'] },
  // 样式重置（无需另外导入其他重置文件）
  css: ['@unocss/reset/tailwind-compat.css'],
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
