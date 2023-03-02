// @ts-nocheck
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMenuStore } from '../../store/menu'

describe('Store: Menu', () => {
  let store = null

  beforeEach(() => {
    // create a fresh Pinia instance and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())

    // create an instance of the data store
    store = useMenuStore()
  })

  it('initializes with correct values', () => {
    expect(store.visibledItems).toEqual([
      {
        name: "global.home", //this.$vuetify.lang.t('$vuetify.app_bar.home'),
        route: "/",
        needloggedIn: false,
      },
      {
        name: 'global.legal_notices', //this.$vuetify.lang.t('$vuetify.app_bar.login'),
        route: "/legal_notices",
        needloggedIn: false,
      }
    ])
  })

  it('test visibledItems', () => {
    expect(store.visibledItems).toEqual([
      {
        name: "global.home", //this.$vuetify.lang.t('$vuetify.app_bar.home'),
        route: "/",
        needloggedIn: false,
      },
      {
        name: 'global.legal_notices', //this.$vuetify.lang.t('$vuetify.app_bar.login'),
        route: "/legal_notices",
        needloggedIn: false,
      }
    ])
  })
})