import { defineStore, acceptHMRUpdate } from 'pinia'

export const useNavsStore = defineStore('navs', {
  state: () => ({
    left: false,
  }),
  getters: {
    isLeft: (state) => state.left,
  },
  actions: {
    setLeft(show: boolean) {
      this.left = show
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavsStore, import.meta.hot))
}
