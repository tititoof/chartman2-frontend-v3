import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  plugins: [
  ],
  test: {
    environment: 'nuxt',
    mockReset: true,
    server: {
      deps: { inline: ['vuetify'] },
    },

    environmentOptions: {
      nuxt: {
        domEnvironment: 'happy-dom',
        mock: {
          indexedDb: true,
        },
      },
    },
    globals: true,
    include: ['tests/**/*.nuxt.spec.ts'],
    exclude: ['api', '.nuxt', 'server', 'middleware', 'layouts', 'pages', 'tests', '*.config.ts', '*.d.ts', 'app.vue'],
    setupFiles: ['tests/setup/init.ts'],
    unstubGlobals: true,
    coverage: {
      reporter: 'lcov',
      provider: 'v8',
      include: ['components', 'store', 'pages', 'app'],
      all: true
    }
  },
})