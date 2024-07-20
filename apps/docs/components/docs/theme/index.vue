<script setup lang="ts">
import type { VariantPropsType } from 'obdesign'
import { ObButton } from 'obdesign'
// import { uuid } from 'ob-lib'

// 主题类型
const typeList: { value: VariantPropsType, label: string }[] = [
  { value: 'primary', label: '主要' },
  { value: 'success', label: '成功' },
  { value: 'warning', label: '警告' },
  { value: 'danger', label: '危险' },
  { value: 'info', label: '信息' },
]

// 类型
const variant = ref<VariantPropsType>('primary')
</script>

<template>
  <div class="w-full flex flex-col items-start gap-2">
    <div class="flex items-center gap-2">
      <span>选择类型：</span>
      <ObButton v-for="item in typeList" :key="item.value" variant="info" size="small" @click="variant = item.value">
        {{ item.label }}
      </ObButton>
    </div>
    <!-- <ObTheme :key="uuid()" :variant> -->
    <ObTheme :variant>
      <ObButton>
        按钮
      </ObButton>
    </ObTheme>
  </div>
</template>
