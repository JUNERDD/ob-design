<script setup lang="ts">
</script>

<template>
  <div class="w-full flex-center-i flex-col bg-white c-black font-sans">
    <!-- 顶部 -->
    <LayoutTop />

    <!-- 主体 -->
    <slot />

    <!-- 底部 -->
    <LayoutBottom />
  </div>
</template>

<style scoped>

</style>
