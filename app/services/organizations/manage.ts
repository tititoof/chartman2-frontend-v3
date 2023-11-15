import { useOrganizationsStore } from '~/store/organizationsStore'

class OrganizationModule {
  static moduleName = 'organizations'

  async getList() {
    const { $api } = useNuxtApp()
    const organizationsStore = useOrganizationsStore()

    let result = false

    // @ts-ignore
    await $api.organizations
      .getList()
      .then((response: any) => {
        organizationsStore.setList(response.data)

        result = true
      })
      .catch(() => {
        result = false
      })

    return result
  }

  async create(params: any) {
    const { $api } = useNuxtApp()

    let result = false

    // @ts-ignore
    await $api.organizations
      .create(params)
      .then(() => {

        result = true
      })
      .catch(() => {
        result = false
      })

    return result
  }
}

export default OrganizationModule
