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
    }
  },
  plugins: [vue()],
  // plugins: [NuxtVitest()],
  test: {
    globals: true,
    include: ['**/tests/**/**.spec.ts', '**/tests/**/**/**.spec.ts'],
    environment: 'jsdom',
    coverage: {
      include: ['layouts/**', 'components/**', 'store', 'pages'],
      all: true
    }
  },
})