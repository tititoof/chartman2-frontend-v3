import { useProfilesStore } from '~/store/profilesStore'
import { IProfileResponse } from '~/types/users/profile'

class ProfilesModule {
  static moduleName = 'profiles'

  async getCurrentUser() {
    const { $api } = useNuxtApp()
    const profilesStore = useProfilesStore()

    let result = false

    // @ts-ignore
    await $api.profiles
      .get()
      .then((response: IProfileResponse) => {
        profilesStore.set(response.data)

        result = true
      })
      .catch(() => {
        result = false
      })

    return result
  }

  async setCurrentUser(
    firstName: string,
    lastName: string,
    nickname: string,
    phone: string,
    dateOfBirth: string,
    city: string
  ) {
    const { $api, $services } = useNuxtApp()
    const profilesStore = useProfilesStore()

    let result = false

    // @ts-ignore
    await $api.profiles
      .post({
        profile: {
          first_name: firstName,
          last_name: lastName,
          nickname,
          phone,
          date_of_birth: dateOfBirth,
          city_id: city,
        },
      })
      .then((response: IProfileResponse) => {
        profilesStore.set(response.data)

        result = true
      })
      .catch(() => {
        result = false
      })

    if (result) {
      // @ts-ignore
      $services.notifications.success('form.successed')
    } else {
      // @ts-ignore
      $services.notifications.error('form.failed')
    }

    return result
  }

  async getAvatar() {
    const { $api } = useNuxtApp()
    const profilesStore = useProfilesStore()

    // @ts-ignore
    await $api.profiles
      .getAvatar()
      .then((response: any) => {
        profilesStore.setAvatar(response.data)
      })
      .catch((error: any) => {
        console.warn(error)
      })
  }

  async setAvatar(image: object) {
    const { $api } = useNuxtApp()
    // @ts-ignore
    await $api.profiles
      .postAvatar(image)
      .then((response: any) => {
        console.log(response)
      })
      .catch((error: any) => {
        console.warn(error)
      })
  }
}

export default ProfilesModule
