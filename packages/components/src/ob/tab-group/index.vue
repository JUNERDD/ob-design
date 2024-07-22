<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import { cn, useMergeStyleProps, useTheme, useThrottle } from '../../index'
import type { RouteLocationNormalizedLoaded, _RouterLinkI } from '../../index'
import _style, { labelStyle } from './_style'
import _default from './_default'
import type { ITabGroupLabelDataset, ITabGroupProps, ITabGroupSlot } from './_types'

// 定义组件名
defineOptions({ name: 'ObTabGroup' })

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

// 判断是否是路由模式并懒加载组件和路由对象
let Link: _RouterLinkI | undefined = void 0
let route: RouteLocationNormalizedLoaded | null = null
if (props.router) {
  // 导入路由组件
  Link = defineAsyncComponent({
    loader: () => import('vue-router').then<_RouterLinkI>(model => model.RouterLink),
    onError: () => {
      throw new Error('😱oh, 要想使用路由模式, vue router必须安装！')
    },
  })

  // 导入路由钩子
  const useRoute = await import('vue-router').then(modal => modal.useRoute).catch(() => {
    throw new Error('😱oh, 要想使用路由模式, vue router必须安装！')
  })

  // 获取路由对象
  route = useRoute()

  if (!route) {
    throw new Error('😱oh, 要想使用路由模式, vue router必须安装！')
  }

  // 监听路由变化更改指示器位置
  watch(() => route?.path, () => nextTick(changeOffset))
}

// 定义渲染组件
const renderCpn = computed(() => props.router ? Link : 'button')
const getCpnProps = (value: string) => (props.router ? { to: value } : { type: 'button' })

// 基本默认活跃值
const defaultActive = computed(() => model.value ?? props.defaultValue ?? props.items[0].value)

// 活跃值
const activeValue = ref(props.router ? route?.path : defaultActive.value)

// 判断是否是路由模式监听路有变化
if (props.router) {
  watch(() => route?.path, value => activeValue.value = value)
}

// 活跃值双向绑定modal
watch(activeValue, value => model.value = value)

// 判断是否加载完成
const isLoad = ref(false)

// 标签ref
// const labelRef = ref<HTMLButtonElement[] | InstanceType<typeof RouterLink>[]>([])
const labelRef = ref<any[]>([])

// 获取活跃标签
const activeLabel = computed<HTMLLinkElement | HTMLButtonElement>(() => {
  const target = labelRef.value.find(item => (item?.$el || item).dataset.value === activeValue.value)
  return target?.$el || target
})

// 指示器偏移量
const beforeStyle = reactive({
  offsetLeft: '0px',
  offsetHeight: '0px',
  offsetWidth: '0px',
})

// 是否显示指示器动画
const beforeTransitionProperty = ref('none')

// 更改偏移量
function changeOffset() {
  // 获取活跃标签
  if (!activeLabel.value) {
    return
  }

  // 获取节点
  beforeStyle.offsetLeft = `${activeLabel.value.offsetLeft}px`
  beforeStyle.offsetHeight = `${activeLabel.value.offsetHeight}px`
  beforeStyle.offsetWidth = `${activeLabel.value.offsetWidth}px`
}

// 点击label
function handleClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  const buttonEl = target.closest<HTMLButtonElement | HTMLLinkElement>(`.label-box > [data-value]`)

  // 如果点击的不是标签，返回
  if (!buttonEl || !labelRef.value.find(item => (item.$el || item) === buttonEl)) {
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

  // 指示器加载
  isLoad.value = true

  // 监听窗口变化
  window.addEventListener('resize', changeOffset)

  // 监听子元素变化
  observer.value = new MutationObserver(debounceChangeOffset)
  if (labelBoxRef.value) {
    observer.value?.observe(labelBoxRef.value, { childList: true, subtree: true })
  }

  // 在DOM更新结束之后更新指示器的动画
  setTimeout(() => {
    beforeTransitionProperty.value = 'all'
  }, 1)
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
    :class="cn('label-box', _style(styleProps), isLoad && 'before:visible', boxClass)"
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
  height: v-bind('beforeStyle.offsetHeight');
  width: v-bind('beforeStyle.offsetWidth');
  transition-property: v-bind('beforeTransitionProperty');
}
</style>
