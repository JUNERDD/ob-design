<script setup lang="ts">
import type { ITabGroupLabelItem } from 'ob/tab-group/_types'

// 初始化tab值
const tabValue = defineModel()

// tab组件
const items: ITabGroupLabelItem [] = [
  { label: '首页', value: '/' },
  { label: '文档', value: '/docs' },
  { label: '组件', value: '/docs/components' },
]
</script>

<template>
  <div class="w-full max-w-screen-2xl flex-center-i p-8">
    <!-- logo -->
    <NuxtLink to="/" class="flex flex-1 justify-start">
      <NuxtImg title="logo" size="20px md:30px" src="/svg/logo.svg" />
    </NuxtLink>

    <!-- tab -->
    <ObTabGroup v-model="tabValue" :items router />

    <!-- search -->
    <div class="flex flex-1 justify-end">
      <ObButton>搜索</ObButton>
    </div>
  </div>
</template>

<style scoped>

</style>
