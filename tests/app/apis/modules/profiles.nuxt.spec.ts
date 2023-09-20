import { describe, it, expect, vi, beforeEach } from 'vitest'

import ProfilesModule from '~/app/apis/modules/profiles' // Mettez le chemin correct

describe('ProfilesModule', () => {
  // Mock des fonctions nécessaires
  const mockApiFetcher = vi.fn()
  // Mock des fonctions nécessaires
  const mockEncrypt = vi.fn()
  const mockDecrypt = vi.fn()
  const mockUploadHeaders = vi.fn()

  // Créez une instance du module ProfilesModule
  let profilesModule: ProfilesModule

  beforeEach(() => {
    // @ts-ignore
    profilesModule = new ProfilesModule(mockApiFetcher, mockEncrypt, mockDecrypt)
  })

  it('get should retrieve user profile', async () => {
    // Mock de la réponse API
    const mockApiResponse = {
      // Mockez ici les données du profil
    }

    // Mock de la fonction de requête
    mockApiFetcher.mockReturnValueOnce(Promise.resolve(mockApiResponse))

    // Appel de la fonction get
    const result = await profilesModule.get()

    // Vérifications
    expect(mockApiFetcher).toHaveBeenCalled()
    // Vérifiez les résultats
  })

  it('list should retrieve list of profiles', async () => {
    // Mock de la réponse API
    const mockApiResponse = {}

    // Mock de la fonction de requête
    mockApiFetcher.mockReturnValueOnce(Promise.resolve(mockApiResponse))

    // Appel de la fonction list
    const result = await profilesModule.list()

    // Vérifications
    expect(mockApiFetcher).toHaveBeenCalled()
    // Vérifiez les résultats
  })

  it('show should retrieve a specific profile', async () => {
    // Mock de la réponse API
    const mockApiResponse = {
      // Mockez ici les données du profil
    }

    // Mock de la fonction de requête
    mockApiFetcher.mockReturnValueOnce(Promise.resolve(mockApiResponse))

    // Appel de la fonction show
    const profileId = 'profileId'
    const result = await profilesModule.show(profileId)

    // Vérifications
    expect(mockApiFetcher).toHaveBeenCalled()
  })

  it('post should create a new profile', async () => {
    // Mock de la réponse API
    const mockApiResponse = {
      // Mockez ici la réponse de création du profil
    }

    // Mock de la fonction de requête
    mockApiFetcher.mockReturnValueOnce(Promise.resolve(mockApiResponse))

    // Appel de la fonction post
    const params = {
      profile: {
        address: 'test address',
        date_of_birth: '2023-01-01',
        email: 'toto@toto.fr',
        first_name: 'toto',
        last_name: 'tata',
        nickname: 'nickname',
        phone: '+3306060606',
        city_id: '1'
      }
    }
    const result = await profilesModule.post(params)

    // Vérifications
    expect(mockApiFetcher).toHaveBeenCalled()
    // Vérifiez les résultats
  })

  it('postAvatar should upload an avatar', async () => {
    // Mock de la réponse API (non nécessaire dans ce cas)
    const mockApiResponse = {}

    // Mock de la fonction de requête
    mockApiFetcher.mockReturnValueOnce(Promise.resolve(mockApiResponse))

    // Appel de la fonction postAvatar
    const params = {
      // Mockez ici les paramètres pour l'avatar
    }
    const result = await profilesModule.postAvatar(params)

    // Vérifications
    expect(mockApiFetcher).toHaveBeenCalled()
  })
})