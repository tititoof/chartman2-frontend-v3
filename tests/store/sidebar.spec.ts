// @ts-nocheck
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSidebarsStore } from '../../store/sidebars'

describe('Store: Sidebar', () => {
  let store = null

  beforeEach(() => {
    // create a fresh Pinia instance and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())

    // create an instance of the data store
    store = useSidebarsStore()
  })

  it('initializes with correct values', () => {
    expect(store.getLeft).toBeFalsy()
    expect(store.getBottom).toBeFalsy()
  })

  it('test toggleLeft', () => {
    store.toggleLeft()

    expect(store.getLeft).toBeTruthy()
  })

  it('test toggleBottom', () => {
    store.toggleBottom()

    expect(store.getBottom).toBeTruthy()
  })
})