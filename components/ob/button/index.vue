<script setup lang="ts">
import { cn } from 'ob-lib'
import { useTheme } from 'ob-config'
import _default from './_default'
import _style from './_style'
import type { IButtonProps } from './_types'

// 参数
const props = withDefaults(defineProps<IButtonProps>(), _default)

// 主题
const theme = useTheme()
</script>

<template>
  <button :class="cn(_style({ ...props, ...theme }), props.class)" v-bind="$attrs">
    <slot />
  </button>
</template>
