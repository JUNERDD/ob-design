<script setup lang="ts">
import { cn } from 'ob-lib'
import { useMergeStyleProps, useTheme } from 'ob-tools'
import _default from './_default'
import _style from './_style'
import type { ILinkProps } from './_types'

// 定义组件名
defineOptions({ name: 'ObLink' })

// 参数
const props = withDefaults(defineProps<ILinkProps>(), _default)

// 主题
const theme = useTheme()

// 样式
const styleProps = useMergeStyleProps(_default, props, theme)
</script>

<template>
  <a :href="props.href ?? ''" :class="cn(_style(styleProps), props.class)" @click.prevent="">
    <slot />
  </a>
</template>
