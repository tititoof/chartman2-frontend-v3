import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '~': '.',
      '~~': './',
      '@@': '.',
      '@@/': './',
      'public': './public',
      'public/': './public/',
      '#imports': '<rootDir>/.nuxt/imports.d.ts',
    }
  },
  plugins: [vue()],
  // plugins: [NuxtVitest()],
  test: {
    reporters: ['vitest-sonar-reporter'],
    outputFile: 'sonar-report.xml',
    globals: true,
    include: ['**/tests/**/**.spec.ts'],
    environment: 'jsdom',
    coverage: {
      reporter: 'lcov',
      provider: 'c8',
      include: ['layouts', 'components', 'store', 'pages'],
      all: true
    }
  },
})