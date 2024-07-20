import antfu from '@antfu/eslint-config'

const commonEslintConfig = antfu({
  vue: true,
  unocss: true,
  typescript: true,
})

export default commonEslintConfig
