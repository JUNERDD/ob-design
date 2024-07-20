<script setup lang="ts">
import type { ISectionBlockProps } from './_types'

// 定义组件名
defineOptions({ name: 'ObSectionBlock' })

defineProps<ISectionBlockProps>()
</script>

<template>
  <div class="w-full flex flex-col gap-2 overflow-auto">
    <template v-if="title">
      <h4 class="flex items-center gap-1 font-bold before:h-4 before:w-1 before:rounded before:bg-black before:content-empty">
        {{ title }}
      </h4>
    </template>
    <div class="flex items-center gap-2">
      <slot />
    </div>
  </div>
</template>
