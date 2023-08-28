// https://nuxt.com/docs/api/configuration/nuxt-config
import * as CryptoJS from 'crypto-js'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'title', content: '[title]' },
        { name: 'description', content: '[description]' },
        { name: 'og:title', content: '[og:title]' },
        { name: 'og:description', content: '[og:description]' },
        { name: 'og:image', content: '[og:image]' },
        { name: 'og:url', content: '[og:url]' },
        { name: 'twitter:title', content: '[twitter:title]' },
        { name: 'twitter:description', content: '[twitter:description]' },
        { name: 'twitter:image', content: '[twitter:image]' },
        { name: 'twitter:card', content: 'summary' },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL,
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      appName: process.env.APP_NAME,
      appStorageName: process.env.APP_STORAGE_NAME,
      cryptSecretKey: process.env.CRYPT_SECRET_KEY,
      cryptKey: CryptoJS.enc.Utf8.parse(process.env.CRYPT_SECRET_KEY),
      cryptIV: CryptoJS.enc.Utf8.parse(process.env.CRYPT_SECRET_KEY),
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/content',
    'nuxt-vitest',
    'nuxt-snackbar',
  ],
  i18n: {
    langDir: 'locales',
    lazy: true,
    defaultLocale: 'fr',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'my_custom_cookie_name',
    },
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'es',
        file: 'es.json',
      },
      {
        code: 'fr',
        file: 'fr.json',
      },
    ],
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage',
  },
  content: {
    watch: false,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-light',
        default: 'github-dark',
      },
    },
    markdown: {
      tags: {
        code: 'code',
      },
    },
  },
  snackbar: {
    top: true,
    right: true,
    duration: 5000,
  },
  build: {
    transpile: ['vuetify', '@vuepic/vue-datepicker'],
  },
  vite: {
    server: {
      hmr: {
        protocol: 'wss',
        clientPort: 443,
        port: 24678,
        path: 'hmr/',
        timeout: 3,
      },
    },
  },
})
