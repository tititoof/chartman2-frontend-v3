import { defineStore, acceptHMRUpdate } from 'pinia'
import { IStatus } from '~/types/snackbar/type'

export const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    category: '' as IStatus,
    message: '' as String,
    show: false as Boolean
  }),
  getters: {
    getCategory: (state) => state.category,
    getMessage: (state) => state.message,
    getShow: (state) => state.show,
  },
  actions: {
    setCategory(category: IStatus) {
      this.category = category
    },
    setMessage(message: String) {
      this.message = message
    },
    setShow(show: Boolean) {
      this.show = show
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSnackbarStore, import.meta.hot))
}
