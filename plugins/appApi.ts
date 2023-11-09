import { RemovableRef } from '@vueuse/core'
import * as CryptoJS from 'crypto-js'
import { $fetch, FetchOptions } from 'ofetch'

export default defineNuxtPlugin((nuxtApp) => {
  // onNuxtReady(async () => {
    const fetchOptions: FetchOptions = {
      baseURL: nuxtApp.$config.public.apiBaseUrl,
    }

    const encrypt = (message: RemovableRef<string> | null) => {
      const key = nuxtApp.$config.public.cryptSecretKey
      const iv = nuxtApp.$config.public.cryptIV
      const encrypted = CryptoJS.AES.encrypt(
        CryptoJS.enc.Utf8.parse(message),
        key,
        {
          keySize: 128 / 8,
          iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        }
      )

      return encrypted
    }

    const decrypt = (encryptedMessage: RemovableRef<string> | null) => {
      // https://stackoverflow.com/questions/41671267/encrypt-the-string-in-typescript-and-decrypt-in-c-sharp-using-advanced-encryptio/41792242
      const key = nuxtApp.$config.public.cryptSecretKey
      const iv = nuxtApp.$config.public.cryptIV
      const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key, {
        keySize: 128 / 8,
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      })

      return decrypted.toString(CryptoJS.enc.Utf8)
    }

    /** create a new instance of $fetcher with custom option */
    const apiFetcher = $fetch.create(fetchOptions)

    const modulesToImport = import.meta.glob('../app/apis/modules/*.ts')
    const modules = {}

    for (const path in modulesToImport) {
      modulesToImport[path]().then((module) => {
        const moduleName = module.default.moduleName // Récupérer l'attribut statique "name"
        const moduleInstance = new module.default(apiFetcher, encrypt, decrypt) // Créer une instance du module

        modules[moduleName] = moduleInstance // Ajouter le module à l'objet addedModules
      })
    }

    return {
      provide: {
        api: modules,
      },
    }
  // })
})
