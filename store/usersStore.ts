import { defineStore, acceptHMRUpdate } from 'pinia'
import { IUser } from '~/types/user'

export const useUsersStore = defineStore('users', {
  state: () => ({
    darkTheme: false,
    themeDefined: false,
    isPhone: false,
    current: {},
    isConnected: false,
  }),
  getters: {
    isDarkTheme: (state) => state.darkTheme,
    isThemeDefined: (state) => state.themeDefined,
    getIsPhone: (state) => state.isPhone,
    getCurrent: (state) => state.current,
    getIsConnected: (state) => state.isConnected,
  },
  actions: {
    toggleDarkTheme() {
      this.darkTheme = !this.darkTheme
      this.themeDefined = true
    },
    setDarkTheme(darkTheme: boolean) {
      this.darkTheme = darkTheme
      this.themeDefined = true
    },
    setIsPhone(isPhone: boolean) {
      this.isPhone = isPhone
    },
    setCurrent(user: IUser) {
      this.current = user
    },
    setIsConnected(isConnected: boolean) {
      this.isConnected = isConnected
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))
}
