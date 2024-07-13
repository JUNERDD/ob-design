<script setup>
const isLoad = ref(true)
</script>

<template>
  <div class="flex flex-col justify-center gap-3">
    <div class="relative h-40 w-40">
      <ObLoadingBox v-model="isLoad" absolute>
        <div class="flex-center gap-3 bg-red">
          docs
        </div>
      </ObLoadingBox>
    </div>
    <button @click="isLoad = !isLoad">
      改变
    </button>
  </div>
</template>
