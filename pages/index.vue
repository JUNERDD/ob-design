<script setup>
const buttons = [
  ['type', '类型', ['primary', 'success', 'warning', 'danger', 'info']],
  ['size', '尺寸', ['large', 'middle', 'small']],
]

const renderArray = [
  {
    id: 'button',
    title: '按钮',
    blocks: buttons.map(([prop, title, child]) => ({
      prop,
      title,
      child: child.map(childItem => ({ value: childItem, label: childItem })),
    })),
  },
]
</script>

<template>
  <div
    class="h-screen w-screen flex flex-col gap-10 bg-neutral-100 p-10 font-sans"
  >
    <h4 class="text-2xl font-bold">
      OB Design - Dev
    </h4>

    <!-- 展示区域 -->
    <ObSection
      v-for="item in renderArray" :id="item.id"
      :key="item.id" :title="item.title"
    >
      <ObSectionBlock
        v-for="block in item.blocks"
        :key="block.prop" :title="block.title"
      >
        <ObButton
          v-for="{ value, label } in block.child"
          :key="value" v-bind="{ [block.prop]: value }"
        >
          {{ label }}
        </ObButton>
      </ObSectionBlock>
    </ObSection>
  </div>
</template>
