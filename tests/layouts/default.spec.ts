
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { vuetifyStubs } from '../stubs/vuetify'
import { createVuetify } from "vuetify";

import LayoutDefaultResource from '~~/layouts/default.vue'
import BarApp from '../../components/bar/app.vue'
import LazyBarTopPhone from '../../components/bar/top/phone.vue'
import BarBottomGuest from '../../components/bar/bottom/guest.vue'

describe('Pages : index', () => {
  let wrapper: any = null
  
  beforeEach(() => {
    let vuetify;
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
    vuetify = createVuetify();

    wrapper = mount(LayoutDefaultResource, {
      global: {
        stubs: {
          BarApp,
          LazyBarTopPhone,
          BarBottomGuest,
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
