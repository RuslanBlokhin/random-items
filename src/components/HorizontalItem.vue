<script setup lang="ts">
defineProps<{
  number: number
}>()
</script>
<template>
  <li class="horizontal-item">{{ number }}</li>
</template>

<style scoped>
.horizontal-item {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: rgb(236, 191, 107);
  cursor: pointer;
  transition: scale 100ms ease-in;
}
.horizontal-item:hover {
  scale: 0.8;
}
</style>
