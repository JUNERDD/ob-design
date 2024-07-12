<script setup lang="ts">
import splineWelcomeUrl from '@/assets/spline/welcome_url.splinecode'

defineOptions({ name: 'HomeWelcome' })
</script>

<template>
  <div class="h-4xl w-full flex-center lt-lg:h-2xl lt-md:h-md">
    <ObSpline3d :scene-url="splineWelcomeUrl" class="animate-in animate-duration-1500 fade-in zoom-in-80 slide-in-from-b-5">
      <ObSpin />
    </ObSpline3d>
  </div>
</template>

<style scoped>

</style>
