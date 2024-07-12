<script setup lang="ts">
import { cn } from 'ob-lib'
import { useMergeStyleProps, useTheme } from 'ob-tools'
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
  <div :class="cn(_style(styleProps), props.class)">
    <div :class="cn(lineStyle)" />
    <div :class="cn(lineStyle, 'animate-delay-60 opacity-80')" />
    <div :class="cn(lineStyle, 'animate-delay-120 opacity-60')" />
    <div :class="cn(lineStyle, 'animate-delay-180 opacity-40')" />
    <div :class="cn(lineStyle, 'animate-delay-240 opacity-20')" />
    <div :class="cn(lineStyle, 'animate-delay-300 opacity-10')" />
  </div>
</template>

<style scoped>
</style>
