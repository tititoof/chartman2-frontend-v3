import { describe, it, expect, vi, beforeEach } from 'vitest'
// @ts-ignore
import * as nuxt from '#app'

import AuthModule from '~/app/procedures/user/auth'

describe('AuthModule', () => {
  let authModule: AuthModule

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
    authModule = new AuthModule()
  })

  it('signIn should return user data on successful login', async () => {
    // @ts-ignore
    vi.spyOn(nuxt, 'useNuxtApp').mockImplementation(() =>({
      $services: {
        auth: {
          signIn: vi.fn(),
        },
        user: {
          current: vi.fn(),
        },
      },
    }))

    // Mock de signIn
    const mockSignIn = vi.fn().mockResolvedValue(true)
    // Mock de current
    const mockCurrent = vi.fn().mockResolvedValue({
      data: {
        id: '1',
        type: 'user',
        attributes: {
          id: '1',
          email: 'toto@toto.fr',
          createdAt: '2023-01-01',
          isAdmin: false,
        },
      },
    })

    // Injectez les mocks dans useNuxtApp
    // @ts-ignore
    useNuxtApp().$services.auth.signIn = mockSignIn
    // @ts-ignore
    useNuxtApp().$services.user.current = mockCurrent

    // Appel de la fonction signIn
    const email = 'test@example.com'
    const password = 'password'
    const result = await authModule.signIn(email, password)

    // Vérifications
    expect(mockSignIn).toHaveBeenCalledWith(email, password)
    expect(mockCurrent).toHaveBeenCalled()
    expect(result).toEqual({
      data: {
        id: '1',
        type: 'user',
        attributes: {
          id: '1',
          email: 'toto@toto.fr',
          createdAt: '2023-01-01',
          isAdmin: false,
        },
      },
    })
  })

  it('signIn should return false on unsuccessful login', async () => {
    // Mock de signIn pour un échec
    const mockSignIn = vi.fn().mockResolvedValue(false)

    // Injectez le mock dans useNuxtApp
    // @ts-ignore
    useNuxtApp().$services.auth.signIn = mockSignIn

    // Appel de la fonction signIn
    const email = 'test@example.com'
    const password = 'password'
    const result = await authModule.signIn(email, password)

    // Vérifications
    expect(mockSignIn).toHaveBeenCalledWith(email, password)
    expect(result).toBe(false)
  })
})
