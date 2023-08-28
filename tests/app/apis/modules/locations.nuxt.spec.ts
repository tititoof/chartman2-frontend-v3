import { describe, it, expect, vi, beforeEach } from 'vitest'

import LocationsModule from '~/app/apis/modules/locations' // Mettez le chemin correct

describe('App - apis/modules/locations', () => {
  // Mock des fonctions nécessaires
  const mockApiFetcher = vi.fn()
  const mockEncrypt = vi.fn()
  const mockDecrypt = vi.fn()

  // Créez une instance du module LocationsModule
  let locationsModule: LocationsModule

  beforeEach(() => {
    // @ts-ignore
    locationsModule = new LocationsModule(mockApiFetcher, mockEncrypt, mockDecrypt)
  })

  it('fetchCities should retrieve cities for a state', async () => {
    // Mock de la réponse API

    const mockApiResponse = {
      data: [
        {
          id: '1',
          type: 'city',
          attributes: {
            id: '1',
            name: 'city test',
            latitude: '0.5',
            longitude: '0.5',
          }
        }
      ]
    }

    // Mock de la fonction de requête
    mockApiFetcher.mockReturnValueOnce(Promise.resolve(mockApiResponse))

    // Appel de la fonction fetchCities
    const stateId = 'stateId'
    const result = await locationsModule.fetchCities(stateId)

    // Vérifications
    expect(mockApiFetcher).toHaveBeenCalled()
    // Vérifiez les résultats
  })

  it('fetchCountries should retrieve countries', async () => {
    // Mock de la réponse API
    const mockApiResponse = {
      data: [
        {
          id: '1',
          type: 'country',
          attributes: {
            id: '1',
            name: 'country test',
            latitude: '0.5',
            longitude: '0.5',
          }
        }
      ]
    }

    // Mock de la fonction de requête
    mockApiFetcher.mockReturnValueOnce(Promise.resolve(mockApiResponse))

    // Appel de la fonction fetchCountries
    const result = await locationsModule.fetchCountries()

    // Vérifications
    expect(mockApiFetcher).toHaveBeenCalled()
    // Vérifiez les résultats
  })

  it('fetchStates should retrieve states for a country', async () => {
    // Mock de la réponse API
    const mockApiResponse = {
      data: [
        {
          id: '1',
          type: 'state',
          attributes: {
            id: '1',
            name: 'state test',
            latitude: '0.5',
            longitude: '0.5',
          }
        }
      ]
    }

    // Mock de la fonction de requête
    mockApiFetcher.mockReturnValueOnce(Promise.resolve(mockApiResponse))

    // Appel de la fonction fetchStates
    const countryId = 'countryId'
    const result = await locationsModule.fetchStates(countryId)

    // Vérifications
    expect(mockApiFetcher).toHaveBeenCalled()
    // Vérifiez les résultats
  })
})