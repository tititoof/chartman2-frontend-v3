// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { vuetifyStubs } from '../../stubs/vuetify'

import TestResource from '~~/components/button/article.vue'

describe('Components - button/article', async () => {
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
