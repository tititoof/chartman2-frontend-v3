// @ts-nocheck
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useUserStore } from '../../store/user'

describe('Store: User', () => {
  let store = null

  beforeEach(() => {
    // create a fresh Pinia instance and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())

    // create an instance of the data store
    store = useUserStore()
  })

  it('initializes with correct values', () => { 
    expect(store.getConnected).toBeFalsy()
    expect(store.getIsPhone).toBeFalsy()
  })
  
  it('test toggle', () => { 
    store.toggle() 
    expect(store.getConnected).toBeTruthy()
  })
  it('test isPhone', () => { 
    store.setIsPhone(true)
    expect(store.getIsPhone).toBeTruthy()
  })
})