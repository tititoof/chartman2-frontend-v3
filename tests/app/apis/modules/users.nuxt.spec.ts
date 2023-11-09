import { afterEach, describe, it, expect, vi, beforeEach } from 'vitest'

import UsersModule from '~/app/apis/modules/users' // Mettez le chemin correct

describe('UsersModule', () => {
  // Mock des fonctions nécessaires
  const mockApiFetcher = vi.fn()
  const mockEncrypt = vi.fn()
  const mockDecrypt = vi.fn()


  // Créez une instance du module UsersModule
  let usersModule: UsersModule

  beforeEach(() => {
    // @ts-ignore
    usersModule = new UsersModule(mockApiFetcher, mockEncrypt, mockDecrypt)
  })

  it('get should retrieve current user', async () => {
    // Mock de la réponse API
    const mockApiResponse = {
      data: {
        id: '1',
        type: 'user',
        attributes: {
          id: '1',
          email: 'toto@toto.fr',
          createdAt: '2023-01-01',
          isAdmin: false
        }
      }
    }

    // Mock de la fonction de requête
    mockApiFetcher.mockReturnValueOnce(Promise.resolve(mockApiResponse))

    // Appel de la fonction get
    const result = await usersModule.get()

    // Vérifications
    expect(mockApiFetcher).toHaveBeenCalled()
  })
})