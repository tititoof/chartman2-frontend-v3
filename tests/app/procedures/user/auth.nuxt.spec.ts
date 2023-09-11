import { describe, it, expect, vi, beforeEach } from 'vitest'

import AuthModule from '~/app/procedures/user/auth'

describe('AuthModule', () => {
  let authModule: AuthModule

  vi.stubGlobal("useNuxtApp", () => ({
    $services: {
      auth: {
        signIn: vi.fn(),
      },
      user: {
        current: vi.fn(),
      },
    },
  }))

  // Mock de current
  const mockCurrent = vi.fn().mockResolvedValue({
    // Mockez ici les données utilisateur
  })

  beforeEach(() => {
    authModule = new AuthModule()
  })

  it('signIn should return user data on successful login', async () => {
    // Mock de signIn
    const mockSignIn = vi.fn().mockResolvedValue(true)

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
      // Vérifiez les données utilisateur renvoyées
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