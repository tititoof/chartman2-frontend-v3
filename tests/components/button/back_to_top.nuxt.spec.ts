// @vitest-environment nuxt
import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { vuetifyStubs } from '../../stubs/vuetify'

import TestResource from '~~/components/button/back_to_top.vue'
import { mount } from '@vue/test-utils'

describe('Components - button/back_to_top', async () => {
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

  it('script', () => {
    const wrapper = mount(TestResource, {
      global: {
        stubs: {
          ...vuetifyStubs,
        },
      },
    })

    expect(wrapper.vm.showBackToTop).toEqual(false)

    vi.spyOn(window, 'scrollTo').mockImplementation(() => {})

    wrapper.vm.scrollToTop()

    expect(window.scrollTo).toHaveBeenCalled()

    wrapper.vm.handleScroll()

    expect(wrapper.vm.showBackToTop).toEqual(false)
  })
})
