import { defineStore, acceptHMRUpdate} from 'pinia'

export const useUserStore = defineStore({
  id: 'user-store',
  state: () => {
    return {
      connected: false,
      isPhone: false
    }
  },
  actions: {
    toggle() {
      this.connected = !this.connected
    },
    setIsPhone(isPhone: boolean) {
      this.isPhone = isPhone
    }
  },
  getters: {
    getConnected: state => state.connected,
    getIsPhone: state => state.isPhone
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}