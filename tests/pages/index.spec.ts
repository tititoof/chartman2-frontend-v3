
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useScroll } from '~~/composables/useScroll'
import { vuetifyStubs } from '../stubs/vuetify'

import IndexResource from '../../pages/index.vue'
import PartialPresentation from '../../components/partial/presentation.vue'
import PartialAboutMe from '../../components/partial/about_me.vue'
import PartialSkills from '../../components/partial/skills.vue'
import PartialTechnologies from '../../components/partial/technologies.vue'
import PartialArticles from '../../components/partial/articles.vue'

vi.mock('#imports', () => ({
  useHead: (meta: any) => {},
}))

describe('Pages : index', () => {
  let wrapper: any = null
  
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())

    wrapper = mount(IndexResource, {
      global: {
        stubs: {
          PartialPresentation,
          PartialAboutMe, 
          PartialSkills, 
          PartialTechnologies,
          PartialArticles,
          ...vuetifyStubs
        },
      }
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  
  it ('components should be imported', () => {
    expect(useScroll).toBeDefined()
    expect(PartialPresentation).toBeDefined()
    expect(PartialAboutMe).toBeDefined()
    expect(PartialSkills).toBeDefined()
    expect(PartialTechnologies).toBeDefined()
    expect(PartialArticles).toBeDefined()
  })
})
