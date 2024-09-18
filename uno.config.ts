import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: /\/packages\/components\/src\/ob\/.*/,
    },
  },
})
