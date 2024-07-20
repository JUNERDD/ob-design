<script setup lang="ts">
import { ObSpin, cn } from '../../index'
import type { ILoadingBoxProps } from './_types'
import _default from './_default'
import { maskBoxStyle, maskStyle, spinStyle } from './_style'

// 参数
withDefaults(defineProps<ILoadingBoxProps>(), _default)

// 双向绑定
const model = defineModel()
</script>

<template>
  <!-- 普通模式：toggle -->
  <Transition v-if="!maskMode" mode="out-in" v-bind="transitionProps">
    <ObSpin v-if="model" v-bind="spinProps" :class="cn(spinStyle, spinClass)" />
    <slot v-else />
  </Transition>

  <!-- 遮罩模式：撑满当前盒子 -->
  <template v-else>
    <Transition v-bind="transitionProps">
      <div v-if="model" :class="cn(maskBoxStyle, maskBoxClass)">
        <div :class="cn(maskStyle, maskClass)" />
        <ObSpin v-bind="spinProps" :class="cn(spinStyle, 'absolute', spinClass)" />
      </div>
    </Transition>
    <slot />
  </template>
</template>

<style scoped>
</style>
