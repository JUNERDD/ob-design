<script setup lang="ts">
// 定义组件名
defineOptions({ name: 'ObModal' })

// 定义弹窗ref
const dialogRef = ref<null | HTMLDialogElement>(null)
</script>

<template>
  <dialog ref="dialogRef">
    123
  </dialog>
</template>

<style scoped>

</style>
