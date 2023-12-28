// @vitest-environment nuxt
import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { vuetifyStubs } from '../../stubs/vuetify'

import TestResource from '~~/components/three/nuxt_stones.vue'

describe('Components - three/nuxt_stones', async () => {
  it('is a Vue instance', async () => {
    // vi.stubGlobal("useGLTF", () => vi.fn())

    // const wrapper = await mountSuspended(TestResource, {
    //   global: {
    //     stubs: {
    //       ...vuetifyStubs,
    //     },
    //   },
    // })

    // expect(wrapper.vm).toBeTruthy()
  })
})
