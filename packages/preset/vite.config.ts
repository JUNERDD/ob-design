import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'preset',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [/^node:.*/, 'fs', 'path', 'child_process', 'util', 'stream', 'os', 'assert'],
    },
  },
})
