import { defineStore, acceptHMRUpdate} from 'pinia'

export const useSidebarsStore = defineStore({
  id: 'sidebar-store',
  state: () => {
    return {
      left: false,
      bottom: false
    }
  },
  actions: {
    toggleLeft() {
      this.left = !this.left
    },
    toggleBottom() {
      this.bottom = !this.bottom
    }
  },
  getters: {
    getLeft: state => state.left,
    getBottom: state => state.bottom
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSidebarsStore, import.meta.hot))
}