<script setup lang="ts">
import { cn, useMergeStyleProps, useTheme } from '../../index'
import _default from './_default'
import _style from './_style'
import type { IButtonProps } from './_types'

// 定义组件名
defineOptions({ name: 'ObButton' })

// 参数
const props = withDefaults(defineProps<IButtonProps>(), _default)

// 主题
const theme = useTheme()

// 样式
const styleProps = useMergeStyleProps(_default, props, theme)
</script>

<template>
  <button :title :type :class="cn(_style(styleProps), props.class)">
    <!-- 前面插槽 -->
    <slot name="before" />

    <!-- 主内容 -->
    <slot />

    <!-- 后面插槽 -->
    <slot name="after" />
  </button>
</template>
