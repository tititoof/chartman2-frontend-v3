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
    setupFiles: ['tests/setup/init.ts'],
    coverage: {
      reporter: 'lcov',
      provider: 'v8',
      include: ['layouts', 'components', 'store', 'pages'],
      all: true
    }
  },
})