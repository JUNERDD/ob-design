<script setup lang="ts">
import { uuid } from 'ob-lib'

// 目前阶段关闭布局
definePageMeta({
  layout: false,
})

// 按钮
const renderList = useRenderList()
</script>

<template>
  <div
    class="max-w-screen min-h-screen flex flex-col gap-10 bg-neutral-100 p-10 font-sans"
  >
    <h4 class="text-2xl font-bold">
      OB Design - Dev
    </h4>

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
