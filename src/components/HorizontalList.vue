<script setup lang="ts">
import { IHorizontalItem } from '../models/item.model'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import HorizontalItem from './HorizontalItem.vue'
import { getRandomArbitrary, getRandomInt } from '../helpers/randomNumbers'

const horizontalItems = ref<Array<IHorizontalItem>>([])

const newArr = []
const itemsQuantity = getRandomArbitrary(10, 30)
for (let i = 0; i < itemsQuantity; i++) {
  const newItem = { id: uuidv4(), number: getRandomInt(100) }
  newArr.push(newItem)
}
horizontalItems.value = newArr
</script>

<template>
  <ul v-change-number class="horizontal-list">
    <HorizontalItem v-for="h in horizontalItems" :key="h.id" :number="h.number" />
  </ul>
</template>

<style>
.horizontal-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 20px;
  row-gap: 20px;
}
</style>
