import { defineStore, acceptHMRUpdate } from 'pinia'
import { IProfile } from '~/types/users/profile'

export const useProfilesStore = defineStore('profiles', {
  state: () => ({
    profile: null as IProfile | null,
    avatar: null as Object | null,
    timestamp: null as Date | null,
  }),
  getters: {
    get: (state) => state.profile,
    getAvatar: (state) => (state.avatar instanceof Blob) ? state.avatar : null,
    getTimestamp: (state) => state.timestamp
  },
  actions: {
    set(profile: IProfile) {
      this.profile = profile
    },
    setAvatar(avatar: object) {
      this.avatar = avatar
    },
    setTimestamp(timestamp: Date | null) {
      this.timestamp = timestamp
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProfilesStore, import.meta.hot))
}
