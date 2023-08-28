import { useUsersStore } from '~/store/usersStore'

class AuthModule {
  static moduleName = "auth"

  async signIn (email: string, password: string) {
    const { $api } = useNuxtApp()
    const usersStore = useUsersStore()

    let result = false

    // @ts-ignore
    await $api.auth.signIn({
      user: {
        email,
        password
      }
    }).then(() => {
      result = true
    }).catch(() => {
      result = false
    })

    usersStore.setIsConnected(result)

    return result
  }
}

export default AuthModule