<script setup lang="ts">
import { ObButton, ObLink, ObSpin, ObTabGroup, ObTheme } from '@obdesign/components'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- 传递主题props -->
    <ObTheme class="max-w-120 bg-red p-5 c-white">
      <ObButton>Hello World</ObButton>
      <ObLink>Hello World</ObLink>
      <ObSpin />
    </ObTheme>
  </div>
</template>
