import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { createVuetify } from "vuetify";
import { vuetifyStubs } from '~~/tests/stubs/vuetify'

import MyRorDesignResource from '../../../pages/blog/my_ror_design.vue'
import BlogMyrordesignIntroduction from '../../../components/blog/myrordesign/introduction.vue';
import BlogMyrordesignRorDesign from '../../../components/blog/myrordesign/ror_design.vue';
import BlogMyrordesignMyRorDesign from '../../../components/blog/myrordesign/my_ror_design.vue';
import BlogMyrordesignExemple from '../../../components/blog/myrordesign/exemple.vue';
import BlogMyrordesignConclusion from '../../../components/blog/myrordesign/conclusion.vue';

describe('Pages : blog/my_ror_design', () => {
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
          BlogMyrordesignIntroduction,
          BlogMyrordesignRorDesign,
          BlogMyrordesignMyRorDesign,
          BlogMyrordesignExemple,
          BlogMyrordesignConclusion,
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
    expect(BlogMyrordesignIntroduction).toBeDefined()
    expect(BlogMyrordesignRorDesign).toBeDefined()
    expect(BlogMyrordesignMyRorDesign).toBeDefined()
    expect(BlogMyrordesignExemple).toBeDefined()
    expect(BlogMyrordesignConclusion).toBeDefined()
  })
})