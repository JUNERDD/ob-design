<script setup lang="ts">
defineOptions({ name: 'HomeDevelopment' })
</script>

<template>
  <div class="mt-4 h-4xl w-full flex-center lt-md:h-30vw lt-xl:h-25rem">
    <ObSpline3d :scene-url="$config.public.splineUnderDevelopmentUrl">
      <ObSpin />
    </ObSpline3d>
  </div>
</template>

<style scoped>

</style>
