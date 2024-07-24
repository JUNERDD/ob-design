<script setup lang="ts">
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- 传递主题props -->
    <ObTheme variant="success" size="small">
      <ObButton>Hello World</ObButton>
      <ObLink>Hello World</ObLink>

      <ObTabGroup :items="[{ label: 'label 01', value: '1' }, { label: 'label 02', value: '2' }, { label: 'label 03', value: '3' }]" />

      <ObSpin />

      <!-- 子组件props会覆盖父组件props -->
      <ObButton variant="info" size="large" class="w-full">
        我覆盖了Token
      </ObButton>
    </ObTheme>
  </div>
</template>
