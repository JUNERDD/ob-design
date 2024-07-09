<script setup lang="ts">
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

onMounted(async () => {
  if (!canvas.value) {
    return
  }

  const spline = new Application(canvas.value)
  await spline.load(props.sceneUrl)
  app.value = spline

  emit('ready')
})

onBeforeUnmount(() => {
  app.value?.stop()
})

defineExpose({ app })
</script>

<template>
  <canvas v-show="!!app" ref="canvas" v-bind="canvasProps" />

  <!-- 加载中 -->
  <slot v-if="!app" />
</template>
