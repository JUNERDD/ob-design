<script setup lang="ts">
defineOptions({ name: 'HomeStack' })

const homeStack = useHomeStack()
</script>

<template>
  <div class="grid grid-cols-3 w-full gap-7 lt-lg:grid-cols-2 lt-sm:grid-cols-1">
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
