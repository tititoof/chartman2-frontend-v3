import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    darkTheme: false,
    themeDefined: false,
    isPhone: false
  }),
  getters: {
    isDarkTheme: state => state.darkTheme,
    isThemeDefined: state => state.themeDefined,
    getIsPhone: state => state.isPhone
  },
  actions: {
    toggleDarkTheme() {
      this.darkTheme = ! this.darkTheme
      this.themeDefined = true
    },
    setDarkTheme(darkTheme: boolean) {
      this.darkTheme = darkTheme
      this.themeDefined = true
    },
    setIsPhone(isPhone: boolean) {
      this.isPhone = isPhone
    }
  },
  persist: {
    storage: persistedState.localStorage,
  }
})