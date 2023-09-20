import { defineStore, acceptHMRUpdate } from 'pinia'
import { IProfile } from '~/types/users/profile'

export const useProfilesStore = defineStore('profiles', {
  state: () => ({
    current_user: null as IProfile | null,
    user_avatar: null as Object | null
  }),
  getters: {
    get: (state) => state.current_user,
    getAvatar: (state) => state.user_avatar
  },
  actions: {
    set(profile: IProfile) {
      this.current_user = profile
    },
    setAvatar(avatar: object) {
      this.user_avatar = avatar
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProfilesStore, import.meta.hot))
}
