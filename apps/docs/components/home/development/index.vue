<script setup lang="ts">
import { ObSpin, ObSpline3d } from 'obdesign'

import splineUnderDevelopment from '@/assets/spline/under_development.splinecode'

defineOptions({ name: 'HomeDevelopment' })
</script>

<template>
  <div class="w-full flex-center mt-8 h-4xl lt-md:h-md lt-xl:h-xl">
    <ObSpline3d :scene-url="splineUnderDevelopment">
      <ObSpin />
    </ObSpline3d>
  </div>
</template>

<style scoped>

</style>
