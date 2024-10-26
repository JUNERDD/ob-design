import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Component from 'unplugin-vue-components/vite'
import obdesignAutoImport from 'obdesign/auto'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(), AutoImport({
    resolvers: [ElementPlusResolver()],
  }), Component({
    resolvers: [obdesignAutoImport(), ElementPlusResolver()],
  })],
})
