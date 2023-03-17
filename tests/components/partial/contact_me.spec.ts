import { describe, it, expect, beforeEach, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { vuetifyStubs } from '~~/tests/stubs/vuetify'
import { createVuetify } from "vuetify";
import flushPromises from "flush-promises";
import createFetchMock from 'vitest-fetch-mock';

import ComponentContactMe from '../../../components/partial/contact_me.vue'

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

describe('Components : ContactMe', () => {
  let wrapper: any = null

  // @ts-ignore
  beforeEach(() => {
    fetchMocker.resetMocks();
    let vuetify;
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
    vuetify = createVuetify();

    wrapper = shallowMount(ComponentContactMe, {
      global: {
        stubs: {
          ...vuetifyStubs
        },
        plugins: [vuetify],
      }
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('expect form values', () => {
    expect(wrapper.vm.valid).toBeFalsy()
    expect(wrapper.vm.name).toEqual("")
    expect(wrapper.vm.email).toEqual("")
    expect(wrapper.vm.subject).toEqual("")
    expect(wrapper.vm.message).toEqual("")
  })

  it('sendEmail', async () => {
    wrapper.vm.valid = true
    wrapper.vm.name = 'test name'
    wrapper.vm.email = 'toto@toto.fr'
    wrapper.vm.subject = 'mon sujet trop bien'
    wrapper.vm.message = 'This is a message with enough data...'
    await wrapper.vm.sendEmail()
    await flushPromises()

    expect(wrapper.vm.valid).toBeFalsy()
    expect(wrapper.vm.name).toEqual("")
    expect(wrapper.vm.email).toEqual("")
    expect(wrapper.vm.subject).toEqual("")
    expect(wrapper.vm.message).toEqual("")
    expect(fetchMock.requests().length).toEqual(1);
    expect(fetchMock.requests()[0].url).toEqual('https://api.chartman2.fr/contacts/send')
  })
})
