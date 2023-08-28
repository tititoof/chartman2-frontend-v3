import { describe, it, expect, vi } from 'vitest'

import ProfilesModule from '~/app/procedures/user/profiles' // Mettez le chemin correct

describe('ProfilesModule', () => {

  vi.stubGlobal("useNuxtApp", () => ({
    $services: {
      profiles: {
        getCurrentUser: vi.fn(),
      },
      locations: {
        getCountries: vi.fn(),
      },
    },
  }))

  it('getCurrentUser should call services correctly', async () => {
    const mockGetCurrentUser = vi.fn()
    const mockGetCountries = vi.fn()

    // @ts-ignore
    useNuxtApp().$services.profiles.getCurrentUser = mockGetCurrentUser
    // @ts-ignore
    useNuxtApp().$services.locations.getCountries = mockGetCountries

    const profilesModule = new ProfilesModule()
    await profilesModule.getCurrentUser()

    // Vérifiez que les méthodes des services ont été appelées
    expect(mockGetCurrentUser).toHaveBeenCalled()
    expect(mockGetCountries).toHaveBeenCalled()
  })
})
