<script setup>
const isLoad = ref(true)
</script>

<template>
  <div class="flex flex-col justify-center gap-3">
    <ObLoadingBox v-model="isLoad">
      <div>
        docs
      </div>
    </ObLoadingBox>
    <button @click="isLoad = !isLoad">
      改变
    </button>
  </div>
</template>
