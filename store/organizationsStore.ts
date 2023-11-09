import { defineStore, acceptHMRUpdate } from 'pinia'
import { IOrganization } from '~/types/organization'

export const useOrganizationsStore = defineStore('organizations', {
  state: () => ({
    list: null as IOrganization[] | null,
  }),
  getters: {
    getList: (state) => state.list,
  },
  actions: {
    setList(organizations: IOrganization[]) {
      this.list = organizations
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useOrganizationsStore, import.meta.hot))
}
