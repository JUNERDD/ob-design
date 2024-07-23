import { createApp } from 'vue'
import './style.css'
import obdesign from '@obdesign/components/plugin'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

createApp(App).use(ElementPlus).use(obdesign).mount('#app')
