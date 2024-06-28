<script setup>
import { uuid } from 'ob-lib'

// 按钮
const renderList = useRenderList()
</script>

<template>
  <div
    class="min-h-screen min-w-screen flex flex-col gap-10 bg-neutral-100 p-10 font-sans"
  >
    <h4 class="text-2xl font-bold">
      OB Design - Dev
    </h4>

    <!-- 展示区域：此处用uuid生成key是为了在改变组件样式时可以自动热加载 -->
    <ObSection
      v-for="(item) in renderList"
      :id="item.id"
      :key="uuid(item.id)"
      :title="item.title"
    >
      <ObSectionBlock
        v-for="[prop, title, child] in item.blocks"
        :key="uuid(prop)"
        :title
      >
        <component
          :is="item.component"
          v-for="{ value, label } in child"
          :key="uuid(value)" v-bind="{ [prop]: value }"
        >
          {{ label }}
        </component>
      </ObSectionBlock>
    </ObSection>
  </div>
</template>
