<script setup lang="ts">
import type { ISectionProps } from './_types'

defineProps<ISectionProps>()
</script>

<template>
  <div class="w-full flex flex-col gap-2 overflow-auto" v-bind="$attrs">
    <h2 class="text-2xl font-bold">
      {{ title }}
    </h2>

    <div class="flex flex-col gap-4 rounded-lg bg-white p-2">
      <slot />
    </div>
  </div>
</template>
