<script setup lang="ts">
import { cn, useMergeStyleProps, useTheme } from '../../index'
import _default from './_default'
import _style, { lineStyle } from './_style'
import type { ISpinProps } from './_types'

// 定义组件名
defineOptions({ name: 'ObSpin' })

// 参数
const props = withDefaults(defineProps<ISpinProps>(), _default)

// 主题
const theme = useTheme()

// 样式
const styleProps = useMergeStyleProps(_default, props, theme)
</script>

<template>
  <div :class="cn(_style(styleProps), props.boxClass)">
    <div :class="cn(lineStyle(styleProps), lineClass)" />
    <div :class="cn(lineStyle(styleProps), 'animate-delay-60 opacity-80', lineClass)" />
    <div :class="cn(lineStyle(styleProps), 'animate-delay-120 opacity-60', lineClass)" />
    <div :class="cn(lineStyle(styleProps), 'animate-delay-180 opacity-40', lineClass)" />
    <div :class="cn(lineStyle(styleProps), 'animate-delay-240 opacity-20', lineClass)" />
    <div :class="cn(lineStyle(styleProps), 'animate-delay-300 opacity-10', lineClass)" />
  </div>
</template>

<style scoped>
</style>
