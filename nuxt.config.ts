// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css',],
  build: {
    transpile: ['vuetify'],
  },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/content'],
  i18n: {
    langDir: 'locales',
    lazy: true,
    defaultLocale: 'fr',
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
        file: 'fr.json'
      }
    ],
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      fallbackLocale: 'fr',
      legacy: false,
      locale: 'fr',
      
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        }
      }
    }
  },
  content: {
    highlight: {
      theme: 'monokai'
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
