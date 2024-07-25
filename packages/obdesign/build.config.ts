import { defineBuildConfig } from 'unbuild'

// 打包配置
export default defineBuildConfig({
  declaration: true,
  clean: true,
  rollup: {
    output: {
      exports: 'named',
    },
  },
})
