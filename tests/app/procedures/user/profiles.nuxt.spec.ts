import { describe, it, expect, vi, beforeEach } from 'vitest'

import ProfilesModule from '~/app/procedures/user/profiles'

describe('ProfilesModule', () => {
  let profilesModule: ProfilesModule

  vi.stubGlobal("useNuxtApp", () => ({
    $services: {
      profiles: {
        getCurrentUser: vi.fn(),
        getAvatar: vi.fn(),
      },
      locations: {
        getCountries: vi.fn(),
      },
    },
  }))

  beforeEach(() => {
    profilesModule = new ProfilesModule()
  })

  it('getCurrentUser should call services correctly', async () => {
    const mockGetCurrentUser = vi.fn()
    const mockGetCountries = vi.fn()
    const mockGetAvatar = vi.fn()

    // @ts-ignore
    useNuxtApp().$services.profiles.getCurrentUser = mockGetCurrentUser
    // @ts-ignore
    useNuxtApp().$services.locations.getCountries = mockGetCountries
    // @ts-ignore
    useNuxtApp().$services.profiles.getAvatar = mockGetAvatar

    await profilesModule.getCurrentUser()

    // Vérifiez que les méthodes des services ont été appelées
    expect(mockGetCurrentUser).toHaveBeenCalled()
    expect(mockGetCountries).toHaveBeenCalled()
  })
})
