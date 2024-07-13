<script setup lang="ts">
import type { ILoadingBoxProps } from './_types'

// 参数
const props = defineProps<ILoadingBoxProps>()

// 双向绑定
const model = defineModel()
</script>

<template>
  <ObSpin v-if="model" v-bind="props" />
  <slot v-else />
</template>
