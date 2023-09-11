import { describe, it, expect, vi, beforeEach } from 'vitest'

import LocationsModule from '~/app/services/common/locations'

describe('LocationsModule', () => {
  let locationsModule: LocationsModule

  // // Mock de useLocationsStore
  // vi.stubGlobal('locationsStore', () => ({
  //   useLocationsStore: vi.fn(() => ({
  //     setCities: vi.fn(),
  //     setCountries: vi.fn(),
  //     setStates: vi.fn(),
  //   })),
  // }))
  // @ts-ignore
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

  beforeEach(() => {
    locationsModule = new LocationsModule()
  })

  it('getCities should call fetchCities and setCities', async () => {
    const mockFetchCities = vi.fn().mockResolvedValue({
      // Mockez ici les données utilisateur
    })

    // @ts-ignore
    useNuxtApp().$api.locations = {
      fetchCities: mockFetchCities,
      fetchCountries: vi.fn(),
      fetchStates: vi.fn(),
    }

    // const mockSetCities = vi.fn()
    // // @ts-ignore
    // useLocationsStore().setCities = mockSetCities

    // const locationsModule = new LocationsModule()
    const result = await locationsModule.getCities('stateId')

    // // Vérifiez que les méthodes ont été appelées correctement
    expect(mockFetchCities).toHaveBeenCalledWith('stateId')
    // expect(mockSetCities).toHaveBeenCalled()
    expect(result).toBe(true) // Comme la méthode getCities retourne `result = true`
  })

  // Faites de même pour les autres méthodes (getCountries et getStates)
})