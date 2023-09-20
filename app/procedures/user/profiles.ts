class ProfilesModule {
  static moduleName = "profiles"

  async getCurrentUser () {
    const { $services } = useNuxtApp()

    // @ts-ignore
    await $services.profiles.getCurrentUser()

    // @ts-ignore
    await $services.locations.getCountries()

    // @ts-ignore
    await $services.profiles.getAvatar()
  }
}

export default ProfilesModule