<script setup lang="ts">
import { obCva } from '../_utils'
import type { IButtonProps } from './_types'

// 参数
const props = defineProps<IButtonProps>()

const cvaProps = obCva<IButtonProps>('p-1 rounded', {
  variants: {
    size: {
      default: 'bg-red',
      small: 'bg-green',
      large: 'bg-blue',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})
</script>

<template>
  <button :class="cvaProps(props)" v-bind="$attrs">
    <slot />
  </button>
</template>
