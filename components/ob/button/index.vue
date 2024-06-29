<script setup lang="ts">
import { cn } from 'ob-lib'
import { useMergeStyleProps, useTheme } from 'ob-tools'
import _default from './_default'
import _style from './_style'
import type { IButtonProps } from './_types'

// 参数
const props = withDefaults(defineProps<IButtonProps>(), _default)

// 主题
const theme = useTheme()

// 样式
const styleProps = useMergeStyleProps(_default, props, theme)
</script>

<template>
  <button :class="cn(_style(styleProps), props.class)" v-bind="$attrs">
    <slot />
  </button>
</template>
