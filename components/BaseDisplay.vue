<script setup lang="ts">
  const props = defineProps({ count: Number });
  console.log(props.count);
</script>

<template>
  <p class="base-display">{{ props.count }}</p>
</template>

<style scoped>
.base-display {
  text-align: center;
}
</style>
