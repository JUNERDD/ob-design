<script setup lang="ts">
import type { ISectionProps } from './_types'

// 定义组件名
defineOptions({ name: 'ObSection' })

defineProps<ISectionProps>()
</script>

<template>
  <div class="w-full flex flex-col gap-2 overflow-auto">
    <NuxtLink :to="`#${$attrs.id}`" class="text-2xl font-bold">
      {{ title }}
    </NuxtLink>

    <div class="flex flex-col bg-white gap-4 rounded-lg p-2">
      <slot />
    </div>
  </div>
</template>
