import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    reporters: ['vitest-sonar-reporter'],
    outputFile: 'sonar-report.xml',
    globals: true,
    include: ['tests/**/*.nuxt.spec.ts'],
    setupFiles: ['tests/setup/init.ts'],
    coverage: {
      reporter: 'lcov',
      provider: 'v8',
      include: ['layouts', 'components', 'store', 'pages'],
      // all: true
    }
  },
})