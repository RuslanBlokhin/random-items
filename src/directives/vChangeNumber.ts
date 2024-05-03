import type { Directive } from 'vue'
import { getRandomArbitrary } from '../helpers/randomNumbers'

const throttle = (callee: Function, timeout: number) => {
  let timer: number
  return function perform(...args: string[]) {
    if (timer) return
    timer = setTimeout(() => {
      callee(...args)
      clearTimeout(timer)
      timer = 0
    }, timeout)
  }
}

let intervalIds: Array<number> = []

window.addEventListener('scroll', function () {
  intervalIds.forEach(id => {
    clearInterval(id)
  })
  intervalIds = []
})

export const vChangeNumber: Directive<HTMLElement> = {
  mounted(el) {
    const visible = () => {
      let targetPosition = {
          top: window.scrollY + el.getBoundingClientRect().top,
          left: window.scrollX + el.getBoundingClientRect().left,
          right: window.scrollX + el.getBoundingClientRect().right,
          bottom: window.scrollY + el.getBoundingClientRect().bottom,
        },
        windowPosition = {
          top: window.scrollY,
          left: window.scrollX,
          right: window.scrollX + document.documentElement.clientWidth,
          bottom: window.scrollY + document.documentElement.clientHeight,
        }

      if (
        targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right
      ) {
        const intervalId = setInterval(() => {
          const elemCount = el.childElementCount
          const rundomElemId = Math.floor(Math.random() * elemCount)

          const elemChildrenArr = Array.from(el.children)
          const currElem = elemChildrenArr.find((_item, index) => rundomElemId === index)
          console.log('Смена элементов')

          if (currElem) currElem.textContent = String(getRandomArbitrary(100, 200))
        }, 1000)
        if (intervalId) intervalIds.push(intervalId)
      } else {
        console.log('Элементов скрыто 👀')
      }
    }

    function fn() {
      return visible
    }

    const throttleVisible = throttle(fn(), 1000)

    window.addEventListener('scroll', function () {
      throttleVisible()
    })

    visible()
  },
}
