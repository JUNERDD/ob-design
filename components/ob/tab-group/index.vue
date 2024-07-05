<script setup lang="ts">
import { cn } from 'ob-lib'
import _style, { labelStyle } from './_style'
import type { IObTabsLabelDataset, ITabsProps } from './_types'
import _default from './_default'

// 参数
const props = withDefaults(defineProps<ITabsProps>(), _default)

// 活跃值
const activeValue = ref<string | number>(props.defaultValue)

const tabs = ref([
  { name: '首页', value: '0' },
  { name: '文档', value: '1' },
  { name: '组件', value: '2' },
])

// 判断是否加载完成
const isLoad = ref(false)

// 标签ref
const labelRef = ref<HTMLButtonElement[]>([])

// 指示器偏移量
const beforeStyle = reactive({
  offsetLeft: '0px',
  height: '0px',
  width: '0px',
})

// 更改偏移量
function changeOffset() {
  // 获取活跃标签
  const target = labelRef.value.find(item => item.dataset.value === activeValue.value)
  if (!target) {
    return
  }

  beforeStyle.offsetLeft = `${target.offsetLeft}px`
  beforeStyle.height = `${target.offsetHeight}px`
  beforeStyle.width = `${target.offsetWidth}px`
}

// 组件挂载时移动偏移量
onMounted(() => {
  changeOffset()

  // 延时加载
  const timer = setTimeout(() => {
    isLoad.value = true
    clearTimeout(timer)
  }, 150)
})

// 点击label
function handleClick(e: MouseEvent) {
  const target = e.target as HTMLButtonElement

  // 如果点击的不是标签，返回
  if (!labelRef.value.includes(target)) {
    return
  }

  // 获取数据属性
  const dataset = target.dataset as IObTabsLabelDataset

  // 更新活跃值
  activeValue.value = dataset.value

  changeOffset()
}
</script>

<template>
  <div
    :class="cn(_style(), isLoad && 'before:transition-transform', props.boxClass)"
    @click="handleClick"
  >
    <button
      v-for="tab in tabs"
      :key="tab.value"
      ref="labelRef"
      :class="cn(labelStyle(), isLoad && 'data-[active=true]:bg-transparent', props.labelClass)"
      :data-value="tab.value"
      :data-active="activeValue === tab.value"
    >
      {{ tab.name }}
    </button>
  </div>
</template>

<style scoped>
.before-box::before {
  transform: translateX(v-bind('beforeStyle.offsetLeft'));
  height: v-bind('beforeStyle.height');
  width: v-bind('beforeStyle.width');
}
</style>
