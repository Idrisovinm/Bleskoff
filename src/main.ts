import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'

// AutoAnimate
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(App)
const pinia = createPinia()

document.addEventListener('touchstart', () => {}, true)

app.use(autoAnimatePlugin)
app.use(router)
app.use(pinia)

// Глобальные компоненты PrimeVue

app.mount('#app')
