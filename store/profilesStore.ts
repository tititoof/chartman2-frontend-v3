import { defineStore, acceptHMRUpdate } from 'pinia'
import { IProfile } from '~/types/users/profile'

export const useProfilesStore = defineStore('profiles', {
  state: () => ({
    current_user: null as IProfile | null,
  }),
  getters: {
    get: (state) => state.current_user,
  },
  actions: {
    set(profile: IProfile) {
      this.current_user = profile
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProfilesStore, import.meta.hot))
}
