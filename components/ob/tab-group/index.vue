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
const activeValue = ref(props.modelValue ?? props.defaultValue ?? props.items[0].value)

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
  const buttonEl = target.closest(`.label-box > button[data-value]`) as HTMLButtonElement

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

// 创建盒子ref
const labelBoxRef = ref<HTMLDivElement | null>(null)

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
  labelBoxRef.value && observer.value?.observe(labelBoxRef.value, { childList: true, subtree: true })
})

onUnmounted(() => {
  // 取消监听窗口变化
  window.removeEventListener('resize', debounceChangeOffset)

  // 取消监听子元素变化
  observer.value?.disconnect()
})
</script>

<template>
  <!-- 标签 -->
  <div
    ref="labelBoxRef"
    :class="cn('label-box', _style(), isLoad && 'before:(transition-all visible)', props.boxClass)"
    @click="handleClick"
  >
    <button
      v-for="item in props.items"
      :key="item.value"
      ref="labelRef"
      :class="cn(labelStyle(), isLoad && 'data-[active=true]:bg-transparent', props.labelClass)"
      :data-value="item.value"
      :data-active="activeValue === item.value"
    >
      <!-- 指定label的标签槽 -->
      <template v-if="slots[`label-${item.value}`]">
        <slot :name="`label-${item.value}`" :item>
          {{ item.label }}
        </slot>
      </template>

      <!-- 通用label的标签槽 -->
      <template v-else>
        <slot name="label" :item>
          {{ item.label }}
        </slot>
      </template>
    </button>
  </div>

  <!-- 值 -->
  <template v-for="item in items" :key="item.value">
    <!-- 指定value的标签槽 -->
    <template v-if="slots[`value-${item.value}`]">
      <slot v-if="activeValue === item.value" :name="`value-${item.value}`" :item>
        {{ item.content }}
      </slot>
    </template>

    <!-- 通用value的标签槽 -->
    <template v-else>
      <slot v-if="activeValue === item.value" name="value" :item>
        {{ item.content }}
      </slot>
    </template>
  </template>
</template>

<style scoped>
.label-box::before {
  transform: translateX(v-bind('beforeStyle.offsetLeft'));
  height: v-bind('beforeStyle.height');
  width: v-bind('beforeStyle.width');
}
</style>
