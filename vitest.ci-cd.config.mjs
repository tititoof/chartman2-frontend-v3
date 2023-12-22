import { defineVitestConfig } from '@nuxt/test-utils/config'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineVitestConfig({
  plugins: [
    vue(),
    // vuetify(),
  ],
  test: {
    environment: 'nuxt',
    server: {
      deps: { inline: ['vuetify'] },
    },
    globals: true,
    include: ['tests/**/*.nuxt.spec.ts'],
    exclude: ['api', '.nuxt', 'server', 'middleware', 'layouts', 'pages', 'tests', '*.config.ts', '*.d.ts', 'app.vue'],
    reporters: ['vitest-sonar-reporter'],
    outputFile: 'sonar-report.xml',
    setupFiles: ['tests/setup/init.ts'],
    coverage: {
      reporter: 'lcov',
      provider: 'v8',
      include: ['layouts', 'components', 'store', 'pages', 'app'],
      // all: true
    }
  },
})