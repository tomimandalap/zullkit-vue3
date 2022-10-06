import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos'

import App from './App.vue'
import router from './router'

import './assets/css/styles.css'
import 'aos/dist/aos.css'

AOS.init({
  easing: 'ease-out-cubic',
  once: true,
  offset: 50,
  delay: 50,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
