class ProfilesModule {
  static moduleName = "profiles"

  async getCurrentUser () {
    const { $services } = useNuxtApp()

    // @ts-ignore
    const profileResult = await $services.profiles.getCurrentUser()

    // @ts-ignore
    const countriesResult = await $services.locations.getCountries()
  }
}

export default ProfilesModule