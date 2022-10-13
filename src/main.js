import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos'

import App from './App.vue'
import router from './router'
import Toaster from '@meforma/vue-toaster'
import Axios from '@/plugins/axios-interceptors'

import './assets/css/styles.css'
import 'aos/dist/aos.css'

// axios interceptor
Axios()
AOS.init({
  easing: 'ease-out-cubic',
  once: true,
  offset: 50,
  delay: 50,
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Toaster)
app.mount('#app')
