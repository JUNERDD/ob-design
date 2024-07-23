import { createApp } from 'vue'
import './style.css'
import obdesign from '@obdesign/components/plugin'
import App from './App.vue'

import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

createApp(App).use(obdesign).mount('#app')
