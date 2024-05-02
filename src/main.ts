import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import App from './App.vue'
import { vChangeNumber } from './directives/vChangeNumber'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.directive('change-number', vChangeNumber)
app.mount('#app')
