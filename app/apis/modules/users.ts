import ApiFactory from '~/app/apis/factory'
import { IUser } from '~/types/user'

class UsersModule extends ApiFactory {
  static moduleName = "users"

  private CURRENT_USER_URL = '/v1/current_user/index'

  async get (): Promise<IUser> {
    return await this.call<IUser>(
      this.getAuthHeaders(),
      'GET',
      this.CURRENT_USER_URL
    )
  }
}

export default UsersModule