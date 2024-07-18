<script setup lang="ts">
import { provide } from 'vue'
import { PROVIDER_KEY } from '../../index'
import type { IThemeProps } from './_types'
import _default from './_default'

// 定义组件名
defineOptions({ name: 'ObTheme' })

const props = withDefaults(defineProps<IThemeProps>(), _default)

// 将样式提供给子组件
provide(PROVIDER_KEY.THEME, props)
</script>

<template>
  <slot />
</template>
