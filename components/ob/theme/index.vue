<script setup lang="ts">
import { PROVIDER_KEY } from 'ob-tools'
import type { IThemeProps } from './_types'
import _default from './_default'

const props = withDefaults(defineProps<IThemeProps>(), _default)

// 将样式提供给子组件
provide(PROVIDER_KEY.THEME, props)
</script>

<template>
  <slot />
</template>
