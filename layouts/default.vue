<script setup lang="ts">
</script>

<template>
  <div class="w-screen flex-center-i flex-col gap-8 bg-white p-8 c-black font-sans">
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
