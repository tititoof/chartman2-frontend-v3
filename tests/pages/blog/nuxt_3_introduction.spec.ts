import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { createVuetify } from "vuetify";
import { vuetifyStubs } from '~~/tests/stubs/vuetify'

import Nuxt3IntroductionResource from '../../../pages/blog/nuxt_3_introduction.vue'
import BlogNuxtthirdIntroduction from '../../../components/blog/nuxtthird/introduction.vue';

describe('Pages : blog/nuxt_3_introduction', () => {
  let wrapper: any = null
  
  beforeEach(() => {
    let vuetify;
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
    vuetify = createVuetify();

    wrapper = mount(Nuxt3IntroductionResource, {
      global: {
        stubs: {
          BlogNuxtthirdIntroduction,
          ...vuetifyStubs
        },
        plugins: [vuetify],
      }
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it ('components should be imported', () => {
    expect(BlogNuxtthirdIntroduction).toBeDefined()
  })
})