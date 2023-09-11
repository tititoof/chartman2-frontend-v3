import { defineVitestConfig } from 'nuxt-vitest/config'
import vuetify from 'vite-plugin-vuetify'

export default defineVitestConfig({
  plugins: [
    vuetify(),
  ],
  test: {
    environment: 'nuxt',
    deps: { inline: ['vuetify'] },
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