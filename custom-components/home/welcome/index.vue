<script setup lang="ts">
defineOptions({ name: 'HomeWelcome' })
</script>

<template>
  <div class="h-4xl w-full flex-center lt-lg:h-2xl lt-md:h-md">
    <ObSpline3d :scene-url="$config.public.splineWelcomeUrl">
      <ObSpin />
    </ObSpline3d>
  </div>
</template>

<style scoped>

</style>
