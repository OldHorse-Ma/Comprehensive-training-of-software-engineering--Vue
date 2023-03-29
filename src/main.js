import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import TDesign from 'tdesign-vue-next'

import 'tdesign-vue-next/es/style/index.css'
import axios from 'axios'

const app = createApp(App)
app.use(store).use(router).use(TDesign).mount('#app')
axios.defaults.baseURL = 'http://oldhorse.vhka.site:8800'
app.config.globalProperties.$http = axios
