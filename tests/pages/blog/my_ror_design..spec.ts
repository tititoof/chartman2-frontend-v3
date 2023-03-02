import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import MyRorDesignResource from '~~/pages/blog/my_ror_design.vue'
import { createVuetify } from "vuetify";
import { vuetifyStubs } from '~~/tests/stubs/vuetify'

describe('Pages : index', () => {
  let wrapper: any = null
  
  beforeEach(() => {
    let vuetify;
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
    vuetify = createVuetify();

    wrapper = mount(MyRorDesignResource, {
      global: {
        stubs: {
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