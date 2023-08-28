import { useUsersStore } from '~/store/usersStore'

class UserModule {
  static moduleName = 'user'

  async current() {
    const { $api } = useNuxtApp()
    const usersStore = useUsersStore()

    let result = false

    // @ts-ignore
    await $api.users
      .get()
      .then((response: any) => {
        usersStore.setCurrent(response.data)

        result = true
      })
      .catch(() => {
        result = false
      })

    return result
  }
}

export default UserModule
