import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia, PiniaCustomStateProperties, Store } from 'pinia'
import { vuetifyStubs } from '~~/tests/stubs/vuetify'
import { createVuetify } from "vuetify";
import { useSidebarsStore } from "~/store/sidebars";
import { useUserStore } from "~/store/user";

import ComponentBarAppResource from '../../../components/bar/app.vue'
import LazyBarTopDesktop from '../../../components/bar/top/desktop.vue'

describe('Components : App', () => {
  let wrapper: any = null
  // @ts-ignore
  let sideBarStore = null
  let userStore = null

  beforeEach(() => {
    let vuetify;
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
    vuetify = createVuetify();
    // @ts-ignore
    sideBarStore = useSidebarsStore()
    userStore = useUserStore()

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

  it('toggle bottom bar', () => {
    // @ts-ignore
    expect(sideBarStore.getBottom).toBeFalsy()
    
    wrapper.vm.toggle()

    // @ts-ignore
    expect(sideBarStore.getBottom).toBeTruthy()
  })
})
