<script setup lang="ts">
import { cn, useMergeStyleProps, useTheme } from '../../index'
import _default from './_default'
import type { ICardProps } from './_types'
import _style, { contentBoxStyle, iconBoxStyle, iconStyle, textStyle, titleStyle } from './_style'

// 定义组件名
defineOptions({ name: 'ObCard' })

// 参数
const props = withDefaults(defineProps<ICardProps>(), _default)

// 主题
const theme = useTheme()

// 样式
const styleProps = useMergeStyleProps(_default, props, theme)
</script>

<template>
  <div :class="cn(_style(styleProps), props.class)">
    <!-- 图标 -->
    <div :class="cn(iconBoxStyle, iconBoxClass)">
      <slot name="icon">
        <i :class="cn(iconStyle, icon, iconClass)" />
      </slot>
    </div>

    <!-- 标题 -->
    <div :class="cn(contentBoxStyle, contentBoxClass)">
      <div :class="cn(titleStyle, titleClass)">
        {{ title }}
      </div>

      <!-- 内容 -->
      <div :class="cn(textStyle, textClass)">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
