// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from 'vitest-environment-nuxt/utils'
import { vuetifyStubs } from '../../stubs/vuetify'

import TestResource from '~~/components/navigation/left.vue'

describe('Components - navigation/left', () => {
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
