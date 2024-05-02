<script setup lang="ts">
import HorizontalList from './HorizontalList.vue'
</script>

<template>
  <li class="vertical-item">
    <HorizontalList />
  </li>
</template>

<style>
.vertical-item {
  padding: 20px;
  width: 100%;
  min-height: 80px;
  border-radius: 10px;
  background-color: rgb(252, 183, 194);
}
</style>
