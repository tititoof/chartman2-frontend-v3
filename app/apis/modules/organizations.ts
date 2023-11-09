import ApiFactory from '~/app/apis/factory'
import { IOrganization } from '~/types/organization'

class OrganizationsModule extends ApiFactory {
  static moduleName = "organizations"

  private ORGANIZATIONS_URL = '/v1/organizations'

  async getList (): Promise<IOrganization> {
    return await this.call<IOrganization>(
      this.getAuthHeaders(),
      'GET',
      this.ORGANIZATIONS_URL
    )
  }
}

export default OrganizationsModule