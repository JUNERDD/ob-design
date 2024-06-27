<script setup lang="ts">
import { PROVIDER_KEY } from '../../_config'
import type { IThemeProps } from './_types'

const props = defineProps<IThemeProps>()

// 将样式提供给子组件
provide(PROVIDER_KEY.THEME, props)
</script>

<template>
  <slot />
</template>
