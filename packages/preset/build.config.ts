import { defineBuildConfig } from 'unbuild'

// 打包配置
export default defineBuildConfig({
  entries: [
    { builder: 'mkdist', input: './src', outDir: './dist', pattern: ['./**/*.ts'], format: 'cjs', loaders: ['js'] },
    { builder: 'mkdist', input: './src', outDir: './dist', pattern: ['./**/*.ts'], format: 'esm', loaders: ['js'] },
  ],
  declaration: true,
  clean: true,
})
