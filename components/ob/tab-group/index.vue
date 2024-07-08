<script setup lang="ts">
import { cn } from 'ob-lib'
import { useMergeStyleProps, useTheme, useThrottle } from 'ob-tools'
import { RouterLink } from 'vue-router'
import _style, { labelStyle } from './_style'
import type { ITabGroupLabelDataset, ITabGroupProps, ITabGroupSlot } from './_types'
import _default from './_default'

// 参数
const props = withDefaults(defineProps<ITabGroupProps>(), _default)

// 定义插槽内容
const slots = defineSlots<ITabGroupSlot>()

// 定义双向绑定
const model = defineModel()

// 定义错误信息
if (!props.items) {
  throw new Error('😱oh, items 参数 必传！')
}

// 主题
const theme = useTheme()

// 样式
const styleProps = useMergeStyleProps(_default, props, theme)

// 判断是否是路由模式
const route = useRoute()

// 定义渲染组件
const renderCpn = computed(() => props.router ? RouterLink : 'button')
const getCpnProps = (value: string) => (props.router ? { to: value } : {})

// 基本默认活跃值
const defaultActive = computed(() => model.value ?? props.defaultValue ?? props.items[0].value)

// 活跃值
const activeValue = ref(props.router ? route.path : defaultActive.value)

// 发射活跃值更新事件
watch(activeValue, value => model.value = value)

// 判断是否加载完成
const isLoad = ref(false)

// 标签ref
const labelRef = ref<HTMLButtonElement[] | InstanceType<typeof RouterLink>[]>([])

// 指示器偏移量
const beforeStyle = reactive({
  offsetLeft: '0px',
  height: '0px',
  width: '0px',
})

// 更改偏移量
function changeOffset() {
  // 获取活跃标签
  const target = labelRef.value.find((item: any) => {
    // 判断是否是路由模式
    if (props.router) {
      return item.$el.dataset.value === activeValue.value
    }

    return item.dataset.value === activeValue.value
  })

  if (!target) {
    return
  }

  // 获取节点
  const targetNode = (target as any).$el || target

  beforeStyle.offsetLeft = `${targetNode.offsetLeft}px`
  beforeStyle.height = `${targetNode.offsetHeight}px`
  beforeStyle.width = `${targetNode.offsetWidth}px`
}

// 点击label
function handleClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  const buttonEl = target.closest(`.label-box > [data-value]`) as HTMLButtonElement | HTMLLinkElement

  // 如果点击的不是标签，返回
  if (!buttonEl || !labelRef.value?.find((item: any) => (item.$el || item) === buttonEl)) {
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
    :class="cn('label-box', _style(styleProps), isLoad && 'before:(transition-all visible)', boxClass)"
    @click="handleClick"
  >
    <component
      :is="renderCpn"
      v-bind="getCpnProps(item.value)"
      v-for="item in items"
      :key="item.value"
      ref="labelRef"
      :class="cn(labelStyle(styleProps), isLoad && 'data-[active=true]:bg-transparent', labelClass)"
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
    </component>
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
