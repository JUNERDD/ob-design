<script setup lang="tsx">
import type { ILoadingBoxProps } from './_types'
import _default from './_default'

// 参数
const props = withDefaults(defineProps<ILoadingBoxProps>(), _default)

// 是否是绝对定位
const absolute = computed(() => props.absolute)

// 双向绑定
const model = defineModel()
</script>

<template>
  <Transition
    enter-active-class="animate-fade-in animate-duration-250"
    leave-active-class="animate-fade-out animate-duration-250"
    :mode="absolute ? 'in-out' : 'out-in'"
    v-bind="transitionProps"
  >
    <ObSpin
      v-if="model" v-bind="spinProps"
      class="left-1/2 top-1/2 translate-x--1/2 translate-y--1/2"
      :class="absolute ? 'absolute' : ''"
    />
    <slot v-else />
  </Transition>
</template>

<style scoped>
</style>
