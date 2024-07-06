<script setup lang="ts">
import { Application } from '@splinetool/runtime'
import type { IObSpline3dEmits, IObSpline3dProps } from './_types'

const props = defineProps<IObSpline3dProps>()

const emit = defineEmits<IObSpline3dEmits>()

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

defineExpose({ app })
</script>

<template>
  <section>
    <canvas v-show="!!app" ref="canvas" />

    <!-- 加载中 -->
    <slot v-if="!app" />
  </section>
</template>
