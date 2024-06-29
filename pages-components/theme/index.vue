<script setup lang="ts">
import type { TypePropsType } from 'ob-tools'

// 主题类型
const typeList: { value: TypePropsType, label: string }[] = [
  { value: 'primary', label: '主要' },
  { value: 'success', label: '成功' },
  { value: 'warning', label: '警告' },
  { value: 'danger', label: '危险' },
  { value: 'info', label: '信息' },
]

// 类型
const type = ref<TypePropsType>('primary')
</script>

<template>
  <div class="w-full flex flex-col items-start gap-2">
    <div class="flex items-center gap-2">
      <span>选择类型：</span>
      <ObButton v-for="item in typeList" :key="item.value" type="info" size="small" @click="type = item.value">
        {{ item.label }}
      </ObButton>
    </div>
    <ObTheme :type>
      <ObButton>
        按钮
      </ObButton>
    </ObTheme>
  </div>
</template>
