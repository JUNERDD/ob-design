<script setup>
defineOptions({ name: 'PageIndex' })
</script>

<template>
  <div class="w-full flex-col flex items-center justify-center gap-3">
    <!-- 欢迎组件 -->
    <HomeWelcome />

    <!-- 技术栈 -->
    <HomeStack />

    <!-- 开发中 -->
    <HomeDevelopment />
  </div>
</template>
