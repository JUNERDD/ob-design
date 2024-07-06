<script setup lang="ts">
import { cn } from 'ob-lib'
import { useThrottle } from 'ob-tools'
import _style, { labelStyle } from './_style'
import type { ITabGroupLabelDataset, ITabGroupProps, ITabGroupSlot } from './_types'
import _default from './_default'

// 参数
const props = withDefaults(defineProps<ITabGroupProps>(), _default)

// 发射事件
const emit = defineEmits(['update:modelValue'])

// 定义插槽内容
const slots = defineSlots<ITabGroupSlot>()

// 活跃值
const activeValue = ref(props.modelValue ?? props.defaultValue ?? props.labels[0].value)

// 发射活跃值更新事件
watch(activeValue, value => emit('update:modelValue', value))

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

// 防抖更改偏移量函数
const debounceChangeOffset = useThrottle(changeOffset, 200, true)

// 建立观察者
const observer = ref<MutationObserver | null>(null)

// 组件挂载时移动偏移量
onMounted(() => {
  // 改变指示器偏移量
  changeOffset()

  // 将指示器加载放入宏任务
  const timer = setTimeout(() => {
    isLoad.value = true
    clearTimeout(timer)
  }, 0)

  // 监听窗口变化
  window.addEventListener('resize', changeOffset)

  // 监听子元素变化
  observer.value = new MutationObserver(debounceChangeOffset)
  labelRef.value.forEach(item => observer.value?.observe(item, { childList: true, subtree: true }))
})

onUnmounted(() => {
  // 取消监听窗口变化
  window.removeEventListener('resize', debounceChangeOffset)

  // 取消监听子元素变化
  observer.value?.disconnect()
})
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
      <!-- 指定value的标签槽 -->
      <template v-if="slots[`label-${label.value}`]">
        <slot :name="`label-${label.value}`" :label>
          {{ label.name }}
        </slot>
      </template>

      <!-- 通用value的标签槽 -->
      <template v-else>
        <slot name="label" :label>
          {{ label.name }}
        </slot>
      </template>
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
