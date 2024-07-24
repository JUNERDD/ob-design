import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import Component from 'unplugin-vue-components/vite'
import obdesignAutoImport from 'obdesign/auto'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(), Component({
    resolvers: [obdesignAutoImport()],
  })],
})
