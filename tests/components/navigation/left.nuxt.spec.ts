// @vitest-environment nuxt
import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from 'vitest-environment-nuxt/utils'
import { vuetifyStubs } from '../../stubs/vuetify'
import { mockNuxtImport } from 'nuxt-vitest/utils'

import TestResource from '~~/components/navigation/left.vue'

mockNuxtImport('useAsyncData', () => {
  return vi.fn()
})

describe('Components - navigation/left', () => {
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
