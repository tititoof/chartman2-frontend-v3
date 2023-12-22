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

  async get (id: string): Promise<IOrganization> {
    return await this.call<IOrganization>(
      this.getAuthHeaders(),
      'GET',
      `${this.ORGANIZATIONS_URL}/${id}`,
    )
  }

  async create (params: any): Promise<IOrganization> {
    return await this.call<IOrganization>(
      this.getAuthHeaders(),
      'POST',
      this.ORGANIZATIONS_URL,
      params
    )
  }

  async update (id: string, params: any): Promise<IOrganization> {
    return await this.call<IOrganization>(
      this.getAuthHeaders(),
      'PUT',
      `${this.ORGANIZATIONS_URL}/${id}`,
      params
    )
  }
}

export default OrganizationsModule