import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import ComponentBarAppResource from '../../../components/bar/app.vue'
import LazyBarTopDesktop from '~~/components/bar/top/desktop.vue'
import { vuetifyStubs } from '~~/tests/stubs/vuetify'
import { createVuetify } from "vuetify";

describe('Components : App', () => {
  let wrapper: any = null
  
  beforeEach(() => {
    let vuetify;
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
    vuetify = createVuetify();

    wrapper = mount(ComponentBarAppResource, {
      global: {
        stubs: {
          LazyBarTopDesktop,
          ...vuetifyStubs
        },
        plugins: [vuetify],
      }
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
