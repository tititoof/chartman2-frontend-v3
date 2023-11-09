class AuthModule {
  static moduleName = "auth"

  async signIn (email: string, password: string) {
    const { $services } = useNuxtApp()

    // @ts-ignore
    const authResult = await $services.auth.signIn(email, password)

    if (! authResult) {
      return false
    }

    // @ts-ignore
    return await $services.user.current()
  }
}

export default AuthModule