import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { vuetifyStubs } from '~~/tests/stubs/vuetify'
import { createVuetify } from "vuetify";
import { useSidebarsStore } from "~/store/sidebars";
import { useUserStore } from "~/store/user";

import ComponentContactMe from '../../../components/partial/contact_me.vue'

describe('Components : ContactMe', () => {
  let wrapper: any = null
  // @ts-ignore
  let sideBarStore = null

  beforeEach(() => {
    let vuetify;
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
    vuetify = createVuetify();
    // @ts-ignore
    sideBarStore = useSidebarsStore()

    wrapper = mount(ComponentContactMe, {
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

  it('expect form values', () => {
    expect(wrapper.vm.valid).toBeFalsy()
    expect(wrapper.vm.name).toEqual("")
    expect(wrapper.vm.email).toEqual("")
    expect(wrapper.vm.subject).toEqual("")
    expect(wrapper.vm.message).toEqual("")
  })
})
