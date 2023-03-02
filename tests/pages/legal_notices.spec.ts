import { describe, it, expect, beforeEach, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useScroll } from '~~/composables/useScroll'
import { vuetifyStubs } from '../stubs/vuetify'

import LegalNoticesResource from '../../pages/legal_notices.vue'
import PartialLegalNotices from '../../components/partial/legal_notices.vue'

describe('Pages : legal_notices', () => {
  let wrapper: any = null
  
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())

    wrapper = mount(LegalNoticesResource, {
      global: {
        stubs: {
          PartialLegalNotices,
          ...vuetifyStubs
        },
      }
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  
  it ('components should be imported', () => {
    expect(useScroll).toBeDefined()
    expect(PartialLegalNotices).toBeDefined()
  })
})
