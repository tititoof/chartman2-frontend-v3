// https://nuxt.com/docs/api/configuration/nuxt-config

import * as CryptoJS from 'crypto-js'
const key = CryptoJS.enc.Utf8.parse(process.env.CRYPT_SECRET_KEY)
const iv = CryptoJS.enc.Utf8.parse(process.env.CRYPT_SECRET_KEY)

export default defineNuxtConfig({
  devtools: { enabled: true },
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
        { name: 'twitter:card', content: 'summary' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL,
    cryptSecretKey: process.env.CRYPT_SECRET_KEY,
    cryptKey: key,
    cryptIV: iv
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/content',
    'nuxt-vitest'
  ],
  i18n: {
    langDir: 'locales',
    lazy: true,
    defaultLocale: 'fr',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'my_custom_cookie_name'
    },
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'es',
        file: 'es.json'
      },
      {
        code: 'fr',
        file: 'fr.json',
      }
    ],
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },
  content: {
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-light',
        default: 'github-dark'
      },
    },
    markdown: {
      tags: {
        code: 'code'
      }
    }
  },
  build: {
    transpile: ['vuetify'],
  },
})
