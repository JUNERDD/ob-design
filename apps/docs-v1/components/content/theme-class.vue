<script setup lang="ts">
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NuxtPage />
    <!-- 传递主题props -->
    <ObTheme class="max-w-120 bg-red p-5 text-white">
      <ObButton>我是button</ObButton>
      <ObLink>我是link，想不到吧</ObLink>
    </ObTheme>
  </div>
</template>
