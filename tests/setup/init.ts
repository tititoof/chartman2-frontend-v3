import { config } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  missing: (_, key) => key,
});

config.global.plugins.push(i18n);
