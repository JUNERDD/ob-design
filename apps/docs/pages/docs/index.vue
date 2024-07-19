<script setup>
import { ObButton, ObLoadingBox } from '@ob-design/components'

const isLoad = ref(true)
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-3">
    <div class="relative h-40 w-120 overflow-hidden border rounded-2xl">
      <ObLoadingBox v-model="isLoad" mask-mode>
        <div class="h-10 w-full flex-center gap-3 bg-red">
          docs
        </div>
      </ObLoadingBox>
    </div>
    <ObButton @click="isLoad = !isLoad">
      更改加载状态
    </ObButton>
  </div>
</template>
