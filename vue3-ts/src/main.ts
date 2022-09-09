import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from '@/router'
import { store, key } from '@/store'

createApp(App).use(router).use(store, key).use(ElementPlus).mount('#app')
