import { $Fetch } from 'ofetch'
import { RemovableRef, useStorage } from '@vueuse/core'
import { stringFunction } from '~/types/common'

class ApiFactory {
  protected authorization: RemovableRef<string>
  protected encrypt: stringFunction
  protected decrypt: stringFunction

  private $fetch: $Fetch

  constructor(fetcher: $Fetch, encryot: stringFunction, decrypt: stringFunction) {
    this.$fetch = fetcher
    this.encrypt = encryot
    this.decrypt = decrypt

    const config = useRuntimeConfig()

    this.authorization = useStorage(config.public.appStorageName, '')
  }

  /**
   * method - GET, POST, PUT
   * URL
   **/
  async call<T>(
    headers: HeadersInit,
    method: string,
    url: string,
    data?: object,
    extras = {}
  ): Promise<T> {
    const $res: T = await this.$fetch(url, { headers, method, body: data, ...extras })

    return $res
  }

  getAuthHeaders () {
    const config = useRuntimeConfig()
    const storage = useStorage(config.public.appStorageName, '')
    // @ts-ignore
    const authorization: string = this.decrypt(storage.value)

    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authorization
    }
  }

  getHeaders () {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  getUploadHeaders () {
    const config = useRuntimeConfig()
    const storage = useStorage(config.public.appStorageName, '')
    // @ts-ignore
    const authorization: string = this.decrypt(storage.value)

    return {
      Authorization: authorization
    }
  }
}

export default ApiFactory
