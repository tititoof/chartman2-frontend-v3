import { createVuetify, ThemeDefinition } from 'vuetify';
import 'vuetify/styles'; // pre-build css styles

/* Add all components and directives, for dev & prototyping only. */
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

/* Add build-in icon used internally in various components */
/* Described in https://next.vuetifyjs.com/en/features/icon-fonts/ */
import { mdi, aliases as allAliases } from 'vuetify/iconsets/mdi-svg';
const aliases = allAliases;

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#42A5F5',
    accent: '#E0E0E0',
    secondary: '#FFCA28',
    info: '#26A69A',
    warning: '#FFC107',
    error: '#FF7043',
    success: '#66BB6A',
    background: '#FFFFFF',
    surface: '#FFFFFF',
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      }
    },
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});