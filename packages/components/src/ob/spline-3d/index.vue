<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted, reactive, ref } from 'vue'
import { Application } from '@splinetool/runtime'
import type { IObSpline3dEmits, IObSpline3dProps } from './_types'

// 定义组件名
defineOptions({ name: 'ObSpline3d' })

// 参数
const props = defineProps<IObSpline3dProps>()

// 事件
const emit = defineEmits<IObSpline3dEmits>()

// 实例对象
const canvas = ref<null | HTMLCanvasElement>(null)
const app = ref<null | Application>(null)

// 存储属性
const appConfig = reactive({
  size: { width: 0, height: 0 },
})

onMounted(async () => {
  if (!canvas.value) {
    return
  }

  const spline = new Application(canvas.value)
  await spline.load(props.sceneUrl)
  app.value = spline

  emit('load')
})

onUnmounted(() => {
  app.value?.dispose()
})

onActivated(() => {
  if (!app.value) {
    return
  }

  app.value?.setSize(appConfig.size.width, appConfig.size.height)
  app.value?.play()
})

onDeactivated(() => {
  appConfig.size.width = canvas.value?.width ?? 0
  appConfig.size.height = canvas.value?.height ?? 0

  app.value?.stop()
})

defineExpose({ app })
</script>

<template>
  <canvas v-show="!!app" ref="canvas" v-bind="$attrs" />

  <!-- 加载中 -->
  <slot v-if="!app" />
</template>
