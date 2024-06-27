<script setup lang="ts">
import _default from './_default'
import _style from './_style'
import type { IButtonProps } from './_types'

// 参数
const props = withDefaults(defineProps<IButtonProps>(), _default)

// 主题
// const theme = inject<IThemeProps>(PROVIDER_KEY.THEME, {})
</script>

<template>
  <!-- <button :class="cn([theme?.class, _style(props)])" v-bind="$attrs"> -->
  <button :class="_style(props)" v-bind="$attrs">
    <slot />
  </button>
</template>
