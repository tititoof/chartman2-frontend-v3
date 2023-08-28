import ApiFactory from '~/app/apis/factory'
import { ILoginInput, ILoginResponse } from '~/types/auth/log_in'

class AuthModule extends ApiFactory {
  static moduleName = "auth"

  private LOGIN = '/login'
  private LOGOUT = '/logout'

  async signIn (credentials: ILoginInput): Promise<ILoginResponse> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _self = this

    return await this.call<ILoginResponse>(
      this.getHeaders(),
      'POST',
      this.LOGIN,
      credentials,
      {
        // @ts-ignore
        onResponse ({ response }) {
          const authorization = response.headers.get('Authorization')
          const encryptedAuthorization = _self.encrypt(authorization)
          const config = useRuntimeConfig()

          localStorage.setItem(config.public.appStorageName, encryptedAuthorization)
        }
      }
    )
  }

  async signOut () {
    const response = await this.call(this.getAuthHeaders(), 'DELETE', this.LOGOUT)

    this.authorization = ref('')

    return response
  }
}

export default AuthModule