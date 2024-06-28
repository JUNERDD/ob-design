<script setup lang="ts">
import { cn } from 'ob-lib'
import _default from './_default'
import _style from './_style'
import type { IButtonProps } from './_types'

// 参数
const props = withDefaults(defineProps<IButtonProps>(), _default)
</script>

<template>
  <button :class="cn(_style(props))" v-bind="$attrs">
    <slot />
  </button>
</template>
