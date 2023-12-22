// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { vuetifyStubs } from '../stubs/vuetify'

import TestResource from '~~/pages/articles.vue'

describe('Pages : articles', () => {
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
