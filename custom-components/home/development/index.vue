<script setup lang="ts">
import splineUnderDevelopment from '@/assets/spline/under_development.splinecode'

defineOptions({ name: 'HomeDevelopment' })
</script>

<template>
  <div class="mt-8 h-4xl w-full flex-center lt-md:h-md lt-xl:h-xl">
    <ObSpline3d :scene-url="splineUnderDevelopment">
      <ObSpin />
    </ObSpline3d>
  </div>
</template>

<style scoped>

</style>
