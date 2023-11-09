import { afterEach, describe, it, expect, vi, beforeEach } from 'vitest'

import AuthModule from '~~/app/apis/modules/auth'

describe('App - apis/modules/auth', () => {
  const mockApiFetcher = vi.fn()
  const mockEncrypt = vi.fn()
  const mockDecrypt = vi.fn()

  let authModule: AuthModule

  beforeEach(() => {
    // @ts-ignore
    authModule = new AuthModule(mockApiFetcher, mockEncrypt, mockDecrypt)
  })

  it('signIn should perform authentication', async () => {
    const credentials = {
      username: 'testuser',
      password: 'testpassword'
    }

    // Mock de la réponse API
    const mockApiResponse = {
      headers: {
        get: vi.fn(() => 'mockAuthorizationToken')
      }
    }

    // Mock de la fonction de chiffrement
    mockEncrypt.mockReturnValue('encryptedToken')

    // Mock de localStorage
    const localStorageMock = (() => {
      let store: Record<string, string> = {}
      return {
        getItem: vi.fn((key) => store[key]),
        setItem: vi.fn((key, value) => {
          store[key] = value
        }),
        clear: vi.fn(() => {
          store = {}
        })
      }
    })()

    Object.defineProperty(window, 'localStorage', { value: localStorageMock })

    // Mock de la fonction de requête
    mockApiFetcher.mockReturnValueOnce(Promise.resolve(mockApiResponse))

    // Appel de la fonction signIn
    // @ts-ignore
    await authModule.signIn(credentials)

    // Vérifications
    expect(mockApiFetcher).toHaveBeenCalled()
  })

  it('signOut should perform logout', async () => {
    // Mock de la réponse API
    const mockApiResponse = {}

    // Mock de la fonction de requête
    mockApiFetcher.mockReturnValueOnce(Promise.resolve(mockApiResponse))

    // Appel de la fonction signOut
    await authModule.signOut()

    // Vérifications
    expect(mockApiFetcher).toHaveBeenCalled()
    // Vérifiez d'autres conditions
  })
})