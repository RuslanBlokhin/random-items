import type { Directive } from 'vue'
import { getRandomArbitrary } from '../helpers/randomNumbers'

export const vChangeNumber: Directive<HTMLElement> = {
  mounted(el) {
    let intervalIds: Array<number> = []

    var Visible = function (target: HTMLElement) {
      // Все позиции элемента
      var targetPosition = {
          top: window.pageYOffset + target.getBoundingClientRect().top,
          left: window.pageXOffset + target.getBoundingClientRect().left,
          right: window.pageXOffset + target.getBoundingClientRect().right,
          bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
        },
        // Получаем позиции окна
        windowPosition = {
          top: window.pageYOffset,
          left: window.pageXOffset,
          right: window.pageXOffset + document.documentElement.clientWidth,
          bottom: window.pageYOffset + document.documentElement.clientHeight,
        }

      if (
        targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right
      ) {
        // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        console.clear()
        console.log('Вы видите элемент :)')

        const intervalId = setInterval(() => {
          const elemCount = el.childElementCount
          const rundomElemId = Math.floor(Math.random() * elemCount)

          const elemChildrenArr = Array.from(el.children)
          const currElem = elemChildrenArr.find((item, index) => rundomElemId === index)
          console.log('Вы видите элемент :)')

          if (currElem) currElem.textContent = String(getRandomArbitrary(100, 200))
        }, 1000)
        intervalIds.push(intervalId)
      } else {
        // Если элемент не видно, то запускаем этот код
        console.clear()
        intervalIds.forEach(id => {
          clearInterval(id)
        })
      }
    }

    // Запускаем функцию при прокрутке страницы
    window.addEventListener('scroll', function () {
      Visible(el)
    })

    // А также запустим функцию сразу. А то вдруг, элемент изначально видно
    Visible(el)
  },
}
