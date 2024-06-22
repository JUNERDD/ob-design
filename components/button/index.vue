<script setup lang="ts">
import { cva } from 'class-variance-authority'
import type { IButtonProps } from './_types'

// 参数
withDefaults(defineProps<IButtonProps>(), {
  size: 'default',
})

const buttonCVA = cva('btn', {
  variants: {
    size: {
      default: 'bg-red',
      small: 'bg-blue',
      large: 'bg-green',
    },
  },
})
</script>

<template>
  <button :class="buttonCVA({ size })">
    <slot />
  </button>
</template>
