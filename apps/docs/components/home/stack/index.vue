<script setup lang="ts">
import { ObCard } from 'obdesign'

defineOptions({ name: 'HomeStack' })

const homeStack = useHomeStack()
</script>

<template>
  <div class="w-full grid grid-cols-3 max-w-screen-2xl gap-7 px-8 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
    <template v-for="item in homeStack" :key="item.icon">
      <ObCard v-bind="item">
        <template v-if="item.title === 'Typescript'" #icon>
          TS
        </template>
      </ObCard>
    </template>
  </div>
</template>

<style scoped>

</style>
