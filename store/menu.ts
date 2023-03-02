import { defineStore, acceptHMRUpdate} from 'pinia'
import { useUserStore } from './user'

export const useMenuStore = defineStore({
  id: 'menu-store',
  state: () => {
    return {
      items: [
        {
          name: "global.home", //this.$vuetify.lang.t('$vuetify.app_bar.home'),
          route: "/",
          needloggedIn: false,
        },
        {
          name: 'global.legal_notices', //this.$vuetify.lang.t('$vuetify.app_bar.login'),
          route: "/legal_notices",
          needloggedIn: false,
        }
      ]
    }
  },
  getters: {
    visibledItems: (state) => {
      const user = useUserStore();

      return state.items.filter(
        (item) => item.needloggedIn === user.getConnected
      )
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot))
}