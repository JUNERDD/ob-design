<script setup>
import { ObButton, ObLoadingBox, ObTabGroup } from 'obdesign'
import { ref } from 'vue'

// 初始化tab值
const tabValue = defineModel({ default: '/docs' })

// tab组件
const items = [
  { label: '首页', value: '/' },
  { label: '文档', value: '/docs' },
  { label: '组件', value: '/docs/components' },
]

// 加载状态
const isLoad = ref(true)
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center gap-2xl">
    <ObButton class="mx-auto" variant="danger">
      按钮
    </ObButton>

    <Suspense>
      <ObTabGroup v-model="tabValue" class="lt-sm:hidden" :items />
    </Suspense>

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
  </div>
</template>

<style scoped>
</style>
