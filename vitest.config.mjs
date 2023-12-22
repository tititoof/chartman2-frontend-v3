// import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from '@nuxt/test-utils/config'
// import vuetify from 'vite-plugin-vuetify'
// import vue from '@vitejs/plugin-vue'

export default defineVitestConfig({
  plugins: [
    // vue(),
    // vuetify(),
  ],
  test: {
    environment: 'nuxt',
    mockReset: true,
    server: {
      deps: { inline: ['vuetify'] },
    },
    // testTimeout: 50000,
    // environmentOptions: {
    //   nuxt: {
    //     overrides: {
    //       appConfig: {
    //         nuxt: {
    //           buildId: 'override'
    //         }
    //       }
    //     }
    //   }
    // },
    environmentOptions: {
      nuxt: {
        // rootDir: fileURLToPath(new URL('./', import.meta.url)),
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
    // unstubGlobals: true,
    coverage: {
      reporter: 'lcov',
      provider: 'v8',
      include: ['layouts', 'components', 'store', 'pages', 'app'],
      all: true
    }
  },
})