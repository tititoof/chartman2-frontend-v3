// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from 'vitest-environment-nuxt/utils'
import { vuetifyStubs } from '../stubs/vuetify'

import TestResource from '~~/layouts/default.vue'

describe('Layouts : default', () => {
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
