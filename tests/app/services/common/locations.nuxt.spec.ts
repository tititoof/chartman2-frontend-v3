import { describe, it, expect, vi } from 'vitest'

import LocationsModule from '~/app/services/common/locations' // Mettez le chemin correct

vi.stubGlobal("useNuxtApp", () => ({
  $api: {
    locations: {
      fetchCities: vi.fn(),
      fetchCountries: vi.fn(),
      fetchStates: vi.fn(),
    },
  },
  $services: {
    profiles: {
      getCurrentUser: vi.fn(),
    },
    locations: {
      getCountries: vi.fn(),
    },
  },
}))

describe('LocationsModule', () => {
  // // Mock de useLocationsStore
  // vi.stubGlobal('locationsStore', () => ({
  //   useLocationsStore: vi.fn(() => ({
  //     setCities: vi.fn(),
  //     setCountries: vi.fn(),
  //     setStates: vi.fn(),
  //   })),
  // }))
  // @ts-ignore

  it('getCities should call fetchCities and setCities', async () => {
    const mockFetchCities = vi.fn(() =>
      Promise.resolve({ data: {} })
    )

    // @ts-ignore
    useNuxtApp().$api.locations.fetchCities = mockFetchCities

    const mockSetCities = vi.fn()
    // @ts-ignore
    useLocationsStore().setCities = mockSetCities

    const locationsModule = new LocationsModule()
    const result = await locationsModule.getCities('stateId')

    // Vérifiez que les méthodes ont été appelées correctement
    expect(mockFetchCities).toHaveBeenCalledWith('stateId')
    expect(mockSetCities).toHaveBeenCalled()
    expect(result).toBe(true) // Comme la méthode getCities retourne `result = true`
  })

  // Faites de même pour les autres méthodes (getCountries et getStates)
})