import ApiFactory from '~/app/apis/factory'
import { IUser } from '~/types/user'

class UsersModule extends ApiFactory {
  static moduleName = "users"

  private CURRENT_USER_URL = '/v1/current_user/index'
  private CURRENT_USER_AVATAR_URL = '/v1/profiles/show-avatar'

  async get (): Promise<IUser> {
    return await this.call<IUser>(
      this.getAuthHeaders(),
      'GET',
      this.CURRENT_USER_URL
    )
  }

  async getAvatar () {
    return await this.call(
      this.getAuthHeaders(),
      'GET',
      this.CURRENT_USER_AVATAR_URL
    )
  }
}

export default UsersModule