import { useProfilesStore } from '~/store/profilesStore'

class ProfilesModule {
  static moduleName = "profiles"

  async getCurrentUser () {
    const { $services } = useNuxtApp()
    const profilesStore = useProfilesStore()

    profilesStore.setTimestamp(null)

    // @ts-ignore
    await $services.profiles.getCurrentUser()

    // @ts-ignore
    await $services.locations.getCountries()

    // @ts-ignore
    await $services.profiles.getAvatar()

    profilesStore.setTimestamp(new Date())
  }
}

export default ProfilesModule