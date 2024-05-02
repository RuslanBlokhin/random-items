import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { IVerticalItem } from '../models/item.model'
import { v4 as uuidv4 } from 'uuid'
import { getRandomArbitrary } from '../helpers/randomNumbers'

export const useItemsStore = defineStore('items', () => {
  const verticalItems = ref<Array<IVerticalItem>>([])

  const getVerticalItems = computed(() => verticalItems)

  function addVerticalItems() {
    const newArr = []
    const randomNumber = getRandomArbitrary(100, 200)

    for (let i = 0; i < randomNumber; i++) {
      const newItem = { id: uuidv4() }
      newArr.push(newItem)
    }
    verticalItems.value = newArr
  }

  return {
    getVerticalItems,
    addVerticalItems,
  }
})
