import { useUsersStore } from '~/store/usersStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const nuxtApp = useNuxtApp()
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) {
    // @ts-ignore
    const usersStore = useUsersStore(nuxtApp.$pinia)
    const authenticated = computed(() => usersStore.getIsConnected)

    if (!authenticated.value) {
      return navigateTo('/')
    }
  }
})
