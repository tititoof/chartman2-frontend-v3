// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from 'vitest-environment-nuxt/utils'
import { vuetifyStubs } from '../../../stubs/vuetify'

import TestResource from '~~/pages/home/profiles/index.vue'

describe('Pages : home/profiles/index', () => {
  it('is a Vue instance', async () => {

    const wrapper = await mountSuspended(TestResource, {
      global: {
        stubs: {
          ...vuetifyStubs,
        },
      },
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
