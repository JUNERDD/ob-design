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
      <NuxtImg title="logo" src="/svg/logo.svg" class="h-5 w-5 md:(h-8 w-8)" />
    </NuxtLink>

    <!-- tab -->
    <ObTabGroup v-model="tabValue" class="lt-sm:hidden" :items router />

    <!-- search -->
    <div class="flex flex-1 justify-end">
      <ObButton icon>
        <i class="lt-sm:i-icon-park-solid:list-one sm:i-icon-park-solid:search" />
      </ObButton>
    </div>
  </div>
</template>

<style scoped>

</style>
