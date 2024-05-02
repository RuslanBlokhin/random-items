<script setup lang="ts">
import { useItemsStore } from '../stores/items'
import { onBeforeMount, computed } from 'vue'
import VerticalItem from './VerticalItem.vue'

const store = useItemsStore()

const verticalItems = computed(() => store.getVerticalItems.value)

onBeforeMount(() => {
  store.addVerticalItems()
})
</script>

<template>
  <ul class="vertical-list">
    <VerticalItem v-for="v in verticalItems" :key="v.id" />
  </ul>
</template>

<style>
.vertical-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 15px;
}
</style>
