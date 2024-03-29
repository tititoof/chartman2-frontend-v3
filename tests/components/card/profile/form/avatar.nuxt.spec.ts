// @vitest-environment nuxt
import { describe, it, expect, vi } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import { vuetifyStubs } from '~/tests/stubs/vuetify'

import TestResource from '~~/components/card/profile/form/avatar.vue'

mockNuxtImport('useAsyncData', () => {
  return vi.fn()
})

describe('Components - card/profile/form/avatar', async () => {
  vi.stubGlobal("useNuxtApp", () => ({
    $services: {
      auth: {
        signIn: vi.fn(),
      },
      user: {
        current: vi.fn(),
      },
      profiles: {
        getCurrentUser: vi.fn(),
        getAvatar: vi.fn(),
      },
      locations: {
        getCountries: vi.fn(),
      },
    },
    $api: {
      user: {
        getAvatar: vi.fn(),
      }
    }
  }))

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
