<script setup lang="ts">
  const emits = defineEmits(['click-event']);
  const clickEvent = () => emits('click-event');
</script>

<template>
  <button type="button" @click="clickEvent" class="base-btn">
    <slot />
  </button>
</template>

<style scoped>
  .base-btn {
    width: 80px;
    height: 80px;
    margin: 20px;
  }
</style>
