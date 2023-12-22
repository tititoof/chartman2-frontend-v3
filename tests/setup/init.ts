import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
// import { setup } from '@nuxt/test-utils/e2e'

const i18n = createI18n({
  locale: 'fr',
  legacy: false,
  missing: (_, key) => key,
});

config.global.plugins.push(i18n)

// setup({})