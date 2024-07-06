<script setup lang="ts">
import { cn } from 'ob-lib'
import { useThrottle } from 'ob-tools'
import type { Numberish } from 'ob-tools'
import _style, { labelStyle } from './_style'
import type { ITabGroupLabelDataset, ITabGroupProps, ITabGroupSlot } from './_types'
import _default from './_default'

// 参数
const props = withDefaults(defineProps<ITabGroupProps>(), _default)

// 定义插槽内容
defineSlots<ITabGroupSlot>()

// 活跃值
const activeValue = ref<Numberish>(props.defaultValue)

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

// 防抖更改偏移量函数
const debounceChangeOffset = useThrottle(changeOffset, 200, true)

// 组件挂载时移动偏移量
onMounted(() => {
  changeOffset()

  // 将指示器加载放入宏任务
  const timer = setTimeout(() => {
    isLoad.value = true
    clearTimeout(timer)
  }, 0)

  window.addEventListener('resize', debounceChangeOffset)
})

onUnmounted(() => {
  window.removeEventListener('resize', debounceChangeOffset)
})

// 点击label
function handleClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  const buttonEl = target.closest(`.before-box > button[data-value]`) as HTMLButtonElement

  // 如果点击的不是标签，返回
  if (!buttonEl || !labelRef.value.includes(buttonEl)) {
    return
  }

  // 获取数据属性
  const dataset = buttonEl.dataset as ITabGroupLabelDataset

  // 更新活跃值
  activeValue.value = dataset.value

  changeOffset()
}
</script>

<template>
  <div
    :class="cn('before-box', _style(), isLoad && 'before:(transition-all visible)', props.boxClass)"
    @click="handleClick"
  >
    <button
      v-for="label in props.labels"
      :key="label.value"
      ref="labelRef"
      :class="cn(labelStyle(), isLoad && 'data-[active=true]:bg-transparent', props.labelClass)"
      :data-value="label.value"
      :data-active="activeValue === label.value"
    >
      <slot :name="`label-${label.value}`" :label>
        {{ label.name }}
      </slot>
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
