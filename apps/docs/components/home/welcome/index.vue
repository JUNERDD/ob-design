<script setup lang="ts">
import { ObSpline3d } from 'obdesign'
import splineWelcome from '@/assets/spline/welcome.splinecode'

defineOptions({ name: 'HomeWelcome' })
</script>

<template>
  <div class="h-4xl w-full flex-center lt-md:h-md lt-lg:h-2xl">
    <ObSpline3d :scene-url="splineWelcome" class="animate-zoom-in-down" />
  </div>
</template>

<style scoped>
</style>
