<script setup lang="ts">
import { uuid } from 'ob-lib'
import type { ITabGroupLabelItem } from 'ob/tab-group/_types'

// 目前阶段关闭布局
definePageMeta({
  layout: false,
})

// 按钮
const renderList = useRenderList()

const value = ref('2')

const labels = ref<ITabGroupLabelItem[]>([
  { name: '首页', value: '0' },
  { name: '文档', value: '1' },
  { name: '组件', value: '2' },
])
</script>

<template>
  <div
    class="min-h-screen min-w-screen flex flex-col gap-10 bg-neutral-100 p-10 font-sans"
  >
    <h4 class="text-2xl font-bold">
      OB Design - Dev
    </h4>

    <div class="flex-center bg-white p-y-10">
      <ObTabGroup v-model="value" default-value="1" :labels>
        <template #label="a">
          {{ a.label.value }}
        </template>
        <template #label-1="a">
          {{ a.label.name }}
        </template>
      </ObTabGroup>
    </div>

    <ObSection
      v-for="item in renderList"
      :id="item.id"
      :key="item.id"
      :title="item.title"
    >
      <ObSectionBlock
        v-for="[prop, title, child] in item.blocks"
        :key="prop"
        :title
      >
        <!-- 展示区域：此处用uuid生成key是为了在改变组件样式时可以自动热加载 -->
        <component
          :is="render"
          v-for="{ value, label, render, otherProps } in child"
          :key="uuid(value)" v-bind="{ [prop]: value, ...otherProps }"
        >
          {{ label }}
        </component>
      </ObSectionBlock>
    </ObSection>
  </div>
</template>
