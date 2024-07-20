<script setup lang="ts">
import type { ITabGroupLabelItem } from 'obdesign'
import { ObTabGroup } from 'obdesign'

const activeValue = ref('docs')

const items = ref<ITabGroupLabelItem[]>([
  { label: '首页', value: 'home', content: '我是首页' },
  { label: '文档', value: 'docs', content: '我是文档' },
  { label: '组件', value: 'cpn', content: '我是组件' },
])
</script>

<template>
  <div class="w-full flex flex-col gap-3 bg-white items-start">
    <ObTabGroup v-model="activeValue" default-value="1" :items>
      <template #label="{ item }">
        <span>{{ item.value }}</span>
      </template>

      <template #label-docs="{ item }">
        <span>{{ item.label }}</span>
      </template>

      <template #value="{ item }">
        <span c="red">{{ item.label }}</span>
      </template>

      <template #value-home="{ item }">
        {{ item }}
      </template>
    </ObTabGroup>
  </div>
</template>

<style scoped>

</style>
