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
    const userResult = await $services.user.current()

    return userResult
  }
}

export default AuthModule