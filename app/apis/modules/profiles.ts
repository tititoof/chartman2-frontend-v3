import ApiFactory from '~/app/apis/factory'
import { IProfile, IProfileParams, IProfileResponse } from '~/types/users/profile'

class ProfilesModule extends ApiFactory {
  static moduleName = "profiles"

  private PROFILES_URL = '/v1/users/profiles'

  async get (): Promise<IProfile> {
    return await this.call<IProfile>(
      this.getAuthHeaders(),
      'GET',
      this.PROFILES_URL
    )
  }

  async list (): Promise<IProfile> {
    return await this.call<IProfile>(
      this.getAuthHeaders(),
      'GET',
      `${this.PROFILES_URL}/list`
    )
  }

  async show (profileId: string): Promise<IProfile> {
    return await this.call<IProfile>(
      this.getAuthHeaders(),
      'GET',
      `${this.PROFILES_URL}/${profileId}`
    )
  }

  async post (params: IProfileParams): Promise<IProfileResponse> {
    return await this.call<IProfileResponse>(
      this.getAuthHeaders(),
      'POST',
      this.PROFILES_URL,
      params
    )
  }

  async postAvatar (params: object) {
    return await this.call(
      this.getUploadHeaders(),
      'POST',
      `${this.PROFILES_URL}/upload-avatar`,
      params
    )
  }

  async getAvatar () {
    return await this.call(
      this.getAuthHeaders(),
      'GET',
      `${this.PROFILES_URL}/show-avatar`
    )
  }
}

export default ProfilesModule