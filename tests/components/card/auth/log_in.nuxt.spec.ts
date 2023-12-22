// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { vuetifyStubs } from '../../../stubs/vuetify'

import TestResource from '~~/components/card/auth/log_in.vue'

describe('Components - card/auth/log_in', async () => {
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
