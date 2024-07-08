<script setup lang="ts">
const homeStack = useHomeStack()
</script>

<template>
  <div class="grid grid-cols-3 w-full max-w-screen-2xl gap-7">
    <template v-for="item in homeStack" :key="item.icon">
      <ObCard v-bind="item" />
    </template>
  </div>
</template>

<style scoped>

</style>
